import { Project } from "@/src/lib/types";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import urlImageProject from "@/public/logo-white-gpt.png";

interface PropsCardProject {
  project?: Project;
}

const projectPlaceholder: Project = {
  id: "atelier_vernon",
  title: "Equilys",
  description:
    "Site vitrine pour un cabinet de conseil en santé et bien-être au travail. Design épuré, SEO optimisé, formulaire de contact.",
  year: 2023,
  city: "vernon",
  area: 180,
  urlImageCover: urlImageProject,
};
export default function CardProject({
  project = projectPlaceholder,
}: PropsCardProject) {
  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="relative overflow-hidden cursor-pointer h-48">
          <Image
            src={project.urlImageCover}
            alt="Equilys"
            fill
            className="absolute inset-0 bg-black bg-cover bg-center transition-transform duration-500 group-hover:scale-130"
          />
          <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-100">
            Site vitrine
          </span>
          <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center z-50 opacity-0 transform-none duration-500 group-hover:opacity-100 group-hover:transform-[translateY(20px)]">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <ArrowUpRight className="text-stone-900" />
            </div>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-gray-900 text-lg mb-2">Equilys</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            <span className="bg-gray-50 border border-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded">
              HTML
            </span>
            <span className="bg-gray-50 border border-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded">
              CSS
            </span>
            <span className="bg-gray-50 border border-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded">
              JavaScript
            </span>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-orange-500 to-rose-600 text-white text-sm font-semibold py-2 rounded-lg hover:shadow-md transition-all"
            >
              <ExternalLink size={20} />
              Voir le projet
            </a>
            <a
              href="https://github.com/lucasYvernaux"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 border border-gray-200 text-gray-700 text-sm font-semibold px-3 py-2 rounded-lg hover:border-orange-400 hover:text-orange-600 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github w-3.5 h-3.5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
