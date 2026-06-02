"use client";

import { useState } from "react";
import {
  contactSchema,
  type ContactFormData,
  type ContactApiResponse,
} from "@/src/lib/validations/contact.schema";

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

type FormState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; error: string; fields?: FieldErrors };

export function useContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // Validation temps réel d'un champ individuel
  function validateField(
    name: keyof ContactFormData,
    value: string,
  ): string | undefined {
    const fieldSchema = contactSchema.shape[name];
    const result = fieldSchema.safeParse(value);
    return result.success ? undefined : result.error.issues[0]?.message;
  }

  async function handleSubmit(formData: ContactFormData) {
    // Validation complète côté client avant envoi
    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const errors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFormData;
        if (key) errors[key] = issue.message;
      }
      setFieldErrors(errors);
      setState({ status: "idle" });
      return;
    }

    setState({ status: "loading" });
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const json: ContactApiResponse = await res.json();

      if (json.success) {
        setState({ status: "success", message: json.message });
      } else {
        setFieldErrors(json.fields ?? {});
        setState({ status: "error", error: json.error });
      }
    } catch {
      setState({
        status: "error",
        error: "Impossible de joindre le serveur. Vérifiez votre connexion.",
      });
    }
  }

  return { state, fieldErrors, validateField, handleSubmit };
}
