import type { MetadataRoute } from "next";
import { DISALLOWED_PATHS, SITE_URL } from "../lib/seo/constants";
import { env } from "@/env";

/**
 * robots.txt dynamique.
 *
 * ⚠️ robots.txt est INDICATIF, pas un mécanisme de sécurité.
 *    Les routes sensibles doivent être protégées par auth/middleware.
 *    On l'utilise ici pour :
 *    - Empêcher le crawl inutile (API, _next, etc.)
 *    - Pointer vers le sitemap
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = env.NEXT_PUBLIC_NODE_ENV === "production";

  return {
    rules: [
      {
        userAgent: "*",
        allow: isProduction ? "/" : undefined,
        disallow: isProduction ? DISALLOWED_PATHS.slice() : ["/"],
        // En dev/staging : bloquer TOUT le site
        // pour empêcher l'indexation accidentelle
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
