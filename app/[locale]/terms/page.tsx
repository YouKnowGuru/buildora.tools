import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TermsPageClient } from './TermsPageClient';
import { LOCALE_CODES, isLocale } from '@/lib/seo/locale-urls';
import { buildPageMetadata } from '@/lib/seo/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALE_CODES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return buildPageMetadata({
    locale,
    path: '/terms',
    title: 'Terms of Service',
    description: 'Buildora Terms of Service: user guidelines, construction calculation disclaimers, and terms of use.',
  });
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <TermsPageClient />;
}
