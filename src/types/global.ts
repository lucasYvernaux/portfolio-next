import { StaticImageData } from "next/image";
import { Pathname } from "../i18n/routing";
import { ReactNode } from "react";

export type StaticPathname = Exclude<Pathname, `/project/[slug]`>;

export interface NavItems {
  path: StaticPathname;
  id: string;
  label?: string;
}

export enum NatureProject {
  PRO = "pro",
  PERSO = "perso",
  ETUDE = "étude",
}

// const STACKS = [
//   "NextJS",
//   "React",
//   "ReactJS",
//   "Laravel",
//   "Python",
//   "JavaScript",
//   "TypeScript",
//   "Bootstrap",
//   "Tailwind CSS",
//   "Material UI",
//   "Shadcn",
//   "HTML",
//   "CSS",
//   "EmailJS",
//   "Resend",
//   "Docker",
//   "Vercel",
//   "Azure",
//   "MySQL",
//   "PostgreSQL",
//   "Unity",
//   "Godot",
//   "Java",
//   "C",
//   "C#",
//   "C++",
//   "Rust",
//   "VBA",
//   "LUA",
//   "Git",
//   "IA",
//   "Shell",
// ] as const;

// type Stack = (typeof STACKS)[number];

type Stack =
  | "NextJS"
  | "React"
  | "ReactJS"
  | "Laravel"
  | "Python"
  | "JavaScript"
  | "TypeScript"
  | "Bootstrap"
  | "Tailwind CSS"
  | "Material UI"
  | "Shadcn"
  | "HTML"
  | "CSS"
  | "EmailJS"
  | "Resend"
  | "Docker"
  | "Vercel"
  | "Azure"
  | "MySQL"
  | "PostgreSQL"
  | "Unity"
  | "Godot"
  | "Java"
  | "C"
  | "C#"
  | "C++"
  | "Rust"
  | "VBA"
  | "LUA"
  | "Git"
  | "IA"
  | "Shell";

export type Project = {
  id: string;
  title: string;
  description: string | ReactNode;
  type: string;
  nature: NatureProject;
  year: number;
  stack: Stack[];
  urlImageCover?: StaticImageData;
  urlProject?: string;
  urlRepo?: string;
  comingSoon?: boolean;
};

export type PackCustom = {
  id: string;
  title: string;
  subtitle?: string;
  price: string;
  isPopular?: boolean;
  features: string[];
};

export type PricingTab = "packs" | "services";

export type ServiceCustom = {
  id: string;
  name: string;
  description?: string;
  price: string;
};

export type PackKey =
  | "refonte"
  | "vitrine"
  | "ecommerce"
  | "surMesure"
  | "maintenance";
