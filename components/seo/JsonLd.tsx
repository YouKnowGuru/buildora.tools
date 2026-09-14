interface JsonLdProps {
  id?: string;
  data: Record<string, unknown>;
  nonce?: string;
}

/**
 * Renders a single JSON-LD structured data block. In Next.js App Router
 * (React 19 / Next.js 16), JSON-LD is rendered via a standard script tag
 * in Server Components so search engine crawlers (Googlebot, Bingbot)
 * parse it directly from initial HTML without next/script hydration warnings.
 */
export function JsonLd({ id, data, nonce }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      nonce={nonce}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}


export function organizationSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Buildora',
    url: siteUrl,
    logo: `${siteUrl}/icons/icon-512.png`,
    description:
      'Free construction calculators for contractors, builders, and tradespeople.',
    // sameAs intentionally omitted until real social profiles exist —
    // pointing at nonexistent URLs is worse than having no sameAs.
  };
}

/**
 * WebSite schema on the homepage. Declares the site name Google should use
 * in results (helps avoid Google inventing its own from the <title>).
 */
export function webSiteSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Buildora',
    alternateName: 'Buildora Construction Calculators',
    url: siteUrl,
  };
}

export function softwareApplicationSchema(params: {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'WebApplication'],
    name: params.name,
    description: params.description,
    url: params.url,
    applicationCategory: params.applicationCategory,
    operatingSystem: 'Any (Web-based)',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    // Intentionally no aggregateRating — do not fabricate ratings.
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
