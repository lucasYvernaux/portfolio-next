import { z } from "zod";

// schéma avec toutes les variables
const envSchema = z.object({
  // Variables NEXT_PUBLIC_ (accessibles côté client)
  NEXT_PUBLIC_NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  NEXT_PUBLIC_BASE_URL: z
    .string()
    .url()
    .refine((u) => !u.endsWith("/"), "Pas de trailing slash"),

  // autre Variables (serveur uniquement)
  // Optionnelles côté client
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .optional()
    .default("development"),
  BASE_URL: z
    .string()
    .url()
    .refine((u) => !u.endsWith("/"), "Pas de trailing slash")
    .optional(),
  RESEND_API_KEY: z
    .string()
    .startsWith("re_", "Clé Resend invalide")
    .optional(),
  RESEND_FROM_EMAIL: z.string().optional(),
  RESEND_TO_EMAIL: z
    .string()
    .email("RESEND_TO_EMAIL doit être un email valide")
    .optional(),

  // Example
  //   RESEND_API_KEY: z.string().min(1),
  //   CAL_API_KEY: z.string().min(1),
  //   UPSTASH_REDIS_URL: z.string().url(),
});

// Créer les variables à partir de process.env
const envVars = {
  NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL: process.env.BASE_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
};

// Validation
const parsed = envSchema.safeParse(envVars);

if (!parsed.success) {
  console.error("❌ Variables d'environnement invalides:\n");
  parsed.error.issues.forEach((issue) => {
    console.error(`   → ${issue.path.join(".")}: ${issue.message}`);
  });
  throw new Error("Variables d'environnement invalides");
}

export const env = parsed.data;

export type Env = typeof env;

// ✅ Raccourcis pratiques
// export const isDev = env.NEXT_PUBLIC_NODE_ENV === "development";
// export const isProd = env.NEXT_PUBLIC_NODE_ENV === "production";
// export const isTest = env.NEXT_PUBLIC_NODE_ENV === "test";
// export const baseUrl = env.NEXT_PUBLIC_BASE_URL;
