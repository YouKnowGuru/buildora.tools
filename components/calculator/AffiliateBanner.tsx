interface AffiliateBannerProps {
  category: string;
}

/**
 * Placeholder, wired for later per §10. Intentionally renders nothing until
 * a real affiliate link is configured — an empty/broken banner would hurt
 * both UX and trust signals more than not showing one at all.
 *
 * When a real link is added, keep the "Affiliate link" disclosure — it's
 * an FTC requirement, not optional styling.
 */
export function AffiliateBanner({ category }: AffiliateBannerProps) {
  const link = getAffiliateLink(category);
  if (!link) return null;

  return (
    <div className="no-print rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
      <a href={link.url} rel="sponsored noopener noreferrer" target="_blank" className="font-medium text-primary hover:underline">
        {link.label}
      </a>
      <span className="ml-2 text-xs text-slate-400 dark:text-slate-500">(Affiliate link)</span>
    </div>
  );

}

function getAffiliateLink(_category: string): { url: string; label: string } | null {
  // No live affiliate links yet — return null until one is actually configured.
  return null;
}
