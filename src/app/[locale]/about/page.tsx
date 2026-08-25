import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { createMetadata } from "@/lib/seo/metadata";
import { type Locale } from "@/i18n/locale";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/lib/seo/json-ld";
import SectionHero from "@/components/shared/section-hero";
import SectionDevis from "@/components/shared/section-devis";
// import Pattern from "@/components/shared/background";

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
    title: t("about.title"),
    description: t("about.description"),
    path: "/about",
  });
}

/* ── Page ── */
export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return null;

  setRequestLocale(locale);

  const t = await getTranslations("About");
  const tCommon = await getTranslations("Common");

  return (
    <>
      {/* Données structurées traduites */}
      <WebPageJsonLd
        locale={locale as Locale}
        title={t("title")}
        description={t("title")}
        path="/about"
      />
      <BreadcrumbJsonLd
        locale={locale as Locale}
        items={[
          { name: tCommon("nav.home.label"), path: "/" },
          { name: t("breadcrumb"), path: "/about" },
        ]}
      />

      <div className="pt-23 min-h-screen">
        <SectionHero
          path="contact"
          title={"Mon approche"}
          intro={
            "Développeur web passionné avec plus de 4 ans d'expérience, je transforme vos idées en solutions digitales performantes."
          }
        />
        <section className="min-h-screen max-w-4xl mx-auto">
          <p className="mt-3 fs-3 text-start bg-gray-custom rounded p-3 shadow-lg">
            Je suis un développeur web talentueux avec 4 ans d&apos;expérience,
            passionné par la création d&apos;interfaces pour offrir des
            expériences utilisateur exceptionnelles. Mon objectif est de
            collaborer avec une équipe dynamique pour développer des solutions
            web innovantes et stimulantes.
          </p>
        </section>
        <SectionDevis title="Pret a collaborer ?" />
      </div>
    </>
  );
}
