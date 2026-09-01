import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { createMetadata } from "@/lib/seo/metadata";
import { type Locale } from "@/i18n/locale";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/lib/seo/json-ld";
import SectionHero from "@/components/shared/section-hero";
import { LegalSection } from "@/components/shared/legal-section";

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
    title: t("legalNotice.title"),
    description: t("legalNotice.description"),
    path: "/legal-notice",
  });
}

export default async function LegalNoticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return null;

  const t = await getTranslations("Legal.LegalNotice");
  const tCommon = await getTranslations("Common");
  const sections = t.raw("sections") as { heading: string; body: string[] }[];
  const lastUpdated = t("lastUpdated", {
    date: new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(
      new Date("2026-09-01"),
    ),
  });

  return (
    <>
      <WebPageJsonLd
        locale={locale as Locale}
        title={t("pageTitle")}
        description={t("pageTitle")}
        path="/legal-notice"
      />
      <BreadcrumbJsonLd
        locale={locale as Locale}
        items={[
          { name: tCommon("nav.home.label"), path: "/" },
          { name: t("breadcrumb"), path: "/legal-notice" },
        ]}
      />

      <div className="pt-23 min-h-screen">
        <SectionHero path={t("breadcrumb")} title={t("pageTitle")} />
        <section className="max-w-4xl mx-auto px-6 md:px-12 py-12">
          <p className="text-gray-500 text-xs mb-8">{lastUpdated}</p>
          {sections.map((section, i) => (
            <LegalSection
              key={i}
              heading={section.heading}
              body={section.body}
            />
          ))}
        </section>
      </div>
    </>
  );
}
