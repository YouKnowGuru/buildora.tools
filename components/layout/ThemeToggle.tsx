'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme/ThemeContext';

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-primary dark:hover:text-primary"
    >
      {/* Sun — visible in dark mode (clicking switches to light) */}
      <Sun
        className={`absolute h-4 w-4 transition-all duration-300 ${
          isDark
            ? 'rotate-0 scale-100 opacity-100'
            : 'rotate-90 scale-0 opacity-0'
        }`}
        aria-hidden="true"
      />
      {/* Moon — visible in light mode (clicking switches to dark) */}
      <Moon
        className={`absolute h-4 w-4 transition-all duration-300 ${
          isDark
            ? '-rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
        }`}
        aria-hidden="true"
      />
    </button>
  );
}
