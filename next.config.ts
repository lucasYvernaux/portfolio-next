import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://assets.calendly.com https://challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://*.calendly.com",
      "font-src 'self' data:",
      "connect-src 'self' https://*.calendly.com https://challenges.cloudflare.com",
      "frame-src https://calendly.com https://*.calendly.com https://challenges.cloudflare.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
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
