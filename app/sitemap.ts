import type { MetadataRoute } from 'next';
import { tools } from '@/lib/registry/tools';
import {
  localeUrl,
  hreflangAlternates,
} from '@/lib/seo/locale-urls';
import {
  indexableLocalesForTool,
  toolHreflangAlternates,
} from '@/lib/seo/locale-coverage';
import { indexableLocalesForStaticPage } from '@/lib/seo/static-page-coverage';

// changeFrequency and priority are deliberately omitted — Google has stated
// it ignores both. `lastModified` is also omitted until it can be sourced
// from a real per-page content update rather than the deployment timestamp.
const ROUTES = ['/', '/calculators', '/about', '/contact', '/privacy', '/terms'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages are fully translated in translations.ts for all 15 locales,
  // so every locale is listed.
  const staticEntries = ROUTES.flatMap((path) =>
    indexableLocalesForStaticPage(path).map((locale) => ({
      url: localeUrl(locale, path),
      alternates: { languages: hreflangAlternates(path, indexableLocalesForStaticPage(path)) },
    })),
  );

  // Tool pages are listed only for locales that have a real guide on disk.
  // Submitting a noindexed URL in a sitemap is a contradiction — the sitemap
  // says "please index this", the page says "do not". Both sides are derived
  // from the same coverage check so they cannot drift apart.
  const toolEntries = tools.flatMap((tool) => {
    const languages = toolHreflangAlternates(tool.slug);
    return indexableLocalesForTool(tool.slug).map((locale) => ({
      url: localeUrl(locale, `/calculators/${tool.slug}`),
      alternates: { languages },
    }));
  });

  return [...staticEntries, ...toolEntries];
}
