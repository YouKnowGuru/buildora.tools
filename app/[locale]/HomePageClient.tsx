'use client';

import { LocaleLink as Link } from '@/components/layout/LocaleLink';
import { tools, getToolBySlug } from '@/lib/registry/tools';
import { NewsletterForm } from '@/components/calculator/NewsletterForm';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import {
  ArrowRight, Calculator, Smartphone, Shield,
  Zap, CheckCircle2, Users, Lock,
} from 'lucide-react';

// Pin the hero CTA to a specific tool so reordering the registry never
// silently breaks the button text / link pairing.
const featuredTool = getToolBySlug('asphalt-calculator');
const previewTools = tools.slice(0, 6);

// Category → colour mapping for tool cards
const CATEGORY_COLORS: Record<string, string> = {
  'site-work':   'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
  'roofing':     'bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300',
  'concrete':    'bg-stone-50 text-stone-700 dark:bg-stone-950/40 dark:text-stone-300',
  'hvac':        'bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300',
  'electrical':  'bg-yellow-50 text-yellow-700 dark:bg-yellow-950/40 dark:text-yellow-300',
  'flooring':    'bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300',
  'framing':     'bg-lime-50 text-lime-700 dark:bg-lime-950/40 dark:text-lime-300',
  'masonry':     'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300',
  'structural':  'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300',
  'exterior':    'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
  'landscaping': 'bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-300',
  'solar':       'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300',
  'plumbing':    'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300',
  'paint':       'bg-pink-50 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300',
  'services':    'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300',
};

const STATS = [
  { value: `${tools.length}+`, label: 'Free Tools' },
  { value: '100%', label: 'Free Forever' },
  { value: '0', label: 'Login Required' },
  { value: '15+', label: 'Languages' },
];

const TRUST_ITEMS = [
  {
    icon: <Zap className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Lightning Fast',
    desc: 'Instant results — no page reloads, no waiting. Built for real job sites.',
  },
  {
    icon: <Smartphone className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Mobile Optimised',
    desc: 'Works perfectly on any phone, tablet, or desktop — any screen size.',
  },
  {
    icon: <Lock className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'No Login Required',
    desc: 'Jump straight in. No account, no email, no credit card ever needed.',
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Contractor Accurate',
    desc: 'Formulas validated against industry standards and field-tested daily.',
  },
];

export function HomePageClient() {
  const { t } = useLanguage();

  return (
    <div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden border-b border-slate-100 dark:border-slate-800"
      >
        {/* Background gradient mesh */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark"
        />
        {/* Decorative blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-900/20" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-primary-100/40 blur-3xl dark:bg-primary-950/30" />

        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:py-32">
          {/* Badge */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm dark:border-primary-800/60 dark:bg-slate-900/60 dark:text-primary-300">
            <span className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-primary-400" aria-hidden="true" />
            {tools.length}+ Free Professional Calculators
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="animate-slide-up mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {t.homepage.heroHeading.split(' ').map((word, i) =>
              i === 0 ? (
                <span key={i} className="gradient-text">{word} </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>

          {/* Sub-headline */}
          <p className="animate-slide-up-delay mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t.homepage.heroSubhead}
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up-delay-2 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {featuredTool && (
              <Link
                href={`/calculators/${featuredTool.slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-primary-700 hover:-translate-y-0.5 hover:shadow-xl btn-glow"
              >
                {t.homepage.ctaPrimary}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:border-primary hover:text-primary hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-primary dark:hover:text-primary"
            >
              {t.homepage.ctaSecondary}
            </Link>
          </div>

          {/* Stats strip */}
          <div className="animate-slide-up-delay-3 mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map(({ value, label }) => (
              <div key={label} className="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/50">
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">{value}</p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FEATURED TOOL BANNER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {featuredTool && (
        <section aria-labelledby="featured-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 p-8 shadow-glow-primary">
            {/* Shine overlay */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-card-shine" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  ⭐ {t.homepage.featuredNew}
                </span>
                <h2 id="featured-heading" className="mt-3 text-2xl font-bold text-white">
                  {featuredTool.name}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-100">
                  {featuredTool.shortDescription}
                </p>
              </div>
              <Link
                href={`/calculators/${featuredTool.slug}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-lg transition hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.homepage.featuredOpen}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TOOLS PREVIEW GRID
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section aria-labelledby="tools-heading" className="border-y border-slate-100 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-400">
                Tools library
              </p>
              <h2 id="tools-heading" className="mt-1 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                Popular Calculators
              </h2>
            </div>
            <Link
              href="/calculators"
              className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex dark:text-primary-400"
            >
              View all {tools.length} tools
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {previewTools.map((tool) => {
              const colorClass = CATEGORY_COLORS[tool.category] ?? 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300';
              return (
                <Link
                  key={tool.slug}
                  href={`/calculators/${tool.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary/40"
                >
                  <div className="flex items-start justify-between">
                    <span className={`rounded-lg px-2.5 py-1 text-xs font-semibold capitalize ${colorClass}`}>
                      {tool.category.replace('-', ' ')}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary dark:text-slate-600 dark:group-hover:text-primary-400" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900 transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary-400">
                    {tool.name}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {tool.shortDescription}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Mobile "View all" */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/calculators"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200"
            >
              View all {tools.length} tools
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HOW IT WORKS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="how-it-works" aria-labelledby="how-heading" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-400">
            Simple process
          </p>
          <h2 id="how-heading" className="mt-1 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            {t.homepage.howItWorksHeading}
          </h2>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-3">
          {/* Connector lines (desktop only) */}
          <div aria-hidden="true" className="absolute top-8 left-1/3 right-1/3 hidden h-px bg-gradient-to-r from-primary-200 to-primary-200 sm:block dark:from-primary-800 dark:to-primary-800" />

          {[
            { icon: <Calculator className="h-6 w-6 text-white" />, num: '01', title: t.homepage.step1Title, desc: t.homepage.step1Desc },
            { icon: <Smartphone className="h-6 w-6 text-white" />, num: '02', title: t.homepage.step2Title, desc: t.homepage.step2Desc },
            { icon: <Shield className="h-6 w-6 text-white" />, num: '03', title: t.homepage.step3Title, desc: t.homepage.step3Desc },
          ].map(({ icon, num, title, desc }) => (
            <div key={num} className="text-center">
              <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-400 shadow-lg">
                {icon}
                <span aria-hidden="true" className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-primary text-[10px] font-bold text-white dark:border-slate-950">
                  {num}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TRUST / FEATURES
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section aria-labelledby="trust-heading" className="border-t border-slate-100 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-400">
              Why contractors choose Buildora
            </p>
            <h2 id="trust-heading" className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              Built for the Job Site
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ITEMS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-950/50">
                  {icon}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          NEWSLETTER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section aria-labelledby="newsletter-heading" className="border-t border-slate-100 dark:border-slate-800">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 dark:bg-primary-950/50">
            <Users className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <h2 id="newsletter-heading" className="text-2xl font-bold text-slate-900 dark:text-white">
            {t.homepage.newsletterHeading}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            {t.homepage.newsletterDesc}
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
