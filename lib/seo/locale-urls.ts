import { LOCALES, type Locale } from '@/lib/i18n/translations';

export const DEFAULT_LOCALE: Locale = 'en';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://buildora.tools';

export const LOCALE_CODES: Locale[] = LOCALES.map((l) => l.code);

/**
 * URL strategy
 * ------------
 * English is served at the unprefixed root (`/calculators/asphalt-calculator`)
 * and every other locale gets a path prefix (`/es/calculators/...`).
 *
 * Keeping English unprefixed avoids breaking existing indexed URLs and
 * inbound links. The tradeoff is that `en` and `x-default` both point at the
 * same unprefixed URL, which is exactly what Google's hreflang docs
 * recommend for a default-language root.
 */
export function localePath(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  if (locale === DEFAULT_LOCALE) return clean === '' ? '/' : clean;
  return `/${locale}${clean}`;
}

export function localeUrl(locale: Locale, path: string): string {
  const p = localePath(locale, path);
  return p === '/' ? SITE_URL : `${SITE_URL}${p}`;
}

/**
 * Builds the `alternates.languages` map Next.js turns into
 * `<link rel="alternate" hreflang="...">` tags. Includes x-default per
 * Google's guidance so unmatched users land on the English root.
 */
export function hreflangAlternates(
  path: string,
  locales: readonly Locale[] = LOCALE_CODES
): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const code of locales) {
    languages[code] = localeUrl(code, path);
  }
  languages['x-default'] = localeUrl(DEFAULT_LOCALE, path);
  return languages;
}

/**
 * Type guard for validating a route segment against the supported locales.
 */
export function isLocale(value: string): value is Locale {
  return (LOCALE_CODES as string[]).includes(value);
}
