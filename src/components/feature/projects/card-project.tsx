"use client";

import { NatureProject, Project } from "@/lib/types";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";
import urlImageProject from "@/../public/logo-white-gpt.png";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import Link from "next/link";

interface PropsCardProject {
  project?: Project;
}

const projectPlaceholder: Project = {
  id: "atelier_vernon",
  title: "Equilys",
  type: "site vitrine",
  nature: NatureProject.PRO,
  description:
    "Site vitrine pour un cabinet de conseil en santé et bien-être au travail. Design épuré, SEO optimisé, formulaire de contact.",
  year: 2023,
  stack: ["HTML", "CSS", "JavaScript"],
  urlImageCover: urlImageProject,
  urlProject: "https://lucas.yvernaux.ynh.fr",
  urlRepo: "https://github.com/lucasYvernaux/",
};

interface NatureConfig {
  style: string;
}

const NATURE_MAP: Record<Project["nature"], NatureConfig> = {
  pro: {
    style: "bg-blue-50 text-blue-700 border-blue-100",
  },
  perso: {
    style: "bg-purple-50 text-purple-700 border-purple-100",
  },
  étude: {
    style: "bg-amber-50 text-amber-700 border-amber-100",
  },
};

export default function CardProject({
  project = projectPlaceholder,
}: PropsCardProject) {
  const pathname = usePathname();

  const hostRepo = project.urlRepo
    ? new URL(project.urlRepo).hostname.split(".")[0].toLowerCase()
    : "";

  let LogoRepo;
  const nature = NATURE_MAP[project.nature];

  const tProject = useTranslations("Projects");
  const tCommon = useTranslations("Common");

  switch (hostRepo) {
    case "gitlab":
      LogoRepo = <GitBranch />;
      break;
    case "github":
      LogoRepo = <GitBranch />;
      break;
    default:
      LogoRepo = <GitBranch />;
      break;
  }

  const urlIllustration = project.urlImageCover
    ? project.urlImageCover
    : urlImageProject;

  return (
    <>
      <div
        className={`group flex flex-col bg-white ${project.comingSoon ? "opacity-60 pointer-events-none grayscale" : ""} rounded-xl overflow-hidden size-full bg-zinc-900 shadow-xl shadow-black/50 border border-zinc-800/50 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
      >
        {project.comingSoon && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900/30 backdrop-blur-[2px] rounded-2xl">
            <span className="bg-white/90 text-gray-800 font-bold text-sm px-4 py-2 rounded-full shadow-md uppercase tracking-wider">
              {tCommon("message.coming")}
            </span>
          </div>
        )}
        <div
          className="content-img relative overflow-hidden cursor-pointer h-48"
          title={tProject("alt_image", { name: project.title })}
        >
          <Image
            src={urlIllustration}
            alt={tProject("alt_image", { name: project.title })}
            fill
            className="absolute inset-0 z-30 bg-black bg-cover bg-center object-cover transition-transform duration-500 group-hover:scale-130"
          />
          {pathname.includes("/projects") && (
            <span className="absolute top-3 right-3 px-3 py-1 bg-zinc-800 text-primary text-xs font-semibold rounded-full tracking-wider z-30">
              {project.type}
            </span>
          )}

          <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center z-50 opacity-0 transform-none duration-500 group-hover:opacity-100 group-hover:transform-[translateY(20px)]">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <ArrowUpRight className="text-stone-900" />
            </div>
          </div>
        </div>
        <div className="p-5 flex justify-between flex-1 flex-col">
          <div className="content-text">
            <div className="title flex justify-between">
              <h3 className="capitalize font-bold text-zinc-100 text-2xl group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              {pathname.includes("/projects") && (
                <span
                  className={`px-3 py-1 h-fit flex justify-center items-center text-xs font-semibold rounded-full tracking-wider ${nature.style}`}
                >
                  {project.nature}
                </span>
              )}
            </div>
            {pathname.includes("/projects") && (
              <h4 className=" text-gray-500 text-sm font-medium italic my-2">
                {project.year}
              </h4>
            )}

            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.length > 0 &&
                project.stack.map((stack, index) => (
                  <span
                    key={`${index}-${stack}`}
                    className="px-3 py-1 bg-zinc-800 text-primary text-xs font-semibold rounded-full tracking-wider"
                  >
                    {stack}
                  </span>
                ))}
            </div>
          </div>
          <div className="content-footer">
            {/* <div className="flex gap-3">
              <a
                href={project.urlProject}
                target="_blank"
                rel="noreferrer"
                className={` ${project.urlProject ? "" : "opacity-50 cursor-not-allowed"} flex-1 inline-flex items-center justify-center gap-1.5 bg-linear-to-r from-orange-500 to-rose-600 text-white text-sm font-semibold py-2 rounded-lg hover:shadow-md transition-all`}
              >
                <ExternalLink size={20} />
                Voir le projet
              </a>
              <a
                href={project.urlRepo}
                target="_blank"
                rel="noreferrer"
                className={` ${project.urlProject ? "hover:border-orange-400 hover:text-orange-600" : "opacity-50 cursor-not-allowed"} inline-flex items-center justify-center gap-1.5 border border-gray-200 text-gray-700 text-sm font-semibold px-3 py-2 rounded-lg  transition-all`}
              >
                {LogoRepo}
              </a>
            </div> */}
            <div className="flex items-center gap-4 border-t border-zinc-800 pt-6">
              <Link
                href={
                  project.urlProject && project.urlProject.length > 1
                    ? project.urlProject
                    : "#"
                }
                target="_blank"
                className={`flex items-center gap-2 text-zinc-300 ${project.urlProject ? "hover:text-[#C5A866]" : ""} font-medium transition-colors`}
              >
                <ExternalLink
                  size={20}
                  className={`${project.urlProject ? "" : "opacity-50 cursor-not-allowed"}`}
                />
                <span
                  className={`${project.urlProject ? "" : "opacity-50 cursor-not-allowed"}`}
                >
                  Live Demo
                </span>
              </Link>
              <a
                href={project.urlRepo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors ml-auto"
              >
                {LogoRepo}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
