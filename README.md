# Buildora.tools

Free construction calculators for contractors, builders, and tradespeople.
Built with Next.js 16 (App Router), TypeScript strict mode, Tailwind CSS.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in Upstash credentials for rate limiting
npm run dev
```

Open http://localhost:3000.

## Architecture

Everything is driven by `lib/registry/tools.ts`. Adding tool #2+:

1. `lib/formulas/[tool].ts` — the math (pure functions, no side effects)
2. `lib/content/[tool].md` — 600+ word SEO content, fixed H2 structure
3. One object appended to `lib/registry/tools.ts`
4. `public/og/[slug].jpg`
5. Register the new schema in `lib/validation/schemas.ts` and wire it into
   `getFormula()` / `MasterCalculator`'s schema lookup (currently hardcoded
   to `asphaltInputSchema` since asphalt is the only live tool — generalize
   this lookup once tool #2 exists)

No route, sitemap, or homepage changes are required for a new tool.

## What's live vs. stubbed

**Live and functional:**
- Asphalt Calculator, full math + validation + share/print/PDF export
- Security headers, rate limiting, honeypot + timing checks on both API routes
- Sitemap, robots.txt, JSON-LD (Organization, SoftwareApplication, BreadcrumbList)
- Newsletter signup (`/api/subscribe`) — validated and rate-limited, but the
  actual email-provider integration (Resend/Mailchimp/etc.) is a TODO in the
  route handler

**Intentionally stubbed, not launch-blocking bugs:**
- `/api/lead` (the "3 local estimates" feature) validates and rate-limits
  correctly but does **not** persist or forward any data. Per the original
  security plan, this should not go live until a real consent checkbox and
  documented data retention/deletion policy exist — both currently placeholder
  text in `app/privacy/page.tsx`.
- `AffiliateBanner` renders nothing until a real affiliate link is configured
  in `getAffiliateLink()`.
- Contact page uses a placeholder email address — replace before launch.
- Privacy Policy is a structured template, not reviewed legal copy — have a
  lawyer review before launch, especially before enabling the lead-gen form.
- OG images (`public/og/*.jpg`) are referenced but not included — add real
  1200x630 images before launch or social previews will 404.

## Known correction from the original planning doc

The original spec's verification case for the Asphalt Calculator (20ft x
10ft x 4in, 145 lb/ft³, 5% waste) claimed the result should be "≈12.9 tons."
Working the spec's own stated formula gives ≈5.08 tons, which also matches
real-world asphalt tonnage calculators. The code and tests in
`lib/formulas/asphalt.ts` use the corrected value — see the comment there
for the full math.

## Deployment

Deploy the Next.js app through Hostinger's Node.js Web App hosting. Add the
environment variables from `.env.local.example` in hPanel, including the
Upstash credentials and `TRUST_PROXY_HEADERS=true`. The latter lets the API
rate limiter use the visitor IP provided by Hostinger's reverse proxy; do not
enable it if the Node.js server is directly internet-accessible. Submit the
sitemap (`/sitemap.xml`) to Google Search Console and Bing Webmaster Tools
after the first deploy.

## Before going live — checklist

- [ ] Real Upstash Redis credentials in Production env vars
- [ ] `TRUST_PROXY_HEADERS=true` set in Hostinger hPanel (only behind Hostinger's proxy)
- [ ] Real Plausible domain configured
- [ ] OG images added for every live tool
- [ ] Privacy Policy reviewed by a lawyer
- [ ] Contact email replaced with a real monitored inbox
- [ ] `npm audit` clean, Dependabot enabled on the repo
- [ ] Error tracking (Sentry or equivalent) connected
- [ ] Lighthouse: SEO 100, Performance 90+ mobile
