"use client";

import { useTranslations } from "next-intl";
import { useConsent } from "@/components/providers/consent-provider";
import Button from "../ui/button";

export function CookieSettingsTrigger() {
  const t = useTranslations("consent");
  const { openModal } = useConsent();
  return (
    <div className="w-fit">
      <Button
        href="#"
        onClick={openModal}
        variant="link"
        size="short"
        style={{ color: "var(--color-foreground)" }}
        //   className="text-sm underline text-muted-foreground "
      >
        {t("manageLink")}
      </Button>
    </div>
  );
}

// lab(65.9269% -.832707 -8.17474)
