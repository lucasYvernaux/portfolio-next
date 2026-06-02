import { Resend } from "resend";
import { env } from "@/env";
import { ContactEmail } from "@/src/emails/contact";
import type { ContactFormData } from "@/src/lib/validations/contact.schema";

const resend = new Resend(env.RESEND_API_KEY);

export class EmailServiceError extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = "EmailServiceError";
  }
}

export const emailService = {
  async sendContactEmail(data: ContactFormData): Promise<void> {
    const { error } = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL, // ex: "Portfolio <contact@tondomaine.fr>"
      to: env.RESEND_TO_EMAIL, // ton adresse de réception
      replyTo: data.email, // répondre directement à l'expéditeur
      subject: `[Portfolio] ${data.subject}`,
      react: ContactEmail({ data }),
    });

    if (error) {
      console.error("error send email :" + error);

      throw new EmailServiceError("Échec de l'envoi de l'email", error);
    }
  },
};
