import { NextRequest, NextResponse } from "next/server";
import {
  getContactSchema,
  type ContactApiResponse,
} from "@/lib/validations/contact.schema";
import { emailService, EmailServiceError } from "@/services/email.services";
import { getTranslations } from "next-intl/server";
import { checkContactRateLimit, getClientIp } from "@/lib/security/rate-limit";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { isValidOrigin } from "@/lib/security/origin-check";

export async function GET() {
  return NextResponse.json(
    { success: false, error: "Méthode non autorisée" },
    { status: 405, headers: { Allow: "POST" } },
  );
}

// Empêche la mise en cache de cette route
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest): Promise<Response> {
  if (!isValidOrigin(req)) {
    return NextResponse.json(
      { success: false, error: "Origine non autorisée." },
      { status: 403 },
    );
  }
  const clientIp = getClientIp(req);
  const rateLimit = await checkContactRateLimit(clientIp);
  if (!rateLimit.success) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Trop de tentatives. Veuillez patienter avant de renvoyer un message.",
      },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  // ── 1. Parse le body ─────────────────────────────────────────────────────

  try {
    const body = await req.json();

    // check honeypot
    if (body.website && body.website.trim() !== "") {
      console.warn(
        "Spam détecté via Honeypot ! IP:",
        req.headers.get("x-forwarded-for"),
      );

      console.warn("Honeypot trigger by IP:", clientIp);

      // On simule un succès total pour tromper le robot
      return NextResponse.json(
        { success: true, message: "Votre message a été envoyé avec succès !" },
        { status: 200 },
      );
    }

    const { turnstileToken, ...formData } = body;

    if (!turnstileToken) {
      return NextResponse.json(
        { success: false, error: "Veuillez valider le captcha de sécurité." },
        { status: 400 },
      );
    }

    const isHuman = await verifyTurnstileToken(turnstileToken, clientIp);
    if (!isHuman) {
      return NextResponse.json(
        {
          success: false,
          error: "Échec de la validation de sécurité (Captcha invalide).",
        },
        { status: 403 },
      );
    }

    // ── 2. Validation Zod ─────────────────────────────────────────────────────
    const t = await getTranslations("Contact");
    const contactSchema = getContactSchema(t);

    const parsed = contactSchema.safeParse(formData);

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
        {
          success: false,
          error: "Erreur interne",
        } satisfies ContactApiResponse,
        { status: 500 },
      );
    }
  } catch {
    return Response.json(
      {
        success: false,
        error: "Corps de la requête invalide",
      } satisfies ContactApiResponse,
      { status: 400 },
    );
  }
}
