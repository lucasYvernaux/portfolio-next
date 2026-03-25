import { isValidLocale } from "@/src/i18n/locale";
import {
  BRAND_COLOR,
  BRAND_COLOR_LIGHT,
  SITE_NAME,
} from "@/src/lib/seo/constants";
import { ImageResponse } from "next/og";

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TAGLINES: Record<string, string> = {
  fr: "Votre tagline en français",
  en: "Your tagline in English",
};

/**
 * Image Open Graph générée par locale.
 * → Chaque locale a son propre texte
 * → Mise en cache automatique par Next.js
 * → Chemin : /fr/opengraph-image, /en/opengraph-image
 *
 * SÉCURITÉ : le param `locale` est validé
 * pour empêcher l'injection de contenu.
 */
export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  // ── Validation du paramètre ──
  const locale = isValidLocale(rawLocale) ? rawLocale : "fr";
  const tagline = TAGLINES[locale] ?? TAGLINES.fr;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#09090b",
        padding: "60px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Halo décoratif */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${BRAND_COLOR}33 0%, transparent 70%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${BRAND_COLOR}22 0%, transparent 70%)`,
        }}
      />

      {/* Nom du site */}
      <div
        style={{
          display: "flex",
          fontSize: 72,
          fontWeight: 800,
          color: BRAND_COLOR,
          letterSpacing: "-2px",
          marginBottom: "16px",
        }}
      >
        {SITE_NAME}
      </div>

      {/* Ligne décorative */}
      <div
        style={{
          display: "flex",
          width: "120px",
          height: "4px",
          borderRadius: "2px",
          background: `linear-gradient(90deg, transparent, ${BRAND_COLOR}, transparent)`,
          marginBottom: "24px",
        }}
      />

      {/* Tagline */}
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: BRAND_COLOR_LIGHT,
          opacity: 0.8,
          textAlign: "center",
          maxWidth: "700px",
        }}
      >
        {tagline}
      </div>

      {/* URL en bas */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          display: "flex",
          fontSize: 18,
          color: "#71717a",
          letterSpacing: "2px",
        }}
      >
        {SITE_NAME.toLowerCase()}.com
      </div>
    </div>,
    { ...size },
  );
}
