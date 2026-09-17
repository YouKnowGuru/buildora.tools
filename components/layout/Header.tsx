'use client';

import { LocaleLink as Link } from '@/components/layout/LocaleLink';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { BrandIcon } from './BrandIcon';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X, Menu } from 'lucide-react';

const NAV_LINKS = [
  { href: '/calculators', labelKey: 'calculators' as const },
  { href: '/#how-it-works', labelKey: 'howItWorks' as const },
];

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close drawer on route change ── */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  /* ── Escape key ── */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [menuOpen]);

  /* ── Lock body scroll when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) => {
    const path = href.split('#')[0] ?? href;
    if (path === '/') return pathname === '/';
    if (!pathname) return false;
    return pathname.includes(path.replace(/^\//, ''));
  };

  return (
    <>
      {/* ━━━━━━━━━━━━ HEADER BAR ━━━━━━━━━━━━ */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 shadow-header backdrop-blur-lg dark:bg-slate-950/90'
            : 'bg-white/80 backdrop-blur-md dark:bg-slate-950/80'
        } border-b border-slate-200/60 dark:border-slate-800/60`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:rounded-lg"
            aria-label="Buildora — Home"
          >
            <BrandIcon className="h-8 w-8 shadow-sm rounded-lg" size={32} />
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Build<span className="gradient-text">ora</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map(({ href, labelKey }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                      isActive(href)
                        ? 'text-primary dark:text-primary-400'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                    }`}
                  >
                    {t.nav[labelKey]}
                    {isActive(href) && (
                      <span className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-primary dark:bg-primary-400" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop right controls */}
          <div className="hidden items-center gap-2 md:flex">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href="/calculators"
              className="ml-1 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 btn-glow"
            >
              Browse Tools
            </Link>
          </div>

          {/* Mobile: language + theme + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              ref={menuBtnRef}
              type="button"
              id="mobile-menu-btn"
              aria-controls="mobile-drawer"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-primary dark:hover:text-primary"
            >
              {menuOpen
                ? <X className="h-5 w-5 transition-transform duration-200 rotate-0" aria-hidden="true" />
                : <Menu className="h-5 w-5 transition-transform duration-200" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* ━━━━━━━━━━━━ MOBILE DRAWER ━━━━━━━━━━━━ */}
      {/* Overlay */}
      <div
        role="presentation"
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed right-0 top-0 z-50 flex h-full w-72 max-w-[85vw] flex-col bg-white pb-safe shadow-2xl transition-transform duration-300 ease-in-out dark:bg-slate-900 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5"
            aria-label="Buildora — Home"
          >
            <BrandIcon className="h-7 w-7 shadow-sm rounded-lg" size={28} />
            <span className="font-bold text-slate-900 dark:text-white">
              Build<span className="gradient-text">ora</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => { setMenuOpen(false); menuBtnRef.current?.focus(); }}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {NAV_LINKS.map(({ href, labelKey }, i) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center rounded-xl px-4 py-3 text-base font-medium transition-colors duration-150 ${
                    isActive(href)
                      ? 'bg-primary-50 text-primary dark:bg-primary-950/40 dark:text-primary-400'
                      : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {t.nav[labelKey]}
                  {isActive(href) && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-primary dark:bg-primary-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/calculators"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
            >
              Browse All Tools
            </Link>
          </div>
        </nav>

        {/* Drawer footer */}
        <div className="border-t border-slate-100 px-5 py-4 dark:border-slate-800">
          <p suppressHydrationWarning className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Buildora · Free construction calculators
          </p>
        </div>
      </div>
    </>
  );
}
