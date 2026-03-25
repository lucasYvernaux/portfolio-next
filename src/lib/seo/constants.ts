/**
 * Ce fichier importe les locales depuis i18n/locale.ts
 * → source de vérité UNIQUE pour toute l'app.
 */

import { type Locale } from "@/src/i18n/locale";
import { env } from "@/env";

// Re-export pour que le reste de _lib/seo n'ait pas
// besoin d'importer depuis i18n/
// export { LOCALES, DEFAULT_LOCALE, isValidLocale, safeParseLocale };
export type { Locale };

export const SITE_URL = env.BASE_URL;
export const SITE_NAME = "Yvernaux Web Solutions";
export const BRAND_COLOR = "#c4a35a" as const;
export const BRAND_COLOR_LIGHT = "#e8d5a3" as const;

export const PUBLIC_ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
] as const;

export const DISALLOWED_PATHS = [
  "/api/",
  "/admin/",
  "/auth/",
  "/_next/",
  "/private/",
] as const;
