import "server-only";
import { z } from "zod";

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
  TURNSTILE_SECRET_KEY: z.string().min(20, "Clé Cloudflare Turnstile invalide"),
  UPSTASH_REDIS_REST_URL: z
    .string()
    .url()
    .endsWith(".upstash.io", "l'url doit etre un sous-domaine de upstash.io"),
  UPSTASH_REDIS_REST_TOKEN: z.string().min(20, "Token Upstash Redis invalide"),
});

let serverData: z.infer<typeof serverSchema> | null = null;

// Validation

const serverParsed = serverSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL: process.env.BASE_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
});

if (!serverParsed.success) {
  console.error("❌ Variables server invalides :");
  serverParsed.error.issues.forEach((issue) => {
    console.error(`   → ${issue.path.join(".")}: ${issue.message}`);
  });
  throw new Error("Variables d'environnement serveur invalides");
}
serverData = serverParsed.data;

export const serverEnv = serverData as z.infer<typeof serverSchema>;

export type ServerEnv = z.infer<typeof serverSchema>;
