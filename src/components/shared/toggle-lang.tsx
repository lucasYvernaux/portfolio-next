"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { StaticPathname } from "@/lib/types";
import { useLocale, useTranslations } from "next-intl";

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
    <div className="flex items-center gap-1">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => handleSwitch(l)}
          disabled={l === locale}
          className="px-2 py-1 text-sm cursor-pointer border rounded-md disabled:opacity-25 disabled:cursor-not-allowed hover:bg-muted transition-colors uppercase"
          title={t("switchTo", { locale: t(l) })}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
