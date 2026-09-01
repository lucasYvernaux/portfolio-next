import type { CookieCategory } from "@/types/consent";

export interface CategoryDefinition {
  id: CookieCategory;
  required: boolean; // true seulement pour "necessary"
  cookies: {
    name: string;
    provider: string;
    purpose: string;
    duration: string;
  }[];
}

export const consentRegistry: CategoryDefinition[] = [
  {
    id: "necessary",
    required: true,
    cookies: [
      {
        name: "NEXT_LOCALE",
        provider: "next-intl",
        purpose: "Langue préférée",
        duration: "1 an",
      },
      {
        name: "theme",
        provider: "next-themes",
        purpose: "Thème clair/sombre",
        duration: "1 an",
      },
      {
        name: "cf_turnstile",
        provider: "Cloudflare",
        purpose: "Anti-bot formulaire de contact",
        duration: "Session",
      },
      {
        name: "consent",
        provider: "Interne",
        purpose: "Mémorisation du choix de consentement",
        duration: "6 mois",
      },
    ],
  },
  {
    id: "calendly",
    required: false,
    cookies: [
      {
        name: "__cf_bm / _calendly_session",
        provider: "Calendly",
        purpose: "Fonctionnement du widget de prise de RDV",
        duration: "Session à 1 an selon le cookie",
      },
    ],
  },
  {
    id: "analytics",
    required: false,
    cookies: [], // vide pour l'instant, prêt si tu ajoutes un outil de mesure d'audience
  },
];
