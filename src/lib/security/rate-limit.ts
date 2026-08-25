// --- 1. RATE LIMITER EN MÉMOIRE (Sliding Window simple) ---
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Nettoyage régulier de la mémoire (toutes les 10 minutes)
if (typeof setInterval !== "undefined") {
  setInterval(
    () => {
      const now = Date.now();
      for (const [ip, record] of rateLimitMap.entries()) {
        if (record.resetTime < now) {
          rateLimitMap.delete(ip);
        }
      }
    },
    10 * 60 * 1000,
  );
}

/**
 * Vérifie si l'IP dépasse le quota autorisé.
 * @param ip Adresse IP du client
 * @param limit Nombre maximal de requêtes autorisées (ex: 3)
 * @param windowMs Fenêtre de temps en ms (ex: 10 * 60 * 1000 = 10 min)
 */
export function checkRateLimit(
  ip: string,
  limit: number = 3,
  windowMs: number = 10 * 60 * 1000,
): { success: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Si pas d'enregistrement ou fenêtre expirée : reset
  if (!record || record.resetTime < now) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0 };
  }

  record.count += 1;
  return { success: true, remaining: limit - record.count };
}

// --- 2. EXTRACTION DE L'IP DU CLIENT ---
export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "127.0.0.1";
}

// --- 3. VÉRIFICATION D'ORIGINE (Anti-CSRF) ---
export function isValidOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");

  // En dev local, on autorise localhost
  if (process.env.NODE_ENV === "development") {
    return true;
  }

  // Si le header 'origin' est présent, on compare son hôte avec le header 'host'
  if (origin) {
    try {
      const originHost = new URL(origin).host;
      return originHost === host;
    } catch {
      return false;
    }
  }

  // Si pas d'origin (ex: Safari sur certains formulaires), on vérifie le referer
  const referer = req.headers.get("referer");
  if (referer) {
    try {
      const refererHost = new URL(referer).host;
      return refererHost === host;
    } catch {
      return false;
    }
  }

  // Requête suspecte sans origin ni referer
  return false;
}
