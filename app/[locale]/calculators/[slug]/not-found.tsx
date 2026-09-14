'use client';

import { LocaleLink as Link } from '@/components/layout/LocaleLink';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ToolNotFound() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t.notFound.heading}</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        {t.notFound.description}
      </p>
      <Link
        href="/calculators"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-700"
      >
        {t.notFound.browseAll}
      </Link>
    </div>

  );
}

