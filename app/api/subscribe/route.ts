import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { subscribeFormSchema, failsTimingCheck } from '@/lib/validation/schemas';
import { checkRateLimit, getClientIp } from '@/lib/security/rateLimit';
import { genericErrorResponse, logServerError, readLimitedJsonBody } from '@/lib/security/sanitize';

const ALLOWED_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://buildora.tools';

function corsHeaders(): HeadersInit {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get('origin');
    if (origin !== ALLOWED_ORIGIN) {
      return NextResponse.json(genericErrorResponse(), {
        status: 403,
        headers: corsHeaders(),
      });
    }

    const ip = getClientIp(request.headers);
    const { success, reset } = await checkRateLimit(`subscribe:${ip}`);
    if (!success) {
      return NextResponse.json(genericErrorResponse('Too many requests. Try again shortly.'), {
        status: 429,
        headers: {
          ...corsHeaders(),
          'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
        },
      });
    }

    const bodyResult = await readLimitedJsonBody(request);
    if (!bodyResult.ok) {
      return NextResponse.json(genericErrorResponse(bodyResult.message), {
        status: bodyResult.status,
        headers: corsHeaders(),
      });
    }

    const parsed = subscribeFormSchema.safeParse(bodyResult.body);
    if (!parsed.success) {
      return NextResponse.json(genericErrorResponse('Please enter a valid email address.'), {
        status: 400,
        headers: corsHeaders(),
      });
    }

    const { email, companyWebsite, formRenderedAt } = parsed.data;

    if (companyWebsite || failsTimingCheck(formRenderedAt)) {
      return NextResponse.json({ ok: true }, { status: 200, headers: corsHeaders() });
    }

    // TODO: wire to actual email provider (e.g. Resend, Mailchimp API).
    // Never store raw submissions without validation — email is already
    // validated by Zod above before it reaches this point.
    void email;

    return NextResponse.json({ ok: true }, { status: 200, headers: corsHeaders() });
  } catch (error) {
    await logServerError('api/subscribe', error);
    return NextResponse.json(genericErrorResponse(), { status: 500, headers: corsHeaders() });
  }
}
