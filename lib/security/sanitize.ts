/**
 * Strips characters that have no legitimate place in the plain-text fields
 * this site accepts (form text fields, error messages that might echo user
 * input). Not a substitute for Zod validation — this is a defense-in-depth
 * layer for anything that ends up rendered back to the page or logged.
 */
export function stripControlAndHtml(input: string): string {
  return input
    .replace(/<[^>]*>/g, '') // strip tags
    .replace(/[\u0000-\u001F\u007F]/g, '') // strip control characters
    .trim();
}

/**
 * Generic error responses for API routes. Never leak stack traces or
 * internal error detail (DB errors, file paths, library versions) to the
 * client in production — log the real error server-side instead.
 */
export function genericErrorResponse(message = 'Something went wrong.') {
  return { error: message };
}

/**
 * Logs server-side errors. In production, forwards to Sentry when
 * SENTRY_DSN is configured (set the env var in Vercel — never hardcode).
 * Falls back to console.error in development or when Sentry is not set up,
 * so no behaviour changes until you add the env var.
 *
 * To enable Sentry:
 *   1. npm install @sentry/nextjs
 *   2. Set SENTRY_DSN in Vercel environment variables (production + preview)
 *   3. The dynamic import below will activate automatically.
 */
export async function logServerError(context: string, error: unknown): Promise<void> {
  console.error(`[${context}]`, error);

  const dsn = process.env.SENTRY_DSN;
  if (!dsn) return; // no-op in dev / before Sentry is configured

  try {
    // Dynamically imported so the Sentry bundle is only loaded in
    // environments where the DSN is actually set.
    // @ts-ignore - optional dependency
    const Sentry = await import('@sentry/nextjs').catch(() => null);
    if (!Sentry) return;

    // @ts-ignore - optional dependency
    Sentry.withScope((scope: any) => {
      scope.setTag('context', context);
      if (error instanceof Error) {
        Sentry.captureException(error);
      } else {
        Sentry.captureMessage(String(error), 'error');
      }
    });
  } catch {

    // Sentry itself failing should never crash a request handler.
  }
}

/**
 * Truncates a string to a max length as a last-resort guard against
 * oversized payloads reaching downstream systems (email/CRM forwarding).
 */
export function clamp(input: string, maxLength: number): string {
  return input.length > maxLength ? input.slice(0, maxLength) : input;
}

const MAX_JSON_BODY_BYTES = 8 * 1024;

type JsonBodyResult =
  | { ok: true; body: unknown }
  | { ok: false; status: 400 | 413; message: string };

/** Reads a small JSON request body without unbounded application buffering. */
export async function readLimitedJsonBody(
  request: Request,
  maxBytes = MAX_JSON_BODY_BYTES,
): Promise<JsonBodyResult> {
  const contentType = request.headers
    .get('content-type')
    ?.split(';', 1)[0]
    ?.trim()
    .toLowerCase();

  if (contentType !== 'application/json') {
    return { ok: false, status: 400, message: 'Invalid request body.' };
  }

  const contentLength = request.headers.get('content-length');
  if (contentLength) {
    const length = Number(contentLength);
    if (!Number.isSafeInteger(length) || length < 0) {
      return { ok: false, status: 400, message: 'Invalid request body.' };
    }
    if (length > maxBytes) {
      return { ok: false, status: 413, message: 'Request body is too large.' };
    }
  }

  const reader = request.body?.getReader();
  if (!reader) {
    return { ok: false, status: 400, message: 'Invalid request body.' };
  }

  const decoder = new TextDecoder();
  let byteLength = 0;
  let text = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      byteLength += value.byteLength;
      if (byteLength > maxBytes) {
        try {
          await reader.cancel();
        } catch {
          // The response is still rejected even if the underlying stream has
          // already been closed by the runtime.
        }
        return { ok: false, status: 413, message: 'Request body is too large.' };
      }

      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();

    return { ok: true, body: JSON.parse(text) };
  } catch {
    return { ok: false, status: 400, message: 'Invalid request body.' };
  }
}
