import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, type Locale } from "./constants";
import { DEFAULT_LOCALE, LOCALES } from "@/i18n/locale";
import { getPathname } from "@/i18n/navigation";
import { StaticPathname } from "@/types/global";

type CreateMetadataParams = {
  locale: Locale;
  title: string;
  description: string;
  /** Chemin sans le préfixe locale */
  path?: StaticPathname;
  /** URL d'image OG custom */
  ogImage?: string;
  /** Interdire l'indexation de cette page */
  noIndex?: boolean;
};

/**
 * Construit l'URL complète d'une page localisée.
 */
export function buildUrl(locale: Locale, path: StaticPathname = "/"): string {
  const cleanPath = getPathname({ locale, href: path });
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Génère un objet Metadata complet.
 */
export function createMetadata({
  locale,
  title,
  description,
  path = "/",
  ogImage,
  noIndex = false,
}: CreateMetadataParams): Metadata {
  const canonicalUrl = buildUrl(locale, path);

  /* Alternates pour hreflang */
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[loc] = buildUrl(loc, path);
  }
  // x-default pointe vers la locale par défaut
  languages["x-default"] = buildUrl(DEFAULT_LOCALE, path);

  return {
    title,
    description,

    /* ── Canonical + alternates ── */
    alternates: {
      canonical: canonicalUrl,
      languages,
    },

    /* ── Open Graph ── */
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title,
      description,
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
    },

    /* ── Twitter Card ── */
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // Twitter utilise l'image OG si twitter:image n'est pas fourni
      ...(ogImage && { images: [ogImage] }),
    },

    /* ── Robots ── */
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
    }),
  };
}
