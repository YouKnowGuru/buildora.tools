import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { marked } from 'marked';
import { tools, getToolBySlug } from '@/lib/registry/tools';
import { loadLocalizedContent } from '@/lib/content';
import { preprocessLatex } from '@/lib/markdown/latex';
import { CalculatorClient } from './CalculatorClient';
import { ToolBreadcrumb } from '@/components/layout/ToolBreadcrumb';
import { JsonLd, softwareApplicationSchema, breadcrumbSchema, faqPageSchema } from '@/components/seo/JsonLd';
import { AffiliateBanner } from '@/components/calculator/AffiliateBanner';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { ToolHeader } from '@/components/calculator/ToolHeader';
import { ToolArticle } from '@/components/calculator/ToolArticle';
import { getLocalizedTool } from '@/lib/i18n/toolTranslations';
import { TOOL_FAQS } from '@/lib/content/faqs';
import { translations } from '@/lib/i18n/translations';
import {
  LOCALE_CODES,
  DEFAULT_LOCALE,
  isLocale,
  localeUrl,
} from '@/lib/seo/locale-urls';
import { isToolIndexable, toolHreflangAlternates } from '@/lib/seo/locale-coverage';

// Next.js 16: params is a Promise and must be awaited.
type ToolPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

/**
 * Some older English guides include their own FAQ subsection. Tool pages also
 * render the canonical FAQ block from TOOL_FAQS below the guide, which made
 * those questions appear twice. Remove only that guide subsection when the
 * canonical block is present, preserving any later guide sections.
 */
function removeGuideFaqSection(markdown: string): string {
  const lines = markdown.split('\n');
  const faqHeading = /^(#{1,6})\s+(?:\d+\.\s+)?Frequently Asked Questions(?:\s*\(FAQ\))?\s*#*\s*$/i;
  let start = -1;
  let level = 0;

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index]!.match(faqHeading);
    if (match) {
      start = index;
      level = match[1]!.length;
      break;
    }
  }

  if (start === -1) return markdown;

  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    const match = lines[index]!.match(/^(#{1,6})\s+/);
    if (match && match[1]!.length <= level) {
      end = index;
      break;
    }
  }

  return [...lines.slice(0, start), ...lines.slice(end)].join('\n').trim();
}

// These calculator-specific cards have not been created yet. A verified
// shared card is preferable to publishing a social-image URL that returns 404.
const SHARED_OG_IMAGE_TOOLS = new Set([
  'gutter-cleaning-cost-calculator',
  'basement-waterproofing-cost-calculator',
  'battery-backup-calculator',
  'home-inspection-cost-calculator',
]);

// Every locale × tool combination is prerendered, so each translation is a
// real static URL a crawler can reach — not a client-side text swap.
export function generateStaticParams() {
  return LOCALE_CODES.flatMap((locale) => tools.map((tool) => ({ locale, slug: tool.slug })));
}

// Metadata is derived from the `[locale]` route segment, so the title,
// description, canonical, and OG card are all in the page's own language.
export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const tool = getToolBySlug(slug);
  if (!tool) return {};

  const localized = getLocalizedTool(slug, locale);
  const t = translations[locale];

  const path = `/calculators/${tool.slug}`;
  const url = localeUrl(locale, path);
  const toolName = localized?.name ?? tool.name;
  const toolDescription = localized?.shortDescription ?? tool.shortDescription;
  const ogImage = SHARED_OG_IMAGE_TOOLS.has(tool.slug)
    ? '/og/asphalt-calculator.jpg'
    : `/og/${tool.slug}.jpg`;

  // Boilerplate comes from the locale bundle. Hardcoding it welded an English
  // suffix onto translated tool names in every <title> and OG card.
  // metaTitle overrides the default pattern for tools that need a stronger SERP title.
  const pageTitle =
    locale === DEFAULT_LOCALE && tool.metaTitle
      ? `${tool.metaTitle} | Buildora`
      : `${toolName} | ${t.toolPage.titleSuffix} | Buildora`;
  const socialTitle = `${toolName} — ${t.toolPage.ogSuffix} | Buildora`;

  return {
    title: { absolute: pageTitle },
    description: toolDescription,
    keywords: tool.keywords,
    alternates: {
      canonical: url,
      languages: toolHreflangAlternates(tool.slug),
    },
    openGraph: {
      title: socialTitle,
      description: toolDescription,
      url,
      siteName: 'Buildora',
      locale,
      images: [ogImage],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: toolDescription,
      images: [ogImage],
    },
    robots: isToolIndexable(locale, tool.slug)
      ? { index: true, follow: true }
      : // No long-form guide in this locale yet, so the page would ship an
        // ~80-character stub. `follow` stays on so link equity still flows to
        // the calculators index and the related tools; only indexing is held
        // back. Writing lib/content/i18n/<locale>/<file>.md flips this
        // automatically on the next build.
        { index: false, follow: true },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  // The guide is loaded for THIS locale and parsed on the server, so every
  // language ships real prose in its initial HTML rather than a stub that a
  // client component fills in after hydration.
  const rawContent = loadLocalizedContent(tool.contentFile, locale);

  const localized = getLocalizedTool(tool.slug, locale);
  const toolName = localized?.name ?? tool.name;
  const toolDescription = localized?.shortDescription ?? tool.shortDescription;

  const t = translations[locale];

  // The FAQ copy in TOOL_FAQS is English-only, so it is shown (and marked up)
  // on the English pages only.
  const faqs = TOOL_FAQS[tool.slug] ?? [];
  const showFaq = locale === DEFAULT_LOCALE && faqs.length > 0;
  const guideContent = showFaq ? removeGuideFaqSection(rawContent) : rawContent;
  const contentHtml = guideContent ? await marked.parse(preprocessLatex(guideContent)) : '';

  // Schema URLs must match the canonical for THIS locale, otherwise every
  // translated page would claim the English URL as its subject.
  const canonicalUrl = localeUrl(locale, `/calculators/${tool.slug}`);

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-10">
      <JsonLd
        id="tool-software-schema"
        data={softwareApplicationSchema({
          name: toolName,
          description: toolDescription,
          url: canonicalUrl,
          applicationCategory: tool.schema.applicationCategory,
        })}
      />
      <JsonLd
        id="tool-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: t.footer.home, url: localeUrl(locale, '/') },
          { name: t.nav.calculators, url: localeUrl(locale, '/calculators') },
          { name: toolName, url: canonicalUrl },
        ])}
      />
      {/* FAQPage markup is emitted only when there are real Q&As (an empty
          mainEntity array is a Search Console error) AND only on the English
          pages, because the Q&A copy is English-only. Putting English markup
          on a Spanish page is a language mismatch Google penalises. */}
      {showFaq && <JsonLd id="tool-faq-schema" data={faqPageSchema(faqs)} />}

      <ToolBreadcrumb
        toolSlug={tool.slug}
        toolName={tool.name}
      />

      <ToolHeader tool={tool} />

      <div className="mt-8">
        <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-slate-100 dark:bg-slate-800" />}>
          <CalculatorClient tool={tool} />
        </Suspense>
      </div>

      <ToolArticle tool={tool} localeHtml={contentHtml} />

      {/* Visible FAQ — Google requires FAQPage markup content to be on-page */}
      {showFaq && (
        <section className="mt-16 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900 sm:p-8" aria-labelledby="faq-heading">
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-primary-foreground">
            Help & Guidance
          </span>
          <h2 id="faq-heading" className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {t.toolPage.faqHeading}
          </h2>
          <div className="mt-6 divide-y divide-slate-100 dark:divide-slate-800">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary dark:bg-primary/20">
                    Q
                  </span>
                  <span>{faq.question}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Affiliate banner — disclosed as affiliate per FTC requirement once live */}
      <div className="mt-12">
        <AffiliateBanner category={tool.category} />
      </div>

      {/* Ad placeholder — empty div until an ad network is integrated (§10) */}
      <div id="ad-placeholder" className="mt-8" aria-hidden="true" />

      {/* Registry-driven Related Calculators — links other tools in the same category */}
      <RelatedCalculators currentSlug={tool.slug} category={tool.category} />
    </div>
  );
}
