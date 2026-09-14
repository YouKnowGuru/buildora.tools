'use client';

import { LocaleLink as Link } from '@/components/layout/LocaleLink';
import { useLanguage } from '@/lib/i18n/LanguageContext';

/**
 * Locale-scoped 404. Lives inside app/[locale] so it renders with the right
 * <html lang>, header, and footer instead of Next's bare fallback.
 *
 * Uses `notFoundPage`, not `notFound` — the latter says "Calculator not found",
 * which is wrong for an arbitrary bad URL. The calculator-specific copy stays
 * on calculators/[slug]/not-found.tsx.
 */
export default function LocaleNotFound() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t.notFoundPage.heading}</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{t.notFoundPage.description}</p>
      <Link
        href="/calculators"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-700"
      >
        {t.notFoundPage.browseAll}
      </Link>
    </div>
  );
}
