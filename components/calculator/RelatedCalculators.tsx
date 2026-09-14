'use client';

import { LocaleLink as Link } from '@/components/layout/LocaleLink';
import { tools } from '@/lib/registry/tools';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getLocalizedTool } from '@/lib/i18n/toolTranslations';
import { ArrowUpRight, Calculator } from 'lucide-react';

interface RelatedCalculatorsProps {
  currentSlug: string;
  category: string;
}

export function RelatedCalculators({ currentSlug, category }: RelatedCalculatorsProps) {
  const { locale } = useLanguage();
  const related = tools.filter((t) => t.category === category && t.slug !== currentSlug);
  if (related.length === 0) return null;

  return (
    <section className="mt-16 border-t border-slate-200/80 pt-12 dark:border-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-primary-foreground">
            Explore More Trades
          </span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Related Calculators
          </h2>
        </div>
        <Link
          href="/calculators"
          className="text-xs font-semibold text-primary hover:underline dark:text-primary-foreground"
        >
          View all {tools.length} calculators →
        </Link>
      </div>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((tool) => {
          const localized = getLocalizedTool(tool.slug, locale);
          const name = localized?.name ?? tool.name;
          const shortDesc = localized?.shortDescription ?? tool.shortDescription;

          return (
            <li key={tool.slug}>
              <Link
                href={`/calculators/${tool.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition group-hover:bg-primary/10 group-hover:text-primary dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-primary/20 dark:group-hover:text-primary-foreground">
                      <Calculator className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-3 font-bold text-slate-900 transition group-hover:text-primary dark:text-white dark:group-hover:text-primary-foreground">
                    {name}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500 line-clamp-2 dark:text-slate-400">
                    {shortDesc}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-[11px] font-semibold text-slate-400 dark:border-slate-800 dark:text-slate-500">
                  <span className="capitalize">{tool.category.replace('-', ' ')}</span>
                  <span>·</span>
                  <span>Free & Instant</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
