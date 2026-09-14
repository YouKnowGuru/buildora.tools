import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import '../globals.css';
import { JsonLd, organizationSchema } from '@/components/seo/JsonLd';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { ThemeProvider } from '@/lib/theme/ThemeContext';
import { LOCALES } from '@/lib/i18n/translations';
import { SITE_URL, LOCALE_CODES, isLocale, hreflangAlternates } from '@/lib/seo/locale-urls';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export function generateStaticParams() {
  return LOCALE_CODES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Buildora — Free Construction Calculators for Contractors',
    template: '%s | Buildora',
  },
  description:
    'Free construction calculators for contractors, builders, and tradespeople. Fast, accurate, mobile-friendly estimators for every job site.',
  robots: { index: true, follow: true },
  alternates: { languages: hreflangAlternates('/') },
  // Shared social defaults so pages that don't declare their own still get a
  // usable preview card. Individual pages override title/description/url.
  openGraph: {
    siteName: 'Buildora',
    type: 'website',
    title: 'Buildora — Free Construction Calculators for Contractors',
    description:
      'Free construction calculators for contractors, builders, and tradespeople. Fast, accurate, mobile-friendly estimators for every job site.',
    images: ['/og/asphalt-calculator.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buildora — Free Construction Calculators for Contractors',
    description:
      'Free construction calculators for contractors, builders, and tradespeople.',
    images: ['/og/asphalt-calculator.jpg'],
  },
  icons: {
    icon: [
      { url: '/icons/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const isRtl = LOCALES.find((l) => l.code === locale)?.rtl ?? false;

  return (
    // lang/dir are rendered server-side from the route param so crawlers see
    // the correct language on the initial HTML, not a client-side mutation.
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        {/* Theme init — runs before React hydration to prevent dark-mode flash. */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('buildora_theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className="flex min-h-screen flex-col font-sans antialiased"
        suppressHydrationWarning
      >
        <JsonLd id="org-schema" data={organizationSchema(SITE_URL)} />
        {plausibleDomain && (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
        <ThemeProvider>
          <LanguageProvider locale={locale}>
            <Header />
            <main className="flex-1" suppressHydrationWarning>{children}</main>
            <Footer />
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
