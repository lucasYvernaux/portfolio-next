import { ChevronRight } from "lucide-react";
import CardProject from "../projects/card-project";
import { getTranslations } from "next-intl/server";
import { NatureProject, Project } from "@/types/global";

import urlImageOyster from "@/../public/screenshot/ScreenOyster.png";
import urlImageDene from "@/../public/screenshot/Screen-dene.png";
import Button from "@/components/ui/button";

export async function HomeProject() {
  const tCommon = await getTranslations("Common");
  const tProjects = await getTranslations("Projects");

  const projectPoissonnerie: Project = {
    id: "project_poissonnerie",
    title: "oyster vernon",
    type: tProjects("type.website"),
    nature: NatureProject.PRO,
    description: tProjects("Oyster.description"),
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
    type: tProjects("type.webapp"),
    description: tProjects("SaCy.description"),
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
    type: tProjects("type.website"),
    nature: NatureProject.PRO,
    description: tProjects("Dene.description"),
    year: 2025,
    stack: ["NextJS", "Tailwind CSS", "TypeScript", "Resend"],
    urlImageCover: urlImageDene,
    urlProject: "https://salon-dene.com/",
    urlRepo: "https://github.com/lucasYvernaux/site-dene",
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-custom">
      <div className="container mx-auto px-6 max-w-6xl">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="flex flex-col gap-16 items-center">
            <div className="content-text text-center">
              <h2 className="text-4xl font-bold text-zinc-100 mb-6">
                Mes Réalisations
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Découvrez quelques-uns de mes projets récents, alliant design
                élégant et performances optimales.
              </p>
            </div>
            <div className="content-project">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CardProject project={projectPoissonnerie} />
                <CardProject project={projectSacy} />
                <CardProject project={projectDene} />
              </div>
            </div>
          </div>
          <div id="arrow-down" className="w-fit mt-30 gap-2 mx-auto">
            <Button
              variant="ghost"
              href={"/projects"}
              className="uppercase"
              style={{ letterSpacing: "var(--tracking-widest)" }}
              endIcon={<ChevronRight color="var(--color-primary)" />}
            >
              {tCommon("actions.SeeAll")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
