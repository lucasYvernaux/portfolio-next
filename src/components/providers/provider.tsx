import { Locale, LOCALES } from "@/i18n/locale";
import { ThemeProvider } from "./theme-provider";
import { TranslationProvider } from "./translation-providers";
import { Metadata } from "next";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/seo/constants";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  return {
    ...createMetadata({
      locale: locale as Locale,
      title: t("site.title"),
      description: t("site.description"),
      path: "/",
    }),
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
  };
}

export async function Provider({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params!;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <TranslationProvider params={params!}>
          <ThemeProvider>{children}</ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
