import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/src/components/shared/header";
import { Footer } from "@/src/components/shared/footer";

import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import SwitchTheme from "@/src/components/shared/toggle-dark-mode";
import { ThemeProvider } from "@/src/components/providers/theme-provider";
import { type Locale, LOCALES } from "@/src/i18n/locale";
import { createMetadata } from "@/src/lib/seo/metadata";
import { SITE_NAME } from "@/src/lib/seo/constants";

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

export default async function LocalLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(LOCALES, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  //charge tous les messages

  const messages = await getMessages();

  //charge un message specific
  // const clientMessages = {
  //   Common: (messages as Record<string, unknown>).Common,
  // };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <Header />
            <main className="bg-background text-foreground">{children}</main>
            <div className="fixed bottom-4 right-4 z-50">
              <SwitchTheme />
            </div>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
