import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { createMetadata } from "@/src/lib/seo/metadata";
import { type Locale } from "@/src/i18n/locale";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/src/lib/seo/json-ld";

/* ── Metadata traduite ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return createMetadata({
    locale: locale as Locale,
    title: t("about.title"),
    description: t("about.description"),
    path: "/about",
  });
}

/* ── Page ── */
export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return null;

  setRequestLocale(locale);

  const t = await getTranslations("About");
  const tCommon = await getTranslations("Common");

  return (
    <>
      {/* Données structurées traduites */}
      <WebPageJsonLd
        locale={locale as Locale}
        title={t("title")}
        description={t("title")}
        path="/about"
      />
      <BreadcrumbJsonLd
        locale={locale as Locale}
        items={[
          { name: tCommon("nav.home"), path: "/" },
          { name: t("breadcrumb"), path: "/about" },
        ]}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 flex flex-col items-center justify-center min-h-screen">
        <h1 className="mb-6 text-4xl font-bold text-foreground">
          {t("title")}
        </h1>
        {/* Pluralisation */}
        <p className="mt-8 text-sm text-foreground-muted">
          {t("team.members", { count: 12 })}
          {/* → "12 membres" (fr) / "12 members" (en) */}
        </p>
      </main>
    </>
  );
}
