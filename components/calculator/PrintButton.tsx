'use client';

import { Printer } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function PrintButton() {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-150 hover:border-primary/40 hover:bg-slate-50 hover:text-primary active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-primary/50 dark:hover:bg-slate-800 dark:hover:text-primary sm:text-sm"
    >
      <Printer className="h-4 w-4 text-slate-400" aria-hidden="true" />
      <span>{t.calculator.print}</span>
    </button>
  );
}
