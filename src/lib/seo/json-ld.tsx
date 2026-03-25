import { SITE_URL, SITE_NAME, type Locale } from "./constants";
import { buildUrl } from "./metadata";

/* ══════════════════════════════════════════════
   Données structurées JSON-LD (Server Components)

   SÉCURITÉ : 
   - JSON.stringify gère l'échappement de base.
   - On remplace < par \u003c pour empêcher
     l'injection de </script> dans le JSON.
   - Jamais de données utilisateur brutes.
   ══════════════════════════════════════════════ */

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data, null, 0)
    // Empêche l'injection </script> dans le JSON inline
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

/* ── Organization ── */

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}icons/icon-512.png`,
        // Ajouter si applicable :
        // sameAs: [
        //   "https://twitter.com/...",
        //   "https://linkedin.com/company/...",
        // ],
      }}
    />
  );
}

/* ── WebSite (avec SearchAction pour les sitelinks) ── */

export function WebSiteJsonLd({ locale }: { locale: Locale }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: buildUrl(locale),
        inLanguage: locale,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${buildUrl(locale)}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

/* ── BreadcrumbList ── */

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function BreadcrumbJsonLd({
  locale,
  items,
}: {
  locale: Locale;
  items: BreadcrumbItem[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: buildUrl(locale, item.path),
        })),
      }}
    />
  );
}

/* ── WebPage générique ── */

export function WebPageJsonLd({
  locale,
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: buildUrl(locale, path),
        inLanguage: locale,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: buildUrl(locale),
        },
        ...(datePublished && { datePublished }),
        ...(dateModified && { dateModified }),
      }}
    />
  );
}
