import { NavItems } from "../lib/types";

// id correspond to id messages.json
//for multilanguage
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
  email: "lucas.yvernaux@gmail.com",
  phone: "+33651076091",
  telephone: "06 51 07 60 91",
  social: {
    github: "https://github.com/lucasYvernaux",
    linkedin: "https://www.linkedin.com/in/lucas-yvernaux/",
    gitlab: "https://gitlab.com/users/lucas.yvernaux/projects",
  },
};
