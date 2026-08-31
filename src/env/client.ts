import { z } from "zod";

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
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z
    .string()
    .min(20, "Clé Cloudflare Turnstile invalide"),
});

// Validation

const clientParse = clienSchema.safeParse({
  NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  NEXT_PUBLIC_CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
});

if (!clientParse.success) {
  console.error("❌ Variables client invalides :");
  clientParse.error.issues.forEach((issue) => {
    console.error(`   → ${issue.path.join(".")}: ${issue.message}`);
  });
  throw new Error("Variables d'environnement client invalides");
}

export const clientEnv = clientParse.data;

export type ClientEnv = z.infer<typeof clienSchema>;
