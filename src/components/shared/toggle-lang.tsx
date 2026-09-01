"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { StaticPathname } from "@/types/global";
import { useLocale, useTranslations } from "next-intl";
import Button from "../ui/button";

export function SwitchLang() {
  const locale = useLocale();
  const pathname = usePathname() as StaticPathname; // route INTERNE ("/about", pas "/a-propos")
  const router = useRouter();
  const t = useTranslations("Common.locale");

  const handleSwitch = (nextLocale: string) => {
    router.replace(
      { pathname: pathname as StaticPathname },
      { locale: nextLocale },
    );
  };

  return (
    <div className="flex items-center relative gap-1">
      {routing.locales.map((l) => (
        <Button
          key={l}
          variant="secondary"
          size="short"
          onClick={() => handleSwitch(l)}
          disabled={l === locale}
          className="uppercase"
          title={t("switchTo", { locale: t(l) })}
        >
          {l}
        </Button>
      ))}
    </div>
  );
}
