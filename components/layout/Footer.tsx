'use client';

import { LocaleLink as Link } from '@/components/layout/LocaleLink';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { BrandIcon } from './BrandIcon';
import { Github, Twitter, Linkedin } from 'lucide-react';

const TOOL_LINKS = [
  { href: '/calculators/asphalt-calculator', label: 'Asphalt Calculator' },
  { href: '/calculators/electrical-load-calculator', label: 'Electrical Load' },
  { href: '/calculators/square-footage-calculator', label: 'Square Footage' },
  { href: '/calculators/deck-footing-calculator', label: 'Deck Footing' },
  { href: '/calculators/insulation-calculator', label: 'Insulation Calculator' },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200/70 bg-slate-950 dark:border-slate-800/60">
      {/* ── Main columns ── */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Buildora — Home">
              <BrandIcon className="h-8 w-8 shadow rounded-lg" size={32} />
              <span className="text-lg font-bold text-white">
                Build<span className="gradient-text">ora</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Free construction calculators for contractors, builders, and tradespeople. Fast, accurate, and built for the job site.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://twitter.com"
                rel="noopener noreferrer"
                aria-label="Buildora on Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-800 hover:text-white"
              >
                <Twitter className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com"
                rel="noopener noreferrer"
                aria-label="Buildora on GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-800 hover:text-white"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                rel="noopener noreferrer"
                aria-label="Buildora on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-800 hover:text-white"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Popular Tools */}
          <nav aria-label="Popular calculator tools">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Popular Tools
            </h3>
            <ul className="space-y-2.5">
              {TOOL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company navigation">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-slate-400 transition-colors hover:text-white">
                  {t.footer.home}
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="text-sm text-slate-400 transition-colors hover:text-white">
                  {t.footer.calculators}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-slate-400 transition-colors hover:text-white">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-400 transition-colors hover:text-white">
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-slate-400 transition-colors hover:text-white">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-400 transition-colors hover:text-white">
                  {('terms' in t.footer && (t.footer as Record<string, string>).terms) ? (t.footer as Record<string, string>).terms : 'Terms of Service'}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Buildora. {t.footer.copyright}</p>
          <p className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            All calculators are 100% free · No login required
          </p>
        </div>
      </div>
    </footer>
  );
}
