import { _Translator, Messages } from "next-intl";
import { z } from "zod";

export function getContactSchema(t: _Translator<Messages, "Contact">) {
  return z.object({
    lastName: z
      .string()
      .trim()
      .toLowerCase()
      .min(
        2,
        t("form.error.too_short_char", {
          field: t("form.lastName"),
          nb_char: 2,
        }),
      )
      .max(
        100,
        t("form.error.too_long_char", {
          field: t("form.lastName"),
          nb_char: 100,
        }),
      ),

    firstName: z
      .string()
      .trim()
      .toLowerCase()
      .min(
        2,
        t("form.error.too_short_char", {
          field: t("form.firstName"),
          nb_char: 2,
        }),
      )
      .max(
        100,
        t("form.error.too_long_char", {
          field: t("form.firstName"),
          nb_char: 100,
        }),
      ),

    company: z
      .string()
      .trim()
      .min(
        2,
        t("form.error.too_short_char", {
          field: t("form.company"),
          nb_char: 2,
        }),
      )
      .max(
        100,
        t("form.error.too_long_char", {
          field: t("form.company"),
          nb_char: 100,
        }),
      )
      .optional(),

    job: z
      .string()
      .trim()
      .min(
        2,
        t("form.error.too_short_char", {
          field: t("form.job"),
          nb_char: 2,
        }),
      )
      .max(
        100,
        t("form.error.too_long_char", {
          field: t("form.job"),
          nb_char: 100,
        }),
      )
      .optional(),

    email: z
      .string()
      .trim()
      .toLowerCase()
      .email(
        t("form.error.invalid", {
          field: t("form.email"),
        }),
      )
      .max(
        254,
        t("form.error.too_long_char", {
          field: t("form.email"),
          nb_char: 254,
        }),
      ),

    subject: z
      .string()
      .trim()
      .min(
        5,
        t("form.error.too_short_char", {
          field: t("form.subject"),
          nb_char: 5,
        }),
      )
      .max(
        200,
        t("form.error.too_long_char", {
          field: t("form.subject"),
          nb_char: 200,
        }),
      ),
    message: z
      .string()
      .trim()
      .min(
        20,
        t("form.error.too_short_char", {
          field: t("form.message"),
          nb_char: 20,
        }),
      )
      .max(
        500,
        t("form.error.too_long_char", {
          field: t("form.message"),
          nb_char: 500,
        }),
      ),
  });
}

export type ContactFormData = z.infer<ReturnType<typeof getContactSchema>>;

export type RequiredFields =
  | "lastName"
  | "firstName"
  | "email"
  | "subject"
  | "message";

export type OptionalFields = Exclude<keyof ContactFormData, RequiredFields>;
// export type OptionalFields = "company" | "job";

// Type retourné par le Route Handler
export type ContactApiResponse =
  | { success: true; message: string }
  | {
      success: false;
      error: string;
      fields?: Partial<Record<keyof ContactFormData, string>>;
    };
