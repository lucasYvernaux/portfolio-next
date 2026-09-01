import { NextRequest, NextResponse } from "next/server";
import { consentPostSchema } from "@/types/consent";
import {
  CONSENT_COOKIE_NAME,
  CONSENT_VERSION,
  CONSENT_MAX_AGE_SECONDS,
} from "@/lib/consent/constant";
import { isValidOrigin } from "@/lib/security/origin-check";
import { getClientIp, getDynamicRateLimiter } from "@/lib/security/rate-limit";

export async function POST(req: NextRequest) {
  if (!isValidOrigin(req)) {
    return NextResponse.json({ error: "Origine invalide" }, { status: 403 });
  }

  const ip = getClientIp(req);
  const consentRateLimiter = await getDynamicRateLimiter(3, "10 m");
  const rateLimitResult = await consentRateLimiter.limit(ip);
  if (!rateLimitResult.success) {
    return NextResponse.json({ error: "Trop de requêtes" }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = consentPostSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Payload invalide" }, { status: 400 });
  }

  const record = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    choices: parsed.data.choices,
    method: parsed.data.method,
  };

  const res = NextResponse.json({ ok: true, record });
  res.cookies.set(CONSENT_COOKIE_NAME, JSON.stringify(record), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: CONSENT_MAX_AGE_SECONDS,
  });

  return res;
}
