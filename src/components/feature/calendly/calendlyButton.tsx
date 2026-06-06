// src/components/features/calendly/CalendlyButton.tsx
"use client";

import { useCallback, useState } from "react";
import { PopupButton } from "react-calendly";
import { useTranslations } from "next-intl";
import { env } from "@/env";
import { useCalendlyEvents } from "./useCalendlyEvents";
import { ContactFormData } from "@/src/lib/validations/contact.schema";

interface CalendlyButtonProps {
  // Permet de passer un bouton custom si besoin
  children?: React.ReactNode;
  prefillData?: Partial<ContactFormData>;
  className?: string;
  // Callback déclenché quand un RDV est effectivement pris
  onBooked?: () => void;
}

export function CalendlyButton({
  children,
  prefillData,
  className,
  onBooked,
}: CalendlyButtonProps) {
  const t = useTranslations("Contact");
  const [isBooked, setIsBooked] = useState(false);

  const handleEventScheduled = useCallback(() => {
    setIsBooked(true);
    onBooked?.();
  }, [onBooked]);

  // Écoute les événements Calendly
  useCalendlyEvents({ onEventScheduled: handleEventScheduled });

  if (isBooked) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
        {t("calendly.booked_confirmation")}
      </div>
    );
  }

  return (
    <PopupButton
      url={env.NEXT_PUBLIC_CALENDLY_URL!}
      // rootElement DOIT pointer vers le #__next ou body
      // sinon le popup ne s'affiche pas correctement
      rootElement={
        typeof document !== "undefined"
          ? (document.getElementById("__next") ?? document.body)
          : undefined!
      }
      text={(children as string) ?? t("calendly.cta")}
      className={className}
      pageSettings={{
        // Retire le bandeau "Powered by Calendly"
        hideLandingPageDetails: true,
        hideEventTypeDetails: false,
        // Adapte les couleurs à ton thème — hex sans #
        primaryColor: "111111",
        textColor: "111111",
        backgroundColor: "ffffff",
      }}
      prefill={{
        // Pré-rempli si on vient du formulaire de contact
        // (à passer en props si besoin)
        firstName: prefillData?.firstName ?? "",
        lastName: prefillData?.lastName ?? "",
        email: prefillData?.email ?? "",
        customAnswers: {
          a1: prefillData?.subject ?? "",
          a2: prefillData?.message ?? "",
        },
      }}
    />
  );
}
