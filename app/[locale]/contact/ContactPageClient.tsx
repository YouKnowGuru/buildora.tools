'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export function ContactPageClient() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t.contactPage.heading}</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        {t.contactPage.p1}
      </p>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        {t.contactPage.emailLabel}{' '}
        <a href="mailto:hello@buildora.tools" className="font-medium text-primary hover:underline">
          hello@buildora.tools
        </a>
      </p>
    </div>

  );
}
