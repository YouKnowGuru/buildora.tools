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
