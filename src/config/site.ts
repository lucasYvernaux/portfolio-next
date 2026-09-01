import { NavItems } from "@/types/global";

//for multilanguage
// id correspond to id messages.json
export const allNavItems: NavItems[] = [
  { path: "/", id: "home" },
  { path: "/about", id: "about" },
  { path: "/projects", id: "projects" },
  { path: "/pricing", id: "pricing" },
  { path: "/contact", id: "contact" },
];

export const siteConfig = {
  firstName: "Lucas",
  laststName: "Yvernaux",
  FullName: "Lucas Yvernaux",
  companyName: "Yvernaux Web Solutions",
  companyAbrv: "YWS",
  companySiret: "931 391 478 00019",
  companySiren: "931 391 478",
  companyAddress: "22 RUE DE L'EGLISE 78270 BENNECOURT",
  companyStatut: "Entrepreneur Individuel",
  email: "lucas.yvernaux@gmail.com",
  phone: "+33651076091",
  telephone: "06 51 07 60 91",
  social: {
    github: "https://github.com/lucasYvernaux",
    linkedin: "https://www.linkedin.com/in/lucas-yvernaux/",
    gitlab: "https://gitlab.com/users/lucas.yvernaux/projects",
  },
};
