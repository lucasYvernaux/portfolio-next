import CardProjects from "@/src/components/feature/projects/card-project";
import SectionDevis from "@/src/components/shared/section-devis";
import SectionHero from "@/src/components/shared/section-hero";
import { type Locale } from "@/src/i18n/locale";
import { routing } from "@/src/i18n/routing";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/src/lib/seo/json-ld";
import { Project } from "@/src/lib/types";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import urlImageProject from "@/public/logo-white-gpt.png";

const projectEquilys: Project = {
  id: "project_equilys",
  title: "Equilys",
  type: "website",
  description: "description à venir",
  year: 2024,
  stack: ["React", "CSS", "JavaScript", "EmailJS", "Bootstrap"],
  urlImageCover: urlImageProject,
  urlProject: "https://equilys.yvernaux.ynh.fr/",
  urlRepo: "https://gitlab.com/lucas.yvernaux/equilys-front-react",
};

const projectKalmia: Project = {
  id: "project_kalmia",
  title: "Kalmia",
  type: "website",
  description: "description à venir",
  year: 2023,
  stack: ["Laravel", "CSS", "JavaScript"],
  urlImageCover: urlImageProject,
  urlProject: "https://kalmia.yvernaux.ynh.fr/",
  urlRepo: "https://gitlab.com/lucas.yvernaux/projet-kalmia-dev",
};

const projectMultimedia: Project = {
  id: "project_multimedia",
  title: "Multiflix",
  type: "perso",
  description: "description à venir",
  year: 2023,
  stack: ["Laravel", "CSS", "JavaScript", "EmailJS", "Bootstrap"],
  urlImageCover: urlImageProject,
  urlProject: "https://catalogue.yvernaux.ynh.fr/register",
  urlRepo: "https://gitlab.com/lucas.yvernaux/catalogue",
};

const projectLak: Project = {
  id: "project_LAK",
  title: "LAK",
  type: "e-com",
  description: "description à venir",
  year: 2024,
  stack: ["Laravel", "CSS", "JavaScript"],
  urlImageCover: urlImageProject,
  urlProject: "https://lac.yvernaux.ynh.fr/",
  urlRepo: "https://gitlab.com/lucas.yvernaux/projet-lac",
};

const projectManga: Project = {
  id: "project_Manga",
  title: "Manga Collection",
  type: "perso",
  description: "description à venir",
  year: 2023,
  stack: ["Laravel", "CSS", "JavaScript"],
  urlImageCover: urlImageProject,
  urlProject: "https://manga-collec.yvernaux.ynh.fr/",
  urlRepo: "https://gitlab.com/lucas.yvernaux/manga-collec",
};

const projectSame: Project = {
  id: "project_same",
  title: "Same",
  type: "appli",
  description: "description à venir",
  year: 2022,
  stack: ["Laravel", "CSS", "JavaScript"],
  urlImageCover: urlImageProject,
  //urlProject: "https://equilys.yvernaux.ynh.fr/",
  //urlRepo: "https://gitlab.com/lucas.yvernaux/projet-same",
};

const projectSergio: Project = {
  id: "project_leconte",
  title: "leconte multiservices",
  type: "website",
  description: "description à venir",
  year: 2025,
  stack: ["nextJS", "CSS", "TypeScript"],
  urlImageCover: urlImageProject,
  urlProject:
    "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris",
  urlRepo: "https://github.com/lucasYvernaux/nextjs-leconte-multiservices",
};
const projectPoissonnerie: Project = {
  id: "project_poissonnerie",
  title: "oyster vernon",
  type: "website",
  description: "description à venir",
  year: 2025,
  stack: ["NextJS", "CSS", "TypeScript"],
  urlImageCover: urlImageProject,
  urlProject: "https://poissonneriestmarcel.fr/",
  //urlRepo: "https://gitlab.com/lucas.yvernaux/projet-same",
};
const projectSacy: Project = {
  id: "project_cyberlove",
  title: "SaCy",
  type: "web app",
  description: "description à venir",
  year: 2026,
  stack: ["NextJS", "CSS", "TypeScript", "python", "ia"],
  urlImageCover: urlImageProject,
  urlProject: "https://https://poissonneriestmarcel.fr/",
  //urlRepo: "https://gitlab.com/lucas.yvernaux/projet-same",
};

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
        <section className="min-h-screen max-w-4xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-0 z-50  bg-background/80 backdrop-blur-xs flex items-start justify-center">
              <h3 className="font-serif font-bold top-25 tracking-widest relative mb-6 text-primary text-4xl md:text-6xl capitalize rotate-45 z-50">
                {tCommon("message.coming")}
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pointer-events-none select-none">
              <CardProjects project={projectPoissonnerie} />
              <CardProjects project={projectSacy} />
              <CardProjects project={projectEquilys} />
              <CardProjects project={projectKalmia} />
              <CardProjects project={projectSergio} />
              <CardProjects project={projectLak} />
              <CardProjects project={projectManga} />
              <CardProjects project={projectMultimedia} />
              <CardProjects project={projectSame} />
            </div>
          </div>
        </section>
        <SectionDevis title="Pret a collaborer ?" />
      </div>
    </>
  );
}
