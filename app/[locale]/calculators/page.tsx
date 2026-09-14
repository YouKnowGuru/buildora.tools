import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CalculatorsPageClient } from './CalculatorsPageClient';
import { tools } from '@/lib/registry/tools';
import { translations } from '@/lib/i18n/translations';
import { LOCALE_CODES, isLocale } from '@/lib/seo/locale-urls';
import { buildPageMetadata } from '@/lib/seo/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALE_CODES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const t = translations[locale];

  // Description is built from the live registry count rather than a
  // hardcoded number, so it can never overstate how many tools exist.
  return buildPageMetadata({
    locale,
    path: '/calculators',
    title: `${t.calculatorsPage.heading} — Buildora`,
    description: `${tools.length} ${t.calculatorsPage.description}`,
    useTitleTemplate: false,
  });
}

export default async function CalculatorsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <CalculatorsPageClient />;
}
