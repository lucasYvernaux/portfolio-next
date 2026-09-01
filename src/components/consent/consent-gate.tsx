"use client";

import type { CookieCategory } from "@/types/consent";
import { useTranslations } from "next-intl";
import { useConsent } from "@/components/providers/consent-provider";

interface ConsentGateProps {
  category: Exclude<CookieCategory, "necessary">;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ConsentGate({
  category,
  children,
  fallback,
}: ConsentGateProps) {
  const t = useTranslations("consent.gate");
  const { hasConsent, submit, consent } = useConsent();

  if (hasConsent(category)) return <>{children}</>;

  if (fallback) return <>{fallback}</>;

  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-md border border-dashed p-6 text-center">
      <p className="text-sm text-muted-foreground">
        {t("blocked", { category: t(`categories.${category}`) })}
      </p>
      <button
        onClick={() =>
          submit({
            choices: {
              ...(consent?.choices ?? {
                necessary: true,
                calendly: false,
                analytics: false,
              }),
              [category]: true,
            },
            method: "custom",
          })
        }
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        {t("loadAction")}
      </button>
    </div>
  );
}
