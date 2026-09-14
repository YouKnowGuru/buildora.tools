import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HomePageClient } from './HomePageClient';
import { JsonLd, webSiteSchema } from '@/components/seo/JsonLd';
import { translations } from '@/lib/i18n/translations';
import {
  SITE_URL,
  LOCALE_CODES,
  isLocale,
  localeUrl,
  hreflangAlternates,
} from '@/lib/seo/locale-urls';

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALE_CODES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const t = translations[locale];
  const url = localeUrl(locale, '/');
  const title = `${t.homepage.heroHeading} | Buildora`;

  return {
    title: { absolute: title },
    description: t.homepage.heroSubhead,
    alternates: {
      canonical: url,
      languages: hreflangAlternates('/'),
    },
    openGraph: {
      title,
      description: t.homepage.heroSubhead,
      url,
      siteName: 'Buildora',
      type: 'website',
      locale,
      images: ['/og/asphalt-calculator.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: t.homepage.heroSubhead,
      images: ['/og/asphalt-calculator.jpg'],
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <JsonLd id="website-schema" data={webSiteSchema(SITE_URL)} />
      <HomePageClient />
    </>
  );
}
