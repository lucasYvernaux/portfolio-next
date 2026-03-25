import { env } from "@/env";
import type { Locale } from "@/src/i18n/routing";

export function getPersonSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lucas Yvernaux",
    url: env.BASE_URL,
    jobTitle:
      locale === "fr"
        ? "Développeur web fullstack freelance"
        : "Fullstack freelance web developer",
    knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    sameAs: [
      "https://github.com/lucasYvernaux",
      "https://linkedin.com/in/lucas-yvernaux",
    ],
  };
}

export function getWebsiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Prénom Nom",
    url: env.BASE_URL,
    inLanguage: locale === "fr" ? "fr-FR" : "en-US",
  };
}

export function getProjectSchema({
  title,
  description,
  url,
  imageUrl,
}: {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url,
    ...(imageUrl && { image: imageUrl }),
    author: {
      "@type": "Person",
      name: "Lucas Yvernaux",
      url: env.BASE_URL,
    },
  };
}
