import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";

import { routing } from "@/i18n/routing";
import { type Locale } from "@/i18n/locale";
import { createMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/lib/seo/json-ld";

import SectionHero from "@/components/shared/section-hero";
import SectionDevis from "@/components/shared/section-devis";
import { AboutContent } from "@/components/feature/about/about-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  return createMetadata({
    locale: locale as Locale,
    title: t("about.title"),
    description: t("about.description"),
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return null;
  }

  setRequestLocale(locale);

  const tAbout = await getTranslations("About");
  const tCommon = await getTranslations("Common");

  return (
    <>
      <WebPageJsonLd
        locale={locale as Locale}
        title={tAbout("title")}
        description={tAbout("hero.text")}
        path="/about"
      />

      <BreadcrumbJsonLd
        locale={locale as Locale}
        items={[
          {
            name: tCommon("nav.home.label"),
            path: "/",
          },
          {
            name: tAbout("breadcrumb"),
            path: "/about",
          },
        ]}
      />

      <main className="min-h-screen pt-23">
        <SectionHero
          path={tCommon("nav.about.label")}
          title={tAbout("hero.title")}
          intro={tAbout("hero.text")}
        />

        <AboutContent />

        <SectionDevis
          title={tCommon("components.sectionDevis.title")}
          paragraph={tCommon("components.sectionDevis.text")}
        />
      </main>
    </>
  );
}
