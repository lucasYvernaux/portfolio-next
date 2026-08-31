"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { useContactForm } from "./use-contact";
import type { ContactFormData } from "@/lib/validations/contact.schema";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { clientEnv } from "@/env/client";

interface ContactFormProps {
  onValuesChange?: (values: Partial<ContactFormData>) => void;
}

export function ContactForm({ onValuesChange }: ContactFormProps) {
  const t = useTranslations("Contact");
  const { state, fieldErrors, handleSubmit } = useContactForm();

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const [values, setValues] = useState<ContactFormData>({
    lastName: "",
    firstName: "",
    company: "",
    job: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactFormData, boolean>>
  >({});

  function handleChange(field: keyof ContactFormData, value: string) {
    const next = { ...values, [field]: value };
    onValuesChange?.(next);
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleBlur(field: keyof ContactFormData) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  async function onSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    setTouched({
      lastName: true,
      firstName: true,
      company: true,
      job: true,
      email: true,
      subject: true,
      message: true,
    });

    await handleSubmit(values, turnstileToken, () => {
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    });
  }

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-950">
        <p className="font-medium text-green-800 dark:text-green-200">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {/* Erreur globale */}
      {state.status === "error" && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300"
        >
          {state.error}
        </div>
      )}

      {/* Nom */}
      <div className="flex flex-col md:flex-row gap-6">
        {" "}
        <Field
          id="lastName"
          label={t("form.lastName")}
          type="text"
          value={values.lastName}
          error={touched.lastName ? fieldErrors.lastName : undefined}
          onChange={(v) => handleChange("lastName", v)}
          onBlur={() => handleBlur("lastName")}
          autoComplete="name"
          required
        />
        <Field
          id="firstName"
          label={t("form.firstName")}
          type="text"
          value={values.firstName}
          error={touched.firstName ? fieldErrors.firstName : undefined}
          onChange={(v) => handleChange("firstName", v)}
          onBlur={() => handleBlur("firstName")}
          autoComplete="name"
          required
        />
      </div>

      {/* entreprise */}
      <div className="flex flex-col md:flex-row gap-6">
        {" "}
        <Field
          id="company"
          label={t("form.company")}
          type="text"
          value={values.company ?? ""}
          error={touched.company ? fieldErrors.company : undefined}
          onChange={(v) => handleChange("company", v)}
          onBlur={() => handleBlur("company")}
          autoComplete="company"
        />
        <Field
          id="job"
          label={t("form.job")}
          type="text"
          value={values.job ?? ""}
          error={touched.job ? fieldErrors.job : undefined}
          onChange={(v) => handleChange("job", v)}
          onBlur={() => handleBlur("job")}
          autoComplete="job"
        />
      </div>

      {/* Email */}
      <Field
        id="email"
        label={t("form.email")}
        type="email"
        value={values.email}
        error={touched.email ? fieldErrors.email : undefined}
        onChange={(v) => handleChange("email", v)}
        onBlur={() => handleBlur("email")}
        autoComplete="email"
        required
      />

      {/* Sujet */}
      <Field
        id="subject"
        label={t("form.subject")}
        type="text"
        value={values.subject}
        error={touched.subject ? fieldErrors.subject : undefined}
        onChange={(v) => handleChange("subject", v)}
        onBlur={() => handleBlur("subject")}
        required
      />

      {/* Website */}
      <div
        className="absolute opacity-0 -z-10 pointer-events-none h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <Field
          id="website"
          label={t("form.website")}
          type="text"
          value={values.website ?? ""}
          error={touched.website ? fieldErrors.website : undefined}
          onChange={(v) => handleChange("website", v)}
          onBlur={() => handleBlur("website")}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          {t("form.message")} <span aria-hidden>*</span>
        </label>
        <textarea
          id="message"
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          rows={6}
          required
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          aria-invalid={!!fieldErrors.message}
          className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring aria-[invalid=true]:border-red-500 resize-none"
          placeholder={t("form.message_placeholder")}
        />
        {touched.message && fieldErrors.message && (
          <p id="message-error" role="alert" className="text-xs text-red-500">
            {fieldErrors.message}
          </p>
        )}
      </div>
      <div className="my-4 flex justify-center">
        <Turnstile
          ref={turnstileRef}
          siteKey={clientEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          onSuccess={(token) => setTurnstileToken(token)}
          onExpire={() => setTurnstileToken(null)}
          onError={() => setTurnstileToken(null)}
          options={{
            theme: "auto", // S'adapte au mode clair/sombre automatiquement
          }}
        />
      </div>
      <button
        type="submit"
        disabled={state.status === "loading" || !turnstileToken}
        className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.status === "loading" ? t("form.sending") : t("form.submit")}
      </button>
    </form>
  );
}

// ── Composant champ réutilisable ──────────────────────────────────────────

interface FieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  autoComplete?: string;
  required?: boolean;
}

function Field({
  id,
  label,
  type,
  value,
  error,
  onChange,
  onBlur,
  autoComplete,
  required,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} {required && <span aria-hidden>*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        required={required}
        autoComplete={autoComplete}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring aria-invalid:border-red-500"
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
