'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LOCALES } from '@/lib/i18n/translations';
import { localePath, isLocale } from '@/lib/seo/locale-urls';

export function LanguageSwitcher() {
  const { locale } = useLanguage();
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0]!;

  // Strip any existing locale prefix to get the locale-agnostic path, so each
  // option can link to the same page in its own language.
  const segments = pathname.split('/');
  const basePath =
    segments[1] && isLocale(segments[1]) ? `/${segments.slice(2).join('/')}` : pathname;

  // Close on click-outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard: Escape closes
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger Button */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen((prev) => !prev)}
        className="flex min-h-[36px] items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-primary dark:hover:text-primary"
      >
        <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">{current.flag} {current.label}</span>
        <span className="sm:hidden">{current.flag}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown — real <a> links so crawlers can follow them into each
          locale, and so switching language changes the URL. */}
      {open && (
        <ul
          className="absolute right-0 top-full z-50 mt-2 max-h-80 w-48 overflow-y-auto rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:shadow-2xl"
        >
          {LOCALES.map((lang) => {
            const isCurrent = locale === lang.code;
            return (
              <li key={lang.code}>
                <Link
                  href={localePath(lang.code, basePath || '/')}
                  hrefLang={lang.code}
                  aria-current={isCurrent ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition hover:bg-slate-50 dark:hover:bg-slate-700 ${
                    isCurrent
                      ? 'font-semibold text-primary dark:text-primary'
                      : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  <span className="text-base leading-none">{lang.flag}</span>
                  <span className="flex-1">{lang.label}</span>
                  {isCurrent && (
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
