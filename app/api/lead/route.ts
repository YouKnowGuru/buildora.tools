import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { leadFormSchema, failsTimingCheck } from '@/lib/validation/schemas';
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
    // Reject cross-origin form submissions outright.
    const origin = request.headers.get('origin');
    if (origin !== ALLOWED_ORIGIN) {
      return NextResponse.json(genericErrorResponse(), {
        status: 403,
        headers: corsHeaders(),
      });
    }

    const ip = getClientIp(request.headers);
    const { success, remaining, reset } = await checkRateLimit(`lead:${ip}`);
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

    const parsed = leadFormSchema.safeParse(bodyResult.body);
    if (!parsed.success) {
      return NextResponse.json(genericErrorResponse('Please check the form and try again.'), {
        status: 400,
        headers: corsHeaders(),
      });
    }

    const { email, zip, projectType, companyWebsite, formRenderedAt } = parsed.data;

    // Honeypot: a populated hidden field means a bot filled every input.
    if (companyWebsite) {
      // Return a fake success so bots don't learn the honeypot exists.
      return NextResponse.json({ ok: true }, { status: 200, headers: corsHeaders() });
    }

    // Timing check: real humans take more than ~1.5s to fill this form.
    if (failsTimingCheck(formRenderedAt)) {
      return NextResponse.json({ ok: true }, { status: 200, headers: corsHeaders() });
    }

    // NOTE: this endpoint is wired but intentionally not live yet. The
    // "3 local estimates" lead-gen feature handles PII (email, zip, project
    // type) and per §6.7 must not go live until a real consent checkbox
    // and a documented retention/deletion policy exist. Until then, this
    // validates and rate-limits correctly but does not persist or forward
    // any data anywhere.
    //
    // When ready to go live, replace this block with, e.g.:
    //   await forwardToCrm({ email, zip, projectType });
    void email;
    void zip;
    void projectType;

    return NextResponse.json({ ok: true, remaining }, { status: 200, headers: corsHeaders() });
  } catch (error) {
    await logServerError('api/lead', error);
    return NextResponse.json(genericErrorResponse(), { status: 500, headers: corsHeaders() });
  }
}
