import { Pathname } from "../i18n/routing";

export type StaticPathname = Exclude<Pathname, `/project/[slug]`>;

export interface NavItems {
  path: StaticPathname;
  id: string;
}
