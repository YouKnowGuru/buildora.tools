import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

/**
 * 5 requests/minute per IP on lead-gen and email-capture endpoints, per the
 * security plan §6.3. Sliding window keeps a burst at minute-boundary from
 * doubling the effective limit.
 *
 * If Upstash env vars aren't configured (e.g. local dev without a Redis
 * instance), this fails OPEN in development and CLOSED in production —
 * we never want a misconfigured limiter to silently disable protection
 * on a live deployment.
 */
let ratelimit: Ratelimit | null = null;

function getRatelimiter(): Ratelimit | null {
  if (ratelimit) return ratelimit;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  const redis = new Redis({ url, token });
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '1 m'),
    analytics: true,
    prefix: 'buildora:ratelimit',
  });
  return ratelimit;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

export async function checkRateLimit(identifier: string): Promise<RateLimitResult> {
  const limiter = getRatelimiter();

  if (!limiter) {
    const allowInsecureFallback = process.env.NODE_ENV !== 'production';
    if (allowInsecureFallback) {
      console.warn(
        '[rateLimit] Upstash not configured — allowing request in non-production env.'
      );
      return { success: true, limit: 5, remaining: 5, reset: Date.now() + 60_000 };
    }
    // Production with no rate limiter configured: fail closed.
    console.error('[rateLimit] Upstash not configured in production — blocking request.');
    return { success: false, limit: 5, remaining: 0, reset: Date.now() + 60_000 };
  }

  const { success, limit, remaining, reset } = await limiter.limit(identifier);
  return { success, limit, remaining, reset };
}

export function getClientIp(headers: Headers): string {
  const readIp = (value: string | null): string | null => {
    const ip = value?.split(',').at(-1)?.trim();
    return ip && ip.length <= 128 ? ip : null;
  };

  // Vercel overwrites this header with the public client IP. Generic proxy
  // headers remain opt-in in production because a direct client can forge them.
  if (process.env.VERCEL === '1') {
    const vercelIp = readIp(headers.get('x-vercel-forwarded-for'));
    if (vercelIp) return vercelIp;
  }

  const canTrustProxyHeaders =
    process.env.NODE_ENV !== 'production' ||
    process.env.TRUST_PROXY_HEADERS === 'true';

  if (canTrustProxyHeaders) {
    const forwardedIp = readIp(headers.get('x-forwarded-for'));
    if (forwardedIp) return forwardedIp;

    const realIp = readIp(headers.get('x-real-ip'));
    if (realIp) return realIp;
  }

  return 'unknown';
}
