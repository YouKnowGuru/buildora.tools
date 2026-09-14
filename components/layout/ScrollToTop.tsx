'use client';

import { useState, useEffect } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Calculate scroll progress percentage (0 to 100)
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }

      // Show button after scrolling past 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
      className={`no-print fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white hover:shadow-primary/20 hover:shadow-xl active:translate-y-0 active:scale-95 dark:border-slate-700/80 dark:bg-slate-900/90 dark:hover:border-primary/50 dark:hover:bg-slate-900 dark:hover:shadow-primary/20 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100 scale-100'
          : 'pointer-events-none translate-y-4 opacity-0 scale-90'
      }`}
    >
      {/* Circular Progress Ring */}
      <svg className="absolute inset-0 h-full w-full -rotate-90 p-0.5" viewBox="0 0 36 36">
        <path
          className="text-slate-100 dark:text-slate-800"
          strokeWidth="2.5"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-primary transition-all duration-150"
          strokeDasharray={`${scrollProgress}, 100`}
          strokeWidth="2.5"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      {/* Up Arrow Icon */}
      <svg
        className="relative z-10 h-5 w-5 text-slate-700 transition-transform duration-200 group-hover:-translate-y-0.5 dark:text-slate-200"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.2"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
}
