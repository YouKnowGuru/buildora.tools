'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LocaleLink as Link } from '@/components/layout/LocaleLink';
import { tools } from '@/lib/registry/tools';
import {
  Calculator, Smartphone, Shield, Zap,
  Globe, CheckCircle2, ArrowRight,
} from 'lucide-react';

const VALUES = [
  {
    icon: <Calculator className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Contractor-First Design',
    desc: 'Every calculator is built around how tradespeople actually work — on-site, under pressure, with gloves on.',
  },
  {
    icon: <Smartphone className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Mobile-First',
    desc: 'Pixel-perfect on any screen. Whether it\'s a phone in the field or a laptop in the office, it just works.',
  },
  {
    icon: <Shield className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Always Accurate',
    desc: 'Formulas reviewed by industry professionals and validated against standard engineering references.',
  },
  {
    icon: <Zap className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Lightning Fast',
    desc: 'Instant results, no sign-up, no waiting. The fastest construction calculator on any device.',
  },
  {
    icon: <Globe className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Globally Accessible',
    desc: `Available in 15+ languages with support for both imperial and metric units.`,
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />,
    title: 'Completely Free',
    desc: 'No subscription, no login, no hidden fees — ever. Every tool is free for every contractor.',
  },
];

export function AboutPageClient() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <div className="border-b border-slate-100 bg-gradient-to-b from-primary-50/60 to-white dark:border-slate-800 dark:from-slate-900/80 dark:to-slate-950">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-400">
            Our story
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.aboutPage.heading}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t.aboutPage.p1}
          </p>
        </div>
      </div>

      {/* Mission statement */}
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-primary-100 bg-primary-50/60 p-8 dark:border-primary-900/40 dark:bg-primary-950/20">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
          <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
            {t.aboutPage.p2}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="border-y border-slate-100 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {[
              { value: `${tools.length}+`, label: 'Free Calculators' },
              { value: '100%', label: 'Free, Always' },
              { value: '15+', label: 'Languages' },
              { value: '0', label: 'Login Required' },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
                <p className="text-3xl font-extrabold text-primary">{value}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values grid */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 dark:text-white">
          Why Buildora?
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-950/50">
                {icon}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-slate-100 dark:border-slate-800">
        <div className="mx-auto max-w-2xl px-4 py-14 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Ready to get started?
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Explore all {tools.length}+ free calculators — no account required.
          </p>
          <Link
            href="/calculators"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-primary-700 hover:-translate-y-0.5 btn-glow"
          >
            Browse All Tools
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
