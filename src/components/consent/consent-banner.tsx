"use client";

import { useTranslations } from "next-intl";
import {
  consentRequiredCategories,
  type ConsentChoices,
} from "@/types/consent";
import { useConsent } from "@/components/providers/consent-provider";
import Button from "../ui/button";

export function ConsentBanner() {
  const t = useTranslations("consent.banner");
  const { isBannerVisible, submit, openModal } = useConsent();

  if (!isBannerVisible) return null;

  const allTrue: ConsentChoices = {
    necessary: true,
    ...(Object.fromEntries(
      consentRequiredCategories.map((c) => [c, true]),
    ) as Record<(typeof consentRequiredCategories)[number], boolean>),
  };
  const allFalse: ConsentChoices = {
    necessary: true,
    ...(Object.fromEntries(
      consentRequiredCategories.map((c) => [c, false]),
    ) as Record<(typeof consentRequiredCategories)[number], boolean>),
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("ariaLabel")}
      className="fixed inset-x-0 bottom-0 z-50 border-t bg-background p-4 shadow-lg"
    >
      <p className="mb-3 text-sm text-muted-foreground">{t("description")}</p>
      {/* Trois boutons de poids visuel équivalent — exigence CNIL centrale */}
      <div className="flex items-center flex-wrap gap-4">
        <div>
          <Button
            size="small"
            variant="destructive"
            onClick={() => submit({ choices: allFalse, method: "reject_all" })}
            className="rounded-md border px-4 py-2 text-sm font-medium"
          >
            {t("rejectAll")}
          </Button>
        </div>
        <div>
          <Button
            size="small"
            variant="secondary"
            onClick={openModal}
            className="rounded-md border px-4 py-2 text-sm font-medium"
          >
            {t("customize")}
          </Button>
        </div>
        <div>
          <Button
            size="small"
            onClick={() => submit({ choices: allTrue, method: "accept_all" })}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            {t("acceptAll")}
          </Button>
        </div>
      </div>
    </div>
  );
}
