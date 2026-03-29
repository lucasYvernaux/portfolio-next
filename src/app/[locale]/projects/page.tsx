import CardProjects from "@/src/components/feature/projects/card-project";
import SectionDevis from "@/src/components/shared/section-devis";
import SectionHero from "@/src/components/shared/section-hero";
import { type Locale } from "@/src/i18n/locale";
import { routing } from "@/src/i18n/routing";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/src/lib/seo/json-ld";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ProjectsPage({
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
          { name: tCommon("nav.home"), path: "/" },
          { name: t("breadcrumb"), path: "/about" },
        ]}
      />

      <div className="pt-23 min-h-screen">
        <SectionHero
          path="Réalisations"
          title={"Projets Récents"}
          intro={"Découvrez une sélection de mes réalisations récentes."}
        />
        <section className="min-h-screen max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <CardProjects />
            <CardProjects />
            <CardProjects />
          </div>
        </section>
        <SectionDevis title="Pret a collaborer ?" />
      </div>
    </>
  );
}
