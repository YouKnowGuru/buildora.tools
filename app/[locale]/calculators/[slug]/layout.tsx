/**
 * Reserved as the per-tool SEO wrapper referenced in the architecture plan
 * (e.g. a future FAQPage JSON-LD block that only some tools have, or
 * tool-specific breadcrumb variants). Pass-through today since ToolPage
 * already handles metadata, schema, and breadcrumb directly — add logic
 * here if/when it needs to differ per tool rather than duplicating it in
 * every page.tsx.
 */
export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
