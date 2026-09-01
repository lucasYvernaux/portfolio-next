import "server-only";
import { serverEnv } from "@/env/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ── 1. Client Redis unique (singleton) ────────────────────────────────────
const redis = new Redis({
  url: serverEnv.UPSTASH_REDIS_REST_URL,
  token: serverEnv.UPSTASH_REDIS_REST_TOKEN,
});

// ── 2. Rate-limiter principal pour le formulaire de contact ───────────────
// 3 requêtes par 10 minutes — configuration fixe et optimale
const contactRateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "10 m"),
  analytics: true,
  prefix: "ratelimit:contact",
});

/**
 * Vérifie le rate-limit pour une IP (formulaire de contact).
 * Utilise l’instance singleton → zéro allocation à chaque requête.
 */
export async function checkContactRateLimit(
  ip: string,
): Promise<{ success: boolean; remaining: number }> {
  const { success, remaining } = await contactRateLimiter.limit(ip);
  return { success, remaining };
}

// ── 3. Factory pour d’autres limites dynamiques ─────────────────────
// À utiliser uniquement si tu as vraiment besoin de limites différentes
// ailleurs dans l’application.
const limiterCache = new Map<string, Ratelimit>();

export function getDynamicRateLimiter(
  limit: number,
  window: `${number} m` | `${number} s` | `${number} h`,
  prefix = "ratelimit:dynamic",
): Ratelimit {
  const key = `${prefix}:${limit}:${window}`;

  let limiter = limiterCache.get(key);
  if (!limiter) {
    limiter = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(limit, window),
      prefix,
    });
    limiterCache.set(key, limiter);
  }

  return limiter;
}

// ── 4. Extraction de l’IP ──────────────────────────────────────────────
export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "127.0.0.1";
  }

  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "127.0.0.1";
}
