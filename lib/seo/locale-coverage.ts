import fs from 'node:fs';
import path from 'node:path';
import { tools } from '@/lib/registry/tools';
import type { Locale } from '@/lib/i18n/translations';
import { LOCALE_CODES, DEFAULT_LOCALE, localeUrl } from './locale-urls';

/**
 * SERVER-ONLY. Reads the filesystem, so this must never be imported from a
 * 'use client' component. Safe callers: sitemap.ts, robots.ts, and the
 * generateMetadata/page bodies of server components.
 *
 * ---------------------------------------------------------------------------
 * Why this exists
 * ---------------------------------------------------------------------------
 * Every locale × tool combination is a real prerendered URL. But a URL only
 * deserves to be *indexed* once it has real content behind it. Without this
 * gate, a locale with no guide written yet would publish a page carrying an
 * ~80-character stub — thin content that will not rank, and that dilutes the
 * site-wide quality signal for the locales that are actually finished.
 *
 * So indexability is derived from what is on disk rather than from a hand-kept
 * list. Write `lib/content/i18n/<locale>/<file>.md` and that page becomes
 * indexable on the next build; delete it and it drops back out. There is no
 * flag to remember to flip, which means the sitemap, the hreflang cluster, and
 * the robots meta tag can never disagree with each other.
 */

const CONTENT_ROOT = path.join(process.cwd(), 'lib', 'content');
const I18N_ROOT = path.join(CONTENT_ROOT, 'i18n');

/**
 * A guide must clear this size to count as real content.
 *
 * Existence alone is too weak a test: an empty or placeholder file would
 * happily mark a page indexable. Written guides run 3,000–14,000 bytes, and
 * the stubs this system exists to suppress are under 250, so 1,200 sits in
 * open space between the two with no risk of a false positive either way.
 */
const MIN_GUIDE_BYTES = 1_200;

// These translations are presentable to visitors, but the guide-quality gate
// flags them as thin (limited methodology and FAQ coverage). Keep them out of
// search results until their full guides have been expanded. The calculator
// itself remains available and links on these pages can still be followed.
const THIN_LOCALIZED_GUIDES = new Set([
  'basementWaterproofing.md',
  'gutterCleaning.md',
]);

function guideSize(locale: Locale, contentFile: string): number {
  if (locale !== DEFAULT_LOCALE && THIN_LOCALIZED_GUIDES.has(contentFile)) {
    return 0;
  }

  const file =
    locale === DEFAULT_LOCALE
      ? path.join(CONTENT_ROOT, contentFile)
      : path.join(I18N_ROOT, locale, contentFile);
  try {
    return fs.statSync(file).size;
  } catch {
    return 0;
  }
}

/**
 * Built once at module load. Next evaluates this in a single build process,
 * so the ~200 stat() calls happen one time rather than per page render.
 */
const INDEXABLE: ReadonlySet<string> = (() => {
  const set = new Set<string>();
  for (const locale of LOCALE_CODES) {
    for (const tool of tools) {
      if (guideSize(locale, tool.contentFile) >= MIN_GUIDE_BYTES) {
        set.add(`${locale}:${tool.slug}`);
      }
    }
  }
  return set;
})();

/** True when this locale has a real long-form guide for this tool. */
export function isToolIndexable(locale: Locale, slug: string): boolean {
  return INDEXABLE.has(`${locale}:${slug}`);
}

/** The locales whose version of this tool page is worth indexing. */
export function indexableLocalesForTool(slug: string): Locale[] {
  return LOCALE_CODES.filter((locale) => isToolIndexable(locale, slug));
}

/**
 * hreflang for a tool page, restricted to indexable locales.
 *
 * Listing a noindexed URL as an hreflang alternate sends Google two
 * contradictory instructions about the same page — "here is the Japanese
 * version of this document" alongside "do not index the Japanese version".
 * Filtering keeps the cluster consistent with the robots directive.
 */
export function toolHreflangAlternates(slug: string): Record<string, string> {
  const path_ = `/calculators/${slug}`;
  const languages: Record<string, string> = {};

  for (const locale of indexableLocalesForTool(slug)) {
    languages[locale] = localeUrl(locale, path_);
  }

  // x-default is the fallback for users whose language we do not serve, so it
  // points at English — but only if English is genuinely present.
  if (isToolIndexable(DEFAULT_LOCALE, slug)) {
    languages['x-default'] = localeUrl(DEFAULT_LOCALE, path_);
  }

  return languages;
}

/** Per-locale counts, for the `npm run coverage` report and for debugging. */
export function coverageByLocale(): { locale: Locale; covered: number; total: number }[] {
  return LOCALE_CODES.map((locale) => ({
    locale,
    covered: tools.filter((tool) => isToolIndexable(locale, tool.slug)).length,
    total: tools.length,
  }));
}
