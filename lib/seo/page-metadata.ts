import type { Metadata } from 'next';
import type { Locale } from '@/lib/i18n/translations';
import { localeUrl, hreflangAlternates } from './locale-urls';
import { indexableLocalesForStaticPage } from './static-page-coverage';

/**
 * Builds a complete, locale-aware Metadata object for a simple static page.
 *
 * Every page needs the same four things to be correct for search and social:
 * a self-referencing canonical for its own locale, the full hreflang set,
 * an OG card, and a Twitter card. Centralising it here means adding a page
 * can't silently ship without them.
 */
export function buildPageMetadata(params: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  /** Pass true to keep the "%s | Buildora" template; false sets an exact title. */
  useTitleTemplate?: boolean;
  image?: string;
}): Metadata {
  const { locale, path, title, description, useTitleTemplate = true, image } = params;
  const indexableLocales = indexableLocalesForStaticPage(path);
  const isIndexable = indexableLocales.includes(locale);
  const canonicalLocale = isIndexable ? locale : 'en';
  const url = localeUrl(canonicalLocale, path);
  const images = image ? [image] : ['/og/asphalt-calculator.jpg'];

  return {
    title: useTitleTemplate ? title : { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(path, indexableLocales),
    },
    robots: { index: isIndexable, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Buildora',
      type: 'website',
      locale,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  };
}
