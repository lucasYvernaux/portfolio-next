import { Resend } from "resend";
import { ContactEmail } from "@/emails/contact";
import type { ContactFormData } from "@/lib/validations/contact.schema";
import { serverEnv } from "@/env/server";

const resend = new Resend(serverEnv.RESEND_API_KEY);

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
    const emailDestination: string = serverEnv.RESEND_TO_EMAIL;
    const emailexpedition: string = serverEnv.RESEND_FROM_EMAIL;
    const { error } = await resend.emails.send({
      from: emailexpedition, // ex: "Portfolio <contact@tondomaine.fr>"
      to: emailDestination, // ton adresse de réception
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
