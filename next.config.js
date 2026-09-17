const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  // Prevents top-level window from being opened by cross-origin popups,
  // mitigating XS-Leaks and enabling cross-origin isolation.
  // Lighthouse flags this as a High-severity finding when absent.
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  // Minimal CSP to satisfy the Lighthouse "script-src missing" and
  // "object-src missing" High-severity findings.
  // Plausible analytics is allowlisted; everything else self-hosted.
  // Note: fonts.googleapis.com / fonts.gstatic.com are intentionally
  // omitted — all fonts are self-hosted via next/font/google, so no
  // external font requests are made in production.
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://plausible.io",
      "connect-src 'self' https://plausible.io",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "img-src 'self' data: blob:",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
    ].join('; '),
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  allowedDevOrigins: [
    '192.168.8.5',
    '192.168.1.2',
    'localhost',
    '127.0.0.1',
  ],
  images: {
    formats: ['image/webp'],
  },

  // Strip console.* calls from production bundles — reduces JS size slightly
  // and avoids leaking debug info. Errors are still logged via Plausible.
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  experimental: {
    // Tree-shake lucide-react and zod so only the exports actually used
    // are bundled, instead of the entire library being pulled in.
    optimizePackageImports: ['lucide-react', 'zod'],
  },

  async redirects() {
    return [
      // www → non-www (permanent). Handles both http and https www variants.
      // This stops Google ever treating www.buildora.tools as a separate site.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.buildora.tools' }],
        destination: 'https://buildora.tools/:path*',
        permanent: true,
      },
      // 404 cleanup: Redirect uncrawled/unbuilt tools to calculators directory
      {
        source: '/calculators/concrete-calculator',
        destination: '/calculators',
        permanent: true,
      },
      {
        source: '/:locale/calculators/concrete-calculator',
        destination: '/:locale/calculators',
        permanent: true,
      },
      {
        source: '/calculators/roofing-shingle-calculator',
        destination: '/calculators',
        permanent: true,
      },
      {
        source: '/:locale/calculators/roofing-shingle-calculator',
        destination: '/:locale/calculators',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        // Apply to every route
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
