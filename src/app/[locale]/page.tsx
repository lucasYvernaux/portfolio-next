import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { createMetadata } from "@/lib/seo/metadata";
import { type Locale } from "@/i18n/locale";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/lib/seo/json-ld";
import SectionDevis from "@/components/shared/section-devis";

import { HomeAbout } from "@/components/feature/home/home-about";
import { HomeHero } from "@/components/feature/home/home-hero";
import { HomeFeatures } from "@/components/feature/home/home-features";
import { HomeProject } from "@/components/feature/home/home-projects";
import { HomePricing } from "@/components/feature/home/home-pricing";

/* ── Metadata traduite ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return createMetadata({
    locale: locale as Locale,
    title: t("home.title"),
    description: t("home.description"),
    path: "/",
  });
}

/* ── Page ── */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return null;

  setRequestLocale(locale);
  const tHome = await getTranslations("Home");
  const tCommon = await getTranslations("Common");

  return (
    <>
      {/* Données structurées traduites */}
      <WebPageJsonLd
        locale={locale as Locale}
        title={tHome("title")}
        description={tHome("title")}
        path="/"
      />
      <BreadcrumbJsonLd
        locale={locale as Locale}
        items={[{ name: tCommon("nav.home.label"), path: "/" }]}
      />

      <div className="relative">
        <HomeHero />
        <HomeFeatures />
        <HomeAbout />
        <HomeProject />
        <HomePricing />
        <SectionDevis
          title={tCommon("components.sectionDevis.title")}
          paragraph={tCommon("components.sectionDevis.text")}
        />
      </div>
    </>
  );
}
