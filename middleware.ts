import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { LOCALE_CODES, DEFAULT_LOCALE } from '@/lib/seo/locale-urls';

/**
 * Static security headers (HSTS, X-Frame-Options, etc.) are set in
 * next.config.js `headers()`. CSP is created here because every HTML request
 * needs its own nonce for Next's inline bootstrap scripts.
 *
 * This middleware handles the parts that need per-request logic:
 *   - Blocking obviously-malicious path probes before they hit a route.
 *   - Mapping unprefixed English URLs onto the `app/[locale]` tree.
 *   - Leaving legitimate crawlers (Googlebot, Bingbot) untouched — SEO is
 *     the whole point of this site, so we do not fingerprint/block bots
 *     here. Volumetric abuse protection belongs at the platform layer
 *     (Vercel Attack Challenge Mode / Cloudflare), not hand-rolled here.
 */

// Common scanner probes for PHP/WordPress/.env files that have no reason
// to exist on this Next.js site.
const suspiciousPatterns = [/\.php$/i, /wp-admin/i, /wp-login/i, /\.env$/i, /\.git\//i];

function createContentSecurityPolicy(nonce: string): string {
  const scriptSrc = process.env.NODE_ENV === 'production'
    ? `script-src 'self' 'nonce-${nonce}' 'unsafe-inline' https://plausible.io`
    : `script-src 'self' 'nonce-${nonce}' 'unsafe-inline' 'unsafe-eval' https://plausible.io`;

  return [
    "default-src 'self'",
    scriptSrc,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https://plausible.io",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "object-src 'none'",
    "form-action 'self'",
  ].join('; ');
}

function withSecurityHeaders(response: NextResponse, nonce: string): NextResponse {
  response.headers.set('Content-Security-Policy', createContentSecurityPolicy(nonce));
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const nonce = crypto.randomUUID().replace(/-/g, '');
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  if (suspiciousPatterns.some((pattern) => pattern.test(pathname))) {
    return withSecurityHeaders(new NextResponse(null, { status: 404 }), nonce);
  }

  const firstSegment = pathname.split('/')[1] ?? '';

  // Explicit `/en/...` requests are redundant with the unprefixed English
  // root and would be a duplicate-content pair. Redirect them permanently
  // to the canonical unprefixed URL.
  if (firstSegment === DEFAULT_LOCALE) {
    const stripped = pathname.slice(`/${DEFAULT_LOCALE}`.length) || '/';
    const url = request.nextUrl.clone();
    url.pathname = stripped;
    return withSecurityHeaders(NextResponse.redirect(url, 308), nonce);
  }

  // A real locale prefix (`/es/...`) maps straight onto app/[locale].
  if ((LOCALE_CODES as string[]).includes(firstSegment)) {
    return withSecurityHeaders(NextResponse.next({ request: { headers: requestHeaders } }), nonce);
  }

  // Everything else is English served at an unprefixed path. Rewrite (not
  // redirect) so the visible URL stays clean while rendering the
  // app/[locale] tree with locale = 'en'.
  //
  // Deliberately NOT doing Accept-Language redirects: Google's
  // multi-regional guidance warns that automatic language redirects can
  // stop crawlers from reaching other locales. Locale choice is explicit,
  // via the language switcher.
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`;
  return withSecurityHeaders(
    NextResponse.rewrite(url, { request: { headers: requestHeaders } }),
    nonce
  );
}

export const config = {
  // Skip Next internals, API routes, and the metadata files that must stay
  // at the domain root (robots.txt / sitemap.xml) — those have no locale.
  matcher: [
    '/((?!_next/static|_next/image|api/|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|icons/|og/).*)',
  ],
};
