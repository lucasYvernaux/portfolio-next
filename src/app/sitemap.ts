// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";
import { serverEnv } from "@/env/server";
// import { getProjects } from "@/lib/fetchers/projects";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

type StaticPathname = "/" | "/about" | "/projects" | "/pricing" | "/contact";

interface StaticRouteConfig {
  href: StaticPathname;
  priority: number;
  changeFrequency: ChangeFrequency;
}

const STATIC_ROUTES: StaticRouteConfig[] = [
  { href: "/", priority: 1.0, changeFrequency: "monthly" },
  { href: "/about", priority: 0.8, changeFrequency: "yearly" },
  { href: "/projects", priority: 0.9, changeFrequency: "weekly" },
  { href: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { href: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

function buildStaticUrl(locale: Locale, href: StaticPathname): string {
  const pathname = getPathname({ locale, href });
  return `${serverEnv.BASE_URL}${pathname}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: buildStaticUrl(locale, route.href),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((altLocale) => [
            altLocale,
            buildStaticUrl(altLocale, route.href),
          ]),
        ),
      },
    })),
  );

  return [
    ...staticEntries,
    // ...projectEntries,
  ];
}
