import { z } from "zod";

// Partagé entre le client (validation temps réel)
// et le serveur (validation dans le Route Handler)
export const contactSchema = z.object({
  lastName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères")
    .trim(),

  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(100, "Le prénom ne peut pas dépasser 100 caractères")
    .trim(),

  company: z
    .string()
    .min(2, "Le champs doit contenir au moins 2 caractères")
    .max(100, "Le champs ne peut pas dépasser 100 caractères")
    .trim()
    .optional(),

  job: z
    .string()
    .min(2, "Le champs doit contenir au moins 2 caractères")
    .max(100, "Le champs ne peut pas dépasser 100 caractères")
    .trim()
    .optional(),

  email: z
    .string()
    .email("Adresse email invalide")
    .max(254, "Email trop long")
    .trim()
    .toLowerCase(),

  subject: z
    .string()
    .min(5, "Le sujet doit contenir au moins 5 caractères")
    .max(200, "Le sujet ne peut pas dépasser 200 caractères")
    .trim(),

  message: z
    .string()
    .min(20, "Le message doit contenir au moins 20 caractères")
    .max(5000, "Le message ne peut pas dépasser 5000 caractères")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Type retourné par le Route Handler
export type ContactApiResponse =
  | { success: true; message: string }
  | {
      success: false;
      error: string;
      fields?: Partial<Record<keyof ContactFormData, string>>;
    };
