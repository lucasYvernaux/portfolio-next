import { NextRequest } from "next/server";
import {
  contactSchema,
  type ContactApiResponse,
} from "@/src/lib/validations/contact.schema";
import { emailService, EmailServiceError } from "@/src/services/email.services";

export async function GET() {
  return new Response("ServerError", { status: 401 });
}

// Empêche la mise en cache de cette route
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest): Promise<Response> {
  // ── 1. Parse le body ─────────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      {
        success: false,
        error: "Corps de la requête invalide",
      } satisfies ContactApiResponse,
      { status: 400 },
    );
  }

  // ── 2. Validation Zod ─────────────────────────────────────────────────────
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    // Formate les erreurs par champ pour les afficher dans le formulaire
    const fields: Partial<Record<string, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as string;
      if (key) fields[key] = issue.message;
    }

    return Response.json(
      {
        success: false,
        error: "Données invalides",
        fields,
      } satisfies ContactApiResponse,
      { status: 422 },
    );
  }

  // ── 3. Envoi de l'email ───────────────────────────────────────────────────
  try {
    await emailService.sendContactEmail(parsed.data);

    return Response.json(
      {
        success: true,
        message: "Message envoyé avec succès",
      } satisfies ContactApiResponse,
      { status: 200 },
    );
  } catch (err) {
    // Ne jamais exposer les détails internes en production
    console.error("[contact/route] Erreur envoi email:", err);

    if (err instanceof EmailServiceError) {
      return Response.json(
        {
          success: false,
          error: "Impossible d'envoyer le message, réessayez.",
        } satisfies ContactApiResponse,
        { status: 503 },
      );
    }

    return Response.json(
      { success: false, error: "Erreur interne" } satisfies ContactApiResponse,
      { status: 500 },
    );
  }
}
