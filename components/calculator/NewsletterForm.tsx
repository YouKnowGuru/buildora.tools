'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const renderedAt = useRef(Date.now());
  const { t } = useLanguage();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          companyWebsite: '', // honeypot — left empty by real users
          formRenderedAt: renderedAt.current,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went wrong.');
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <p className="mt-6 text-sm font-medium text-primary" role="status">
        {t.homepage.newsletterSuccess}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.homepage.newsletterPlaceholder}
        className="min-h-[44px] flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus-visible:border-primary dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      />
      {/* Honeypot field — hidden from real users via CSS, bots will fill it */}
      <input
        type="text"
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="min-h-[44px] rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-700 disabled:opacity-60"
      >
        {status === 'submitting' ? t.homepage.newsletterSubmitting : t.homepage.newsletterButton}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600 dark:text-red-400 sm:basis-full" role="alert">
          {errorMessage}
        </p>
      )}

    </form>
  );
}

