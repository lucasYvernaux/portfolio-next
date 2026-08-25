"use client";

import { useMemo, useState } from "react";
import {
  getContactSchema,
  type ContactFormData,
  type ContactApiResponse,
  OptionalFields,
} from "@/lib/validations/contact.schema";
import { useTranslations } from "next-intl";

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

type FormState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; error: string; fields?: FieldErrors };

const OPTIONAL_FIELDS: OptionalFields[] = ["company", "job"];

export function useContactForm() {
  const t = useTranslations("Contact");
  // On génère le schéma avec les traductions du client
  const contactSchema = useMemo(() => getContactSchema(t), [t]);
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // Validation temps réel d'un champ individuel
  function validateField(
    name: keyof ContactFormData,
    value: string,
  ): string | undefined {
    const isOptional = (OPTIONAL_FIELDS as string[]).includes(name);
    if (isOptional && (!value || value.trim() === "")) return undefined;

    const fieldSchema = contactSchema.shape[name];
    const result = fieldSchema.safeParse(value);
    return result.success ? undefined : result.error.issues[0]?.message;
  }

  async function handleSubmit(
    formData: ContactFormData,
    turnstileToken?: string | null,
    onResetCaptcha?: () => void,
  ) {
    console.log("je suis dans le handle submit");

    if (!turnstileToken) {
      setState({
        status: "error",
        error: "Veuillez compléter le test de sécurité Turnstile.",
      });
      return;
    }
    // Validation complète côté client avant envoi
    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      console.log("erreur");

      const errors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFormData;
        if (key) errors[key] = issue.message;
      }
      console.log(errors);

      setFieldErrors(errors);
      setState({ status: "idle" });
      return;
    }
    console.log("pas d'erreur");

    setState({ status: "loading" });
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...removeEmptyOptionals(parsed.data),
          turnstileToken,
        }),
      });

      const json: ContactApiResponse = await res.json();

      if (json.success) {
        setState({ status: "success", message: json.message });
      } else {
        setFieldErrors(json.fields ?? {});
        setState({ status: "error", error: json.error });
        onResetCaptcha?.();
      }
    } catch {
      setState({
        status: "error",
        error: "Impossible de joindre le serveur. Vérifiez votre connexion.",
      });
      onResetCaptcha?.();
    }
  }

  return { state, fieldErrors, validateField, handleSubmit };
}

// Supprime les champs optionnels vides pour ne pas les envoyer
function removeEmptyOptionals(data: ContactFormData): ContactFormData {
  const cleaned = { ...data };
  const optionals: OptionalFields[] = ["company", "job"];
  for (const key of optionals) {
    const val = cleaned[key];
    if (val === "" || val === undefined) {
      delete cleaned[key];
    }
  }
  return cleaned;
}
