'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { localePath } from '@/lib/seo/locale-urls';

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  /** Locale-agnostic path, e.g. `/calculators/asphalt-calculator`. */
  href: string;
};

/**
 * Drop-in replacement for next/link that keeps the visitor inside their
 * current locale. Without this, a Spanish visitor clicking an internal link
 * would be dropped back onto the English tree — and crawlers would find no
 * internal links into the translated URLs at all.
 *
 * Hash-only and absolute hrefs pass through untouched.
 */
export function LocaleLink({ href, ...rest }: LocaleLinkProps) {
  const { locale } = useLanguage();

  if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) {
    return <Link href={href} {...rest} />;
  }

  // Split a trailing hash (`/#how-it-works`) so the prefix lands on the path.
  const hashIndex = href.indexOf('#');
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const hash = hashIndex === -1 ? '' : href.slice(hashIndex);

  return <Link href={`${localePath(locale, path || '/')}${hash}`} {...rest} />;
}
