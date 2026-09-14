'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

interface UnitToggleProps {
  value: 'imperial' | 'metric';
  onChange: (value: 'imperial' | 'metric') => void;
}

export function UnitToggle({ value, onChange }: UnitToggleProps) {
  const { t } = useLanguage();

  const options: { code: 'imperial' | 'metric'; label: string; hint: string }[] = [
    { code: 'imperial', label: t.calculator.unitImperial, hint: 'ft · in · lbs' },
    { code: 'metric',   label: t.calculator.unitMetric,   hint: 'm · cm · kg' },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Unit system"
      className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-100/90 p-1 dark:border-slate-700/80 dark:bg-slate-800/90 shadow-inner"
    >
      {options.map(({ code, label, hint }) => {
        const isActive = value === code;
        return (
          <button
            key={code}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(code)}
            className={`group relative flex min-h-[38px] items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              isActive
                ? 'bg-white text-primary shadow-sm dark:bg-slate-900 dark:text-white ring-1 ring-slate-950/5 dark:ring-white/10'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <span className="capitalize">{label}</span>
            <span
              className={`hidden text-[10px] sm:inline font-normal ${
                isActive ? 'text-primary/70 dark:text-slate-300' : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              ({hint})
            </span>
          </button>
        );
      })}
    </div>
  );
}
