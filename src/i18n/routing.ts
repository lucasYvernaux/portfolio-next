import { defineRouting } from "next-intl/routing";
import { DEFAULT_LOCALE, LOCALES } from "./locale";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: true,
  localePrefix: "always",

  // ── Cookie de préférence de locale ──────────────────────────────────────
  localeCookie: {
    // Nom explicite (évite les collisions)
    name: "NEXT_LOCALE",
    // 1 an (préférence durable)
    maxAge: 60 * 60 * 24 * 365,
    // Sécurité
    sameSite: "lax",
    // path: "/" est la valeur par défaut
  },

  pathnames: {
    "/": "/",
    "#": "#",

    "/about": {
      fr: "/a-propos",
      en: "/about",
    },

    "/projects": {
      fr: "/realisation",
      en: "/projects",
    },

    "/project/[slug]": {
      fr: "/realisation/[slug]",
      en: "/project/[slug]",
    },

    "/pricing": {
      fr: "/tarifs",
      en: "/pricing",
    },

    "/contact": "/contact",
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export type Locale = (typeof routing.locales)[number];
// Type des routes internes — inféré automatiquement depuis pathnames
export type Pathname = keyof typeof routing.pathnames;
