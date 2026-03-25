"use client";

import { useLocale, useTranslations } from "next-intl";

import { Languages } from "lucide-react";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { LOCALES, type Locale } from "@/src/i18n/locale";
import { StaticPathname } from "@/src/lib/types";

/**
 * Sélecteur de langue.
 *
 * Utilise useRouter de next-intl/navigation :
 * → router.replace(pathname, { locale: "en" })
 * → Change la locale SANS recharger la page
 * → Préserve le pathname courant
 */
export function LocaleSwitcher() {
  const t = useTranslations("Common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: Locale) {
    // ── Sécurité : ne pas accepter de locale arbitraire ──
    if (!LOCALES.includes(newLocale)) return;
    if (newLocale === locale) return;

    router.replace(
      { pathname: pathname as StaticPathname },
      { locale: newLocale },
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4 text-foreground-muted" />
      {LOCALES.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={loc === locale}
          className={`
            rounded-md px-2.5 py-1 text-xs font-medium
            transition-colors duration-150
            ${
              loc === locale
                ? "bg-accent text-accent-foreground"
                : "text-foreground-muted hover:bg-surface hover:text-foreground"
            }
          `}
          aria-label={t("locale.switchTo", { locale: t(`locale.${loc}`) })}
          aria-current={loc === locale ? "true" : undefined}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
