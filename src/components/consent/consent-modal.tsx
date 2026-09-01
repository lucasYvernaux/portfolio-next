"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { consentRegistry } from "@/lib/consent/registry";
import type { ConsentChoices } from "@/types/consent";
import { useConsent } from "@/components/providers/consent-provider";
import Button from "../ui/button";

export function ConsentModal() {
  const t = useTranslations("consent");
  const { isModalOpen, closeModal, consent, submit } = useConsent();
  const [draft, setDraft] = useState<ConsentChoices>(
    consent?.choices ?? { necessary: true, calendly: false, analytics: false },
  );

  if (!isModalOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4"
    >
      <div className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-lg bg-background p-6">
        <h2 className="mb-4 text-lg font-semibold">{t("modal.title")}</h2>

        {consentRegistry.map((cat) => (
          <div
            key={cat.id}
            className="mb-4 flex items-start justify-between gap-4 border-b pb-4"
          >
            <div>
              <p className="font-medium">{t(`categories.${cat.id}.label`)}</p>
              <p className="text-sm text-muted-foreground">
                {t(`categories.${cat.id}.description`)}
              </p>
            </div>
            <input
              type="checkbox"
              checked={cat.required ? true : draft[cat.id]}
              disabled={cat.required}
              onChange={(e) =>
                setDraft((d) => ({ ...d, [cat.id]: e.target.checked }))
              }
              aria-label={t(`categories.${cat.id}.label`)}
            />
          </div>
        ))}

        <div className="flex justify-end flex-wrap gap-4">
          <div>
            <Button onClick={closeModal} variant="secondary" size="small">
              {t("modal.cancel")}
            </Button>
          </div>
          <div>
            <Button
              onClick={() => submit({ choices: draft, method: "custom" })}
              variant="default"
              size="small"
            >
              {t("modal.save")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
