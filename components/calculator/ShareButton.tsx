'use client';

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function ShareButton() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  async function handleShare() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail in insecure contexts — fail silently.
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-150 hover:border-primary/40 hover:bg-slate-50 hover:text-primary active:scale-[0.98] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-primary/50 dark:hover:bg-slate-800 dark:hover:text-primary sm:text-sm"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
          <span className="text-emerald-600 dark:text-emerald-400">{t.calculator.copied}</span>
        </>
      ) : (
        <>
          <Share2 className="h-4 w-4 text-slate-400 group-hover:text-primary" aria-hidden="true" />
          <span>{t.calculator.share}</span>
        </>
      )}
    </button>
  );
}
