import { ImageResponse } from "next/og";
import { BRAND_COLOR } from "../lib/seo/constants";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple Touch Icon 180×180.
 * Affiché sur l'écran d'accueil iOS.
 */
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: `linear-gradient(135deg, ${BRAND_COLOR} 0%, #a88940 100%)`,
        borderRadius: "40px",
      }}
    >
      <div
        style={{
          fontSize: 100,
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1,
          textShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        YWS
      </div>
    </div>,
    { ...size },
  );
}
