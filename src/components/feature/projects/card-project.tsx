import { Project } from "@/src/lib/types";
import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
  Github,
  Gitlab,
} from "lucide-react";
import Image from "next/image";
import urlImageProject from "@/public/logo-white-gpt.png";

interface PropsCardProject {
  project?: Project;
}

const projectPlaceholder: Project = {
  id: "atelier_vernon",
  title: "Equilys",
  type: "site vitrine",
  description:
    "Site vitrine pour un cabinet de conseil en santé et bien-être au travail. Design épuré, SEO optimisé, formulaire de contact.",
  year: 2023,
  stack: ["HTML", "CSS", "JavaScript"],
  urlImageCover: urlImageProject,
  urlProject: "https://lucas.yvernaux.ynh.fr",
  urlRepo: "https://github.com/lucasYvernaux/",
};
export default function CardProject({
  project = projectPlaceholder,
}: PropsCardProject) {
  const hostRepo = project.urlRepo
    ? new URL(project.urlRepo).hostname.split(".")[0].toLowerCase()
    : "";

  let LogoRepo;

  switch (hostRepo) {
    case "gitlab":
      LogoRepo = <Gitlab />;
      break;
    case "github":
      LogoRepo = <Github />;
      break;
    default:
      LogoRepo = <GitBranch />;
      break;
  }

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden border size-full border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="relative overflow-hidden cursor-pointer h-48">
          <Image
            src={project.urlImageCover}
            alt={`illustration du projet ${project.title}`}
            fill
            className="absolute inset-0 bg-black bg-cover bg-center object-cover transition-transform duration-500 group-hover:scale-130"
          />
          <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-100">
            {project.type}
          </span>
          <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center z-50 opacity-0 transform-none duration-500 group-hover:opacity-100 group-hover:transform-[translateY(20px)]">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <ArrowUpRight className="text-stone-900" />
            </div>
          </div>
        </div>
        <div className="p-5">
          <h3 className="capitalize font-bold text-gray-900 text-lg">
            {project.title}
          </h3>
          <h4 className=" text-gray-500 text-sm font-semibold mb-2">
            {project.year}
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.length > 0 &&
              project.stack.map((stack, index) => (
                <span
                  key={`${index}-${stack}`}
                  className="bg-gray-50 border border-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded"
                >
                  {stack}
                </span>
              ))}
          </div>
          <div className="flex gap-3">
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
          </div>
        </div>
      </div>
    </>
  );
}
