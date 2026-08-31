import { serverEnv } from "@/env/server";

// --- 3. VÉRIFICATION D'ORIGINE (Anti-CSRF) ---
export function isValidOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");

  // En dev local, on autorise localhost
  if (serverEnv.NODE_ENV === "development") {
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
