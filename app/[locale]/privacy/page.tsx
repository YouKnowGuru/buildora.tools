import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrivacyPageClient } from './PrivacyPageClient';
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
  return buildPageMetadata({
    locale,
    path: '/privacy',
    title: t.privacyPage.heading,
    description: t.privacyPage.disclaimer,
  });
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <PrivacyPageClient />;
}
