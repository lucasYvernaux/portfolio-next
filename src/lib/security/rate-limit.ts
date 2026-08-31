import { serverEnv } from "@/env/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Création du client Redis Upstash
const redis = new Redis({
  url: serverEnv.UPSTASH_REDIS_REST_URL,
  token: serverEnv.UPSTASH_REDIS_REST_TOKEN,
});

// Configuration du rate limiter avec une fenêtre glissante (sliding window)
// Les paramètres par défaut sont : 3 requêtes par 10 minutes.
// On laisse la possibilité de surcharger via les paramètres de la fonction.
const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "10 m"), // valeur par défaut
  analytics: true, // optionnel : active les statistiques dans le dashboard Upstash
  prefix: "ratelimit:contact", // permet d'isoler ce rate limiter d'autres usages
});

/**
 * Vérifie si l'IP dépasse le quota autorisé.
 * @param ip Adresse IP du client
 * @param limit Nombre maximal de requêtes autorisées (par défaut 3)
 * @param windowMs Fenêtre de temps en ms (par défaut 10 minutes)
 * @returns { success: boolean; remaining: number }
 */
export async function checkRateLimit(
  ip: string,
  limit: number = 3,
  windowMs: number = 10 * 60 * 1000,
): Promise<{ success: boolean; remaining: number }> {
  // Convertir windowMs en une chaîne compréhensible par Upstash (ex: "10m")
  // On va réinitialiser le limiter à chaque appel avec les nouveaux paramètres si besoin.
  // Cependant, pour une flexibilité totale, on peut recréer un limiter dynamique.
  // Mais il est plus propre de définir des limites fixes dans la config.
  // Pour conserver la flexibilité, on va utiliser un limiter dynamique.
  const dynamicLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(
      limit,
      `${Math.floor(windowMs / 60000)} m`,
    ),
    prefix: `ratelimit:${ip}`, // un préfixe par IP pour éviter les collisions
  });

  const { success, remaining } = await dynamicLimiter.limit(ip);
  return { success, remaining };
}

// Version synchrone pour compatibilité avec les routes API existantes (si elles ne sont pas async)
// Mais il vaut mieux tout passer en async.
// On peut garder la même signature en rendant la fonction async et adapter l'appel.

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
