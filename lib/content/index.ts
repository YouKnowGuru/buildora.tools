import fs from 'node:fs';
import path from 'node:path';

const CONTENT_ROOT = path.join(process.cwd(), 'lib', 'content');

/**
 * Loads a tool's SEO content file by name. Server-only — never imported
 * from a 'use client' component. Reads happen at build time for statically
 * generated tool pages (see generateStaticParams in [slug]/page.tsx).
 */
export function loadContent(fileName: string): string {
  try {
    return fs.readFileSync(path.join(CONTENT_ROOT, fileName), 'utf-8');
  } catch {
    return '';
  }
}

/**
 * Loads the long-form guide for a tool in a specific locale.
 *
 * English lives at `lib/content/<file>.md`; every other locale mirrors those
 * filenames under `lib/content/i18n/<locale>/<file>.md`. Returns '' when a
 * locale has no guide yet, so the caller can fall back to the short article
 * stub in toolTranslations.ts rather than showing English copy on a
 * translated page.
 */
export function loadLocalizedContent(fileName: string, locale: string): string {
  if (locale === 'en') return loadContent(fileName);
  try {
    return fs.readFileSync(path.join(CONTENT_ROOT, 'i18n', locale, fileName), 'utf-8');
  } catch {
    return '';
  }
}
