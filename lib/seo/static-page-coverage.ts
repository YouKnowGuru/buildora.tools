import { DEFAULT_LOCALE, LOCALE_CODES } from './locale-urls';
import type { Locale } from '@/lib/i18n/translations';

// These routes currently contain English legal text only. They stay available
// in every locale for navigation, but must not be advertised to crawlers as
// translated documents until legally reviewed translations are supplied.
const ENGLISH_ONLY_PATHS = new Set(['/privacy', '/terms']);

export function indexableLocalesForStaticPage(path: string): Locale[] {
  return ENGLISH_ONLY_PATHS.has(path) ? [DEFAULT_LOCALE] : LOCALE_CODES;
}
