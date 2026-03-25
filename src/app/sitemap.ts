// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getPathname } from "@/src/i18n/navigation";
import { type Locale, routing } from "@/src/i18n/routing";
import { env } from "@/env";
// import { getProjects } from "@/lib/fetchers/projects";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

type StaticPathname = "/" | "/about" | "/projects" | "/pricing" | "/contact";

// type SitemapAlternates = NonNullable<
//   MetadataRoute.Sitemap[number]["alternates"]
// >;

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
  return `${env.BASE_URL}${pathname}`;
}

// function buildDynamicUrl(locale: Locale, slug: string): string {
//   const pathname = getPathname({
//     locale,
//     href: { pathname: "/projects/[slug]", params: { slug } },
//   });
//   return `${env.BASE_URL}${pathname}`;
// }

// function buildStaticAlternates(href: StaticPathname): SitemapAlternates {
//   return Object.fromEntries(
//     routing.locales.map((locale) => [locale, buildStaticUrl(locale, href)]),
//   );
// }

// function buildDynamicAlternates(slug: string): Record<string, string> {
//   return Object.fromEntries(
//     routing.locales.map((locale) => [locale, buildDynamicUrl(locale, slug)]),
//   );
// }

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
            buildStaticUrl(locale, route.href),
          ]),
        ),
      },
    })),
  );

  // let projectEntries: MetadataRoute.Sitemap = [];
  // try {
  //   const projects = await getProjects();
  //   projectEntries = projects.flatMap((project) =>
  //     routing.locales.map((locale) => ({
  //       url: buildDynamicUrl(locale, project.slug),
  //       lastModified: new Date(project.updatedAt),
  //       changeFrequency: "monthly" as ChangeFrequency,
  //       priority: 0.7,
  //       alternates: { languages: buildDynamicAlternates(project.slug) },
  //     }))
  //   );
  // } catch {
  //   console.warn("[sitemap] Impossible de récupérer les projets depuis le CMS");
  // }

  return [
    ...staticEntries,
    // ...projectEntries,
  ];
}
