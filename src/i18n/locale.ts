import { z } from "zod/v4";

export const LOCALES = ["fr", "en"] as const;
export const DEFAULT_LOCALE = "fr" as const;

export type Locale = (typeof LOCALES)[number];

/** Schema Zod pour validation */
export const localeSchema = z.enum(LOCALES);

/** Type guard */
export function isValidLocale(value: unknown): value is Locale {
  return localeSchema.safeParse(value).success;
}

/**
 * Retourne une locale valide, ou la locale par défaut.
 * Evite l'exception, jamais de locale invalide.
 */
export function safeParseLocale(value: unknown): Locale {
  const result = localeSchema.safeParse(value);
  return result.success ? result.data : DEFAULT_LOCALE;
}
