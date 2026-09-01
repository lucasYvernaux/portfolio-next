import { z } from "zod";

export const cookieCategories = ["necessary", "calendly", "analytics"] as const;
export type CookieCategory = (typeof cookieCategories)[number];

// Les catégories qui EXIGENT un consentement explicite (necessary est toujours true, non demandé)
export const consentRequiredCategories = cookieCategories.filter(
  (c) => c !== "necessary",
) as Exclude<CookieCategory, "necessary">[];

export const consentChoicesSchema = z.object({
  necessary: z.literal(true), // toujours vrai, jamais désactivable
  calendly: z.boolean(),
  analytics: z.boolean(),
});

export const consentRecordSchema = z.object({
  version: z.string(), // ex "2026-09-01" — bump = force re-consent
  timestamp: z.iso.datetime(),
  choices: consentChoicesSchema,
  method: z.enum(["accept_all", "reject_all", "custom"]),
});

export type ConsentChoices = z.infer<typeof consentChoicesSchema>;
export type ConsentRecord = z.infer<typeof consentRecordSchema>;

// Payload envoyé par le client vers /api/consent (sans timestamp, généré serveur)
export const consentPostSchema = z.object({
  choices: consentChoicesSchema,
  method: z.enum(["accept_all", "reject_all", "custom"]),
});
export type ConsentPostBody = z.infer<typeof consentPostSchema>;
