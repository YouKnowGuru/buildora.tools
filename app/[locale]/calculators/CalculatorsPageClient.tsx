'use client';

import { LocaleLink as Link } from '@/components/layout/LocaleLink';
import { tools } from '@/lib/registry/tools';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import type { ToolCategory } from '@/lib/registry/types';
import { ArrowRight, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';

// Category colour map
const CATEGORY_COLORS: Record<string, string> = {
  'site-work':   'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800/40',
  'roofing':     'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/30 dark:text-sky-300 dark:border-sky-800/40',
  'concrete':    'bg-stone-50 text-stone-700 border-stone-200 dark:bg-stone-950/30 dark:text-stone-300 dark:border-stone-800/40',
  'hvac':        'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/30 dark:text-teal-300 dark:border-teal-800/40',
  'electrical':  'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/30 dark:text-yellow-300 dark:border-yellow-800/40',
  'flooring':    'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-300 dark:border-orange-800/40',
  'framing':     'bg-lime-50 text-lime-700 border-lime-200 dark:bg-lime-950/30 dark:text-lime-300 dark:border-lime-800/40',
  'masonry':     'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-300 dark:border-red-800/40',
  'structural':  'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-300 dark:border-indigo-800/40',
  'exterior':    'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800/40',
  'landscaping': 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-300 dark:border-green-800/40',
  'solar':       'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-800/40',
  'plumbing':    'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/30 dark:text-cyan-300 dark:border-cyan-800/40',
  'paint':       'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/30 dark:text-pink-300 dark:border-pink-800/40',
  'services':    'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/30 dark:text-violet-300 dark:border-violet-800/40',
};

// Left accent bar colour per category
const CATEGORY_ACCENT: Record<string, string> = {
  'site-work':   'border-l-amber-400',
  'roofing':     'border-l-sky-400',
  'concrete':    'border-l-stone-400',
  'hvac':        'border-l-teal-400',
  'electrical':  'border-l-yellow-400',
  'flooring':    'border-l-orange-400',
  'framing':     'border-l-lime-400',
  'masonry':     'border-l-red-400',
  'structural':  'border-l-indigo-400',
  'exterior':    'border-l-emerald-400',
  'landscaping': 'border-l-green-400',
  'solar':       'border-l-purple-400',
  'plumbing':    'border-l-cyan-400',
  'paint':       'border-l-pink-400',
  'services':    'border-l-violet-400',
};

// All unique categories from registry
const ALL_CATEGORIES: ToolCategory[] = Array.from(
  new Set(tools.map((t) => t.category))
) as ToolCategory[];

export function CalculatorsPageClient() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'all'>('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchCat = activeCategory === 'all' || tool.category === activeCategory;
      const matchQ = !q
        || tool.name.toLowerCase().includes(q)
        || tool.shortDescription.toLowerCase().includes(q)
        || tool.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [activeCategory, query]);

  return (
    <div>
      {/* ── Page header ── */}
      <div className="border-b border-slate-100 bg-gradient-to-b from-primary-50/60 to-white dark:border-slate-800 dark:from-slate-900/80 dark:to-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-400">
            Free tools
          </p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.calculatorsPage.heading}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            {tools.length} {t.calculatorsPage.description}
          </p>

          {/* Search bar */}
          <div className="relative mt-6 max-w-md">
            <label htmlFor="tool-search" className="sr-only">Search calculators</label>
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id="tool-search"
              type="search"
              placeholder="Search calculators…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-9 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-primary"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* ── Category filter tabs ── */}
        <div className="mb-8 overflow-x-auto pb-1" role="tablist" aria-label="Filter by category">
          <div className="flex gap-2 min-w-max">
            {/* "All" tab */}
            <button
              role="tab"
              aria-selected={activeCategory === 'all'}
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${
                activeCategory === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-primary/40 dark:hover:text-primary-300'
              }`}
            >
              All ({tools.length})
            </button>

            {ALL_CATEGORIES.map((cat) => {
              const count = tools.filter((t) => t.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveCategory(isActive ? 'all' : cat)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold capitalize transition-all duration-150 ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-primary/40 dark:hover:text-primary-300'
                  }`}
                >
                  {cat.replace('-', ' ')} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Results count ── */}
        {(query || activeCategory !== 'all') && (
          <p className="mb-5 text-sm text-slate-500 dark:text-slate-400">
            Showing <strong className="text-slate-900 dark:text-white">{filtered.length}</strong> of {tools.length} tools
            {activeCategory !== 'all' && (
              <> in <strong className="capitalize text-slate-900 dark:text-white">{activeCategory.replace('-', ' ')}</strong></>
            )}
            {query && (
              <> matching &ldquo;<strong className="text-slate-900 dark:text-white">{query}</strong>&rdquo;</>
            )}
          </p>
        )}

        {/* ── Tools grid ── */}
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool) => {
              const badgeClass = CATEGORY_COLORS[tool.category] ?? 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
              const accentClass = CATEGORY_ACCENT[tool.category] ?? 'border-l-slate-300';
              return (
                <Link
                  key={tool.slug}
                  href={`/calculators/${tool.slug}`}
                  className={`group flex flex-col rounded-2xl border border-l-4 border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover dark:border-slate-800 dark:bg-slate-900 ${accentClass}`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`rounded-lg border px-2.5 py-1 text-xs font-semibold capitalize ${badgeClass}`}>
                      {tool.category.replace('-', ' ')}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary dark:text-slate-600 dark:group-hover:text-primary-400"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="mt-4 text-base font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary-400">
                    {tool.name}
                  </h2>
                  <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {tool.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary dark:text-primary-400">
                    {t.calculatorsPage.openCalculator}
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center dark:border-slate-700 dark:bg-slate-900/40">
            <Search className="mx-auto mb-3 h-8 w-8 text-slate-300 dark:text-slate-600" aria-hidden="true" />
            <p className="font-semibold text-slate-900 dark:text-white">No calculators found</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Try a different search term or clear the filters.
            </p>
            <button
              type="button"
              onClick={() => { setQuery(''); setActiveCategory('all'); }}
              className="mt-4 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
