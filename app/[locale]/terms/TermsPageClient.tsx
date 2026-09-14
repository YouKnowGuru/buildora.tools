'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export function TermsPageClient() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        {t.privacyPage.lastUpdated} September 2026
      </p>

      <div className="prose prose-slate mt-8 max-w-none dark:prose-invert">
        <p className="lead text-base text-slate-700 dark:text-slate-300">
          Welcome to Buildora (<code className="text-primary font-mono text-sm">buildora.tools</code>). By accessing, browsing, or using our website, calculation tools, formulas, visualizers, or content, you agree to comply with and be bound by the following Terms of Service. If you do not agree with any part of these terms, please do not use our services.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">
          1. Calculation Accuracy and Construction Disclaimer (IMPORTANT)
        </h2>
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-200">
          <strong>Notice to Builders, Contractors, and Property Owners:</strong>
          <p className="mt-1">
            All calculations, formulas, material estimates, code references (including NEC, IRC, IBC, and ASCE specifications), and visualizers provided on Buildora are offered for <strong>preliminary planning, educational, and general estimating purposes only</strong>.
          </p>
        </div>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>
            <strong>Job Site Discrepancies:</strong> Actual construction material requirements vary significantly based on site conditions, subgrade stability, compaction, manufacturer material tolerances, contractor wastage, weather, and specific regional installation practices.
          </li>
          <li>
            <strong>Professional Consultation Required:</strong> Buildora calculations do not substitute for formal engineering reviews, architectural plans, stamped structural calculations, or master electrician site inspections. Always consult with a licensed professional engineer (PE), licensed architect, certified electrician, or local municipal building official before purchasing materials, pulling permits, or executing structural work.
          </li>
          <li>
            <strong>Building Codes:</strong> Codes and local amendments differ by jurisdiction. While our formulas model widely adopted standards (such as NFPA 70 / NEC, IRC Section R311, ASCE 7), you are solely responsible for ensuring compliance with your specific local building authority having jurisdiction (AHJ).
          </li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">
          2. Use of Free Tools & License
        </h2>
        <p>
          Buildora grants you a revocable, non-exclusive, non-transferable, limited license to access and use our calculators free of charge for your personal or commercial trade estimating workflows. You agree not to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Systematically scrape, crawl, or harvest calculator algorithms or content via automated bots or spiders without express written authorization.</li>
          <li>Frame, mirror, or repackage Buildora calculators inside another commercial SaaS tool without attribution or license.</li>
          <li>Attempt to interfere with or disrupt the normal operation or security of our hosting infrastructure.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">
          3. Third-Party Advertising & Affiliates
        </h2>
        <p>
          To maintain our calculators as free, high-performance tools for everyone, Buildora displays advertisements served by third-party advertising partners, including <strong>Google AdSense</strong>. We may also display clearly labeled affiliate links for building supplies or tools.
        </p>
        <p>
          We do not endorse, guarantee, or assume responsibility for any third-party products, services, claims, or external websites linked to or advertised on Buildora. Any interactions, purchases, or agreements between you and third-party advertisers are solely between you and the respective third party.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">
          4. Intellectual Property
        </h2>
        <p>
          All proprietary calculation logic, user interface designs, custom interactive visualizers, branding, logos, graphics, and written technical guides are the intellectual property of Buildora and protected under applicable copyright and intellectual property laws.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">
          5. Disclaimer of Warranties
        </h2>
        <p>
          Buildora is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis, without warranties of any kind, whether express, implied, statutory, or otherwise, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no warranty that our calculators will be error-free, uninterrupted, or that numerical outputs will be 100% accurate for every building scenario.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">
          6. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by applicable law, in no event shall Buildora, its founders, contributors, or partners be liable for any direct, indirect, punitive, incidental, special, or consequential damages, including but not limited to loss of materials, construction rework, project delays, structural failures, code violation fines, personal injury, or financial losses arising out of or in any way connected with the use or reliance upon our calculators or guides.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">
          7. Modifications to Terms
        </h2>
        <p>
          We reserve the right to revise or update these Terms of Service at any time. Continued use of Buildora following the posting of any modifications constitutes acceptance of the revised terms.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">
          8. Contact Information
        </h2>
        <p>
          If you have any questions or inquiries regarding these Terms of Service, please reach out to us at{' '}
          <a href="mailto:hello@buildora.tools" className="text-primary hover:underline font-medium">
            hello@buildora.tools
          </a>.
        </p>
      </div>
    </div>
  );
}
