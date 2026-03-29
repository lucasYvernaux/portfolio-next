import { StaticImageData } from "next/image";
import { Pathname } from "../i18n/routing";

export type StaticPathname = Exclude<Pathname, `/project/[slug]`>;

export interface NavItems {
  path: StaticPathname;
  id: string;
}

export type Project = {
  id: string;
  title: string;
  description: string;
  year: number;
  city: string;
  area: number;
  urlImageCover: StaticImageData;
};
