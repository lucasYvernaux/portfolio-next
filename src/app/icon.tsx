import { ImageResponse } from "next/og";
import { BRAND_COLOR } from "../lib/seo/constants";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: BRAND_COLOR,
        borderRadius: "6px",
      }}
    >
      {/* Remplacer par votre lettre / logo */}
      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#09090b",
          lineHeight: 1,
        }}
      >
        M
      </div>
    </div>,

    { ...size },
  );
}
