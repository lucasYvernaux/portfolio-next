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
        onClick={openModal}
        variant="link"
        size="mini"
        style={{ paddingLeft: 0 }}
      >
        {t("manageLink")}
      </Button>
    </div>
  );
}

// lab(65.9269% -.832707 -8.17474)
