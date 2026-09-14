'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { type Locale, type Translation, translations, LOCALES } from './translations';

interface LanguageContextValue {
  locale: Locale;
  t: Translation;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'en',
  t: translations.en,
  isRtl: false,
});

/**
 * Locale comes from the `[locale]` route segment, not from localStorage or
 * navigator.language. That is what makes each translation crawlable: the
 * server renders the correct language into the initial HTML at a distinct
 * URL, instead of swapping text client-side behind a single English URL.
 *
 * Changing language is a navigation (see LanguageSwitcher), not a setState.
 */
export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const isRtl = LOCALES.find((l) => l.code === locale)?.rtl ?? false;

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
