import { z } from "zod";

//Schéma des variable côté Client (accessible via navigateur)
const clienSchema = z.object({
  // Variables NEXT_PUBLIC_ (accessibles côté client)
  NEXT_PUBLIC_NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  NEXT_PUBLIC_BASE_URL: z
    .string()
    .url()
    .refine((u) => !u.endsWith("/"), "Pas de trailing slash"),
  NEXT_PUBLIC_CALENDLY_URL: z
    .string()
    .url("NEXT_PUBLIC_CALENDLY_URL doit être une URL valide")
    .startsWith("https://calendly.com", "L'URL doit pointer vers calendly.com"),
});

//schema des variable côté server (caché du client)
const serverSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .optional()
    .default("development"),
  BASE_URL: z
    .string()
    .url()
    .refine((u) => !u.endsWith("/"), "Pas de trailing slash"),
  RESEND_API_KEY: z.string().startsWith("re_", "Clé Resend invalide"),
  RESEND_FROM_EMAIL: z.string(),
  RESEND_TO_EMAIL: z
    .string()
    .email("RESEND_TO_EMAIL doit être un email valide"),
});

const isServer = typeof window === "undefined";
// schéma avec toutes les variables
const envSchema = isServer
  ? clienSchema.extend(serverSchema.shape)
  : clienSchema;

// Créer les variables à partir de process.env
const envVars = {
  NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  NEXT_PUBLIC_CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL,
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
