'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { MasterCalculator } from '@/components/calculator/MasterCalculator';
import { AffiliateBanner } from '@/components/calculator/AffiliateBanner';
import { parseToolQueryParams } from '@/lib/validation/schemas';
import type { ToolConfig } from '@/lib/registry/types';

interface CalculatorClientProps {
  tool: ToolConfig;
}

/**
 * This is the ONLY client-hydrated part of the tool page — everything else
 * (title, SEO content, JSON-LD, breadcrumb) stays server-rendered so LCP
 * isn't gated on JS hydration. Query-param prefill also happens here so the
 * page itself stays statically generated.
 */
export function CalculatorClient({ tool }: CalculatorClientProps) {
  const searchParams = useSearchParams();
  const initialValues = useMemo(() => {
    const parsed = parseToolQueryParams(tool.slug, new URLSearchParams(searchParams.toString()));
    return Object.keys(parsed).length > 0 ? parsed : undefined;
  }, [tool.slug, searchParams]);

  return (
    <div className="space-y-4">
      <MasterCalculator tool={tool} initialValues={initialValues} />
      <AffiliateBanner category={tool.category} />
    </div>
  );
}
