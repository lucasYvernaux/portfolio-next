// src/lib/consent/cookie.ts
import "server-only";
import { cookies } from "next/headers";
import { consentRecordSchema, type ConsentRecord } from "@/types/consent";
import { CONSENT_COOKIE_NAME, CONSENT_VERSION } from "@/lib/consent/constant";

/**
 * Lit le consentement côté serveur (Server Component / Route Handler).
 * Retourne null si absent, invalide, ou périmé (version différente).
 */
export async function readConsent(): Promise<ConsentRecord | null> {
  const store = await cookies();
  const raw = store.get(CONSENT_COOKIE_NAME)?.value;
  if (!raw) return null;

  try {
    const parsed = consentRecordSchema.safeParse(JSON.parse(raw));
    if (!parsed.success) return null;
    if (parsed.data.version !== CONSENT_VERSION) return null; // version obsolète -> redemander
    return parsed.data;
  } catch {
    return null;
  }
}
