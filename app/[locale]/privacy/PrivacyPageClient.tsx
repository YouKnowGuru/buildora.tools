'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export function PrivacyPageClient() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {t.privacyPage.heading}
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        {t.privacyPage.lastUpdated} September 2026
      </p>

      <div className="prose prose-slate mt-8 max-w-none dark:prose-invert">
        <p className="lead text-base text-slate-700 dark:text-slate-300">
          Buildora (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website (<code className="text-primary font-mono text-sm">buildora.tools</code>) and our suite of trade and construction calculation tools.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">1. Information We Collect</h2>
        <p>We prioritize user privacy and minimize data collection:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Calculator Inputs and Results:</strong> All mathematical computations, measurements, and numerical inputs you enter into Buildora calculators are processed <em>locally in your browser</em>. Your calculation data is not sent to, stored on, or transmitted through our servers.
          </li>
          <li>
            <strong>Newsletter Subscription:</strong> If you voluntarily subscribe to our newsletter, we collect your email address solely to notify you when new calculators or features are published.
          </li>
          <li>
            <strong>Server and Technical Logs:</strong> Like most web applications, our hosting infrastructure may automatically log standard request metadata (such as browser type, referring URL, and timestamp) for security and operational diagnostics.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">2. Google AdSense and Advertising Cookies</h2>
        <p>
          We use Google AdSense and other third-party advertising partners to display advertisements on our website. To comply with Google AdSense policies, please note the following:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Third-Party Vendor Cookies:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to our website or other websites on the Internet.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
          </li>
          <li>
            <strong>Opting Out of Personalized Advertising:</strong> Users may opt out of personalized advertising by visiting{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Google Ads Settings
            </a>. Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{' '}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              www.aboutads.info
            </a>{' '}
            or{' '}
            <a
              href="https://www.youronlinechoices.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Your Online Choices
            </a>.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">3. Analytics and Performance</h2>
        <p>
          We use Plausible Analytics, a lightweight and privacy-respecting analytics solution. Plausible does not use cookies, does not collect personal data, and complies fully with GDPR, CCPA, and PECR standards without cross-site tracking.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">4. Third-Party Service Providers</h2>
        <p>We work with trusted third-party providers for hosting and infrastructure:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Cloud Infrastructure:</strong> Managed cloud hosting and content delivery.</li>
          <li><strong>Google AdSense:</strong> Advertising partner delivering non-intrusive ad inventory.</li>
          <li><strong>Plausible Analytics:</strong> Privacy-focused aggregate metrics.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">5. Data Retention and Security</h2>
        <p>
          Newsletter email addresses are retained only until you choose to unsubscribe. We adopt industry-standard security measures and encryption (HTTPS/TLS) to safeguard all data against unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">6. Your Rights and Choices</h2>
        <p>
          Depending on your location (including the European Economic Area, United Kingdom, or California), you have rights regarding your personal information, including the right to access, rectify, or request deletion of your data. You may unsubscribe from our newsletter at any time via the unsubscribe link in every email.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">7. Children&apos;s Privacy</h2>
        <p>
          Buildora is intended for contractors, engineers, and adult users. We do not knowingly collect personal information from children under the age of 13.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">8. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8">9. Contact Us</h2>
        <p>
          If you have questions or concerns regarding this Privacy Policy, please contact us at{' '}
          <a href="mailto:hello@buildora.tools" className="text-primary hover:underline font-medium">
            hello@buildora.tools
          </a>.
        </p>
      </div>
    </div>
  );
}
