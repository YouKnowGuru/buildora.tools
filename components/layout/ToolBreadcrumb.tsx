'use client';

import { LocaleLink as Link } from '@/components/layout/LocaleLink';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getLocalizedTool } from '@/lib/i18n/toolTranslations';

interface Crumb {
  name: string;
  href?: string;
}

interface ToolBreadcrumbProps {
  items?: Crumb[];
  toolSlug?: string;
  toolName?: string;
}

export function ToolBreadcrumb({ items, toolSlug, toolName }: ToolBreadcrumbProps) {
  const { t, locale } = useLanguage();

  const localizedTool = toolSlug ? getLocalizedTool(toolSlug, locale) : undefined;
  const resolvedToolName = localizedTool?.name ?? toolName ?? (items && items[items.length - 1]?.name) ?? '';

  const resolvedItems: Crumb[] = items
    ? items.map((item, idx) => {
        if (idx === 0) return { name: t.footer.home, href: item.href ?? '/' };
        if (idx === 1) return { name: t.nav.calculators, href: item.href ?? '/calculators' };
        return { name: resolvedToolName };
      })
    : [
        { name: t.footer.home, href: '/' },
        { name: t.nav.calculators, href: '/calculators' },
        { name: resolvedToolName },
      ];

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-xs font-medium text-slate-500 dark:text-slate-400">
      <ol className="flex flex-wrap items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50/80 px-3.5 py-1.5 shadow-2xs backdrop-blur-xs dark:border-slate-800 dark:bg-slate-900/80">
        {resolvedItems.map((item, index) => {
          const isLast = index === resolvedItems.length - 1;
          const isFirst = index === 0;

          return (
            <li key={index} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 transition hover:text-primary dark:hover:text-primary-foreground"
                >
                  {isFirst && <Home className="h-3 w-3" aria-hidden="true" />}
                  <span>{item.name}</span>
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[220px]"
                >
                  {item.name}
                </span>
              )}
              {!isLast && <ChevronRight className="h-3 w-3 text-slate-400" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
