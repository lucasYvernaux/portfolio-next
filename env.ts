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
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z
    .string()
    .min(20, "Clé Cloudflare Turnstile invalide"),
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
  TURNSTILE_SECRET_KEY: z.string().min(20, "Clé Cloudflare Turnstile invalide"),
});

const isServer = typeof window === "undefined";
let serverData: z.infer<typeof serverSchema> | null = null;

// Validation

const clientParse = clienSchema.safeParse({
  NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  NEXT_PUBLIC_CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
});

if (isServer) {
  const serverParsed = serverSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.BASE_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
  });

  if (!serverParsed.success) {
    console.error("❌ Variables server invalides :");
    serverParsed.error.issues.forEach((issue) => {
      console.error(`   → ${issue.path.join(".")}: ${issue.message}`);
    });
    throw new Error("Variables d'environnement serveur invalides");
  }
  serverData = serverParsed.data;
}

if (!clientParse.success) {
  console.error("❌ Variables client invalides :");
  clientParse.error.issues.forEach((issue) => {
    console.error(`   → ${issue.path.join(".")}: ${issue.message}`);
  });
  throw new Error("Variables d'environnement client invalides");
}

export const clientEnv = clientParse.data;

export const serverEnv = serverData as z.infer<typeof serverSchema>;

export const env = {
  ...clientParse.data,
  ...(serverData ?? {}),
} as z.infer<typeof clienSchema> & z.infer<typeof serverSchema>;

export type ClientEnv = z.infer<typeof clienSchema>;
export type ServerEnv = z.infer<typeof serverSchema>;
export type Env = ClientEnv & ServerEnv;
