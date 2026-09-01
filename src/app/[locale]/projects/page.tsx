import CardProjects from "@/components/feature/projects/card-project";
import SectionDevis from "@/components/shared/section-devis";
import SectionHero from "@/components/shared/section-hero";
import { type Locale } from "@/i18n/locale";
import { routing } from "@/i18n/routing";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/lib/seo/json-ld";
import { NatureProject, Project } from "@/types/global";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import urlImageEquilys from "@/../public/screenshot/ScreenEquilys-v2.png";
import urlImageLAK from "@/../public/screenshot/ScreenLAC.png";
import urlImageOyster from "@/../public/screenshot/ScreenOyster.png";
import urlImageSergio from "@/../public/screenshot/ScreenLeconte_multiservices.png";
import urlImageDene from "@/../public/screenshot/Screen-dene.png";
import urlImageManga from "@/../public/screenshot/Screen-manga-v2.png";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return null;

  setRequestLocale(locale);

  const t = await getTranslations("Projects");
  const tCommon = await getTranslations("Common");

  const projectEquilys: Project = {
    id: "project_equilys",
    title: "Equilys",
    type: t("type.website"),
    nature: NatureProject.PRO,
    description: t("Equilys.description"),
    year: 2024,
    stack: ["React", "CSS", "JavaScript", "EmailJS", "Bootstrap"],
    urlImageCover: urlImageEquilys,
    urlProject: "https://equilys.yvernaux.ynh.fr/",
    urlRepo: "https://gitlab.com/lucas.yvernaux/equilys-front-react",
  };

  const projectKalmia: Project = {
    id: "project_kalmia",
    title: "Kalmia",
    type: t("type.website"),
    nature: NatureProject.ETUDE,
    description: t.rich("Kalmia.description", {
      kalmialink: (chunks) => (
        <a
          href="https://www.vanaprincipia.fr/"
          className="underline underline-offset-4"
        >
          {chunks}
        </a>
      ),
    }),
    year: 2023,
    stack: ["Laravel", "CSS", "JavaScript"],
    urlProject: "https://kalmia.yvernaux.ynh.fr/",
    urlRepo: "https://gitlab.com/lucas.yvernaux/projet-kalmia-dev",
  };

  const projectMultimedia: Project = {
    id: "project_multimedia",
    title: "Multiflix",
    type: t("type.website"),
    nature: NatureProject.PERSO,
    description: t("Multiflix.description"),
    year: 2023,
    stack: ["Laravel", "CSS", "JavaScript", "EmailJS", "Bootstrap"],
    urlProject: "https://catalogue.yvernaux.ynh.fr/register",
    urlRepo: "https://gitlab.com/lucas.yvernaux/catalogue",
  };

  const projectLak: Project = {
    id: "project_LAK",
    title: "LAK",
    type: t("type.ecom"),
    nature: NatureProject.ETUDE,
    description: t("LAK.description"),
    year: 2024,
    stack: ["Laravel", "CSS", "JavaScript"],
    urlImageCover: urlImageLAK,
    urlProject: "https://lac.yvernaux.ynh.fr/",
    urlRepo: "https://gitlab.com/lucas.yvernaux/projet-lac",
  };

  const projectManga: Project = {
    id: "project_Manga",
    title: "Manga Collection",
    type: t("type.webapp"),
    nature: NatureProject.PERSO,
    description: t.rich("Manga_Collection.description", {
      linkmal: (chunks) => (
        <a
          href="https://myanimelist.net/"
          className="underline underline-offset-4"
        >
          {chunks}
        </a>
      ),
    }),
    year: 2023,
    stack: ["Laravel", "CSS", "JavaScript"],
    urlProject: "https://manga-collec.yvernaux.ynh.fr/",
    urlRepo: "https://gitlab.com/lucas.yvernaux/manga-collec",
    urlImageCover: urlImageManga,
  };

  const projectSame: Project = {
    id: "project_same",
    title: "Same",
    type: t("type.webapp"),
    nature: NatureProject.ETUDE,
    description: "description à venir",
    year: 2022,
    stack: ["Laravel", "CSS", "JavaScript"],
    //urlProject: "https://equilys.yvernaux.ynh.fr/",
    //urlRepo: "https://gitlab.com/lucas.yvernaux/projet-same",
  };

  const projectSergio: Project = {
    id: "project_leconte",
    title: "leconte multiservices",
    type: t("type.website"),
    nature: NatureProject.PRO,
    description: t("Leconte_Multiservices.description"),
    year: 2025,
    stack: ["NextJS", "CSS", "TypeScript"],
    urlImageCover: urlImageSergio,
    urlProject:
      "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris",
    urlRepo: "https://github.com/lucasYvernaux/nextjs-leconte-multiservices",
  };
  const projectPoissonnerie: Project = {
    id: "project_poissonnerie",
    title: "oyster vernon",
    type: t("type.website"),
    nature: NatureProject.PRO,
    description: t("Oyster.description"),
    year: 2025,
    stack: ["NextJS", "Tailwind CSS", "TypeScript"],
    urlImageCover: urlImageOyster,
    urlProject: "https://poissonneriestmarcel.fr/",
    urlRepo: "https://github.com/lucasYvernaux/oysterbb",
  };
  const projectSacy: Project = {
    id: "project_cyberlove",
    title: "SaCy",
    nature: NatureProject.PRO,
    type: t("type.webapp"),
    description: t("SaCy.description"),
    year: 2026,
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Python",
      "IA",
      "Azure",
    ],
    urlProject: "https://sacy-frontend.azurewebsites.net/",
    urlRepo: "https://github.com/Safe-Cyberspace/Cyberlove",
    comingSoon: true,
  };

  const projectDene: Project = {
    id: "project_dene",
    title: "Salon Déné",
    type: t("type.website"),
    nature: NatureProject.PRO,
    description: t("Dene.description"),
    year: 2025,
    stack: ["NextJS", "Tailwind CSS", "TypeScript", "Resend"],
    urlImageCover: urlImageDene,
    urlProject: "https://salon-dene.com/",
    urlRepo: "https://github.com/lucasYvernaux/site-dene",
  };

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
          { name: t("breadcrumb"), path: "/projects" },
        ]}
      />

      <div className="pt-23 min-h-screen">
        <SectionHero
          path={t("breadcrumb")}
          title={t("title")}
          intro={t("subtitle")}
        />
        <section className="min-h-screen max-w-7xl mx-auto mb-8">
          <div className="relative">
            {/* <div className="absolute inset-0 z-50  bg-background/80 backdrop-blur-xs flex items-start justify-center">
              <h3 className="font-serif font-bold top-25 tracking-widest relative mb-6 text-primary text-4xl md:text-6xl capitalize rotate-45 z-50">
                {tCommon("message.coming")}
              </h3>
            </div> */}
            <div className="flex flex-col items-center justify-center gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              <CardProjects project={projectPoissonnerie} />
              <CardProjects project={projectSacy} />
              <CardProjects project={projectDene} />
              <CardProjects project={projectSergio} />
              <CardProjects project={projectEquilys} />
              <CardProjects project={projectManga} />
              <CardProjects project={projectMultimedia} />
              <CardProjects project={projectKalmia} />
              <CardProjects project={projectLak} />
              <CardProjects project={projectSame} />
            </div>
          </div>
        </section>
        <SectionDevis title="Pret a collaborer ?" />
      </div>
    </>
  );
}
