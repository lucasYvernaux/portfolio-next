import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import z from "zod";

const securityHeaders = [
  {
    // Empêche le sniffing MIME
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Empêche le clickjacking
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    // Bloque les pages d'erreur d'être mises en cache
    // par les proxies avec les données d'un autre utilisateur
    key: "Cache-Control",
    value: "no-store, no-cache, must-revalidate",
  },
  {
    // Referrer strict
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
