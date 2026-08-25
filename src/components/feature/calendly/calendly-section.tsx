// src/components/features/calendly/CalendlySection.tsx
"use client";

import { useTranslations } from "next-intl";
import { CalendlyButton } from "./calendlyButton";
import { ContactFormData } from "@/lib/validations/contact.schema";

interface CalendlySectionProps {
  className?: string;
  prefillData?: Partial<ContactFormData>;
}

export function CalendlySection({
  className,
  prefillData,
}: CalendlySectionProps) {
  const tContact = useTranslations("Contact");

  return (
    <section>
      <h2 className="text-xl font-medium mb-3">{tContact("calendly.title")}</h2>
      <p className="text-sm text-muted-foreground mb-6">
        {tContact("calendly.description")}
      </p>
      <CalendlyButton
        className={className}
        prefillData={prefillData}
        onBooked={() => {
          // handler ici — on est dans un Client Component, c'est ok
          console.log("RDV pris !");
        }}
      />
    </section>
  );
}
