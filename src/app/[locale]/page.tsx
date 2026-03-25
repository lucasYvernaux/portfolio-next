import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { createMetadata } from "@/src/lib/seo/metadata";
import { type Locale } from "@/src/i18n/locale";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/src/lib/seo/json-ld";
import SectionDevis from "@/src/components/section-devis";
import { env } from "process";
import { ArrowRight } from "lucide-react";
import { Link } from "@/src/i18n/navigation";

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
    title: t("home.title"),
    description: t("home.description"),
    path: "/",
  });
}

/* ── Page ── */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return null;

  setRequestLocale(locale);

  const t = await getTranslations("Home");
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

      <div className="relative">
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background hex-pattern">
          {/* over Background (gradient) */}
          <div className="absolute inset-0 bg-linear-to-b from-background via-transparent  to-zinc-900 "></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          {/* Content */}
          <section className="relative max-w-7xl size-full text-foreground px-6 md:px-12 py-32">
            <div className="content flex flex-col items-center justify-center lg:flex-row gap-16">
              <div className="flex-1">
                <p className="text-primary font-mono text-sm tracking-wider mb-4">
                  Bonjour, je suis
                </p>
                <h1
                  className="font-heading text-5xl md:text-7xl font-bold text-gray-100 mb-4"
                  data-testid="hero-name"
                >
                  Lucas Yvernaux
                </h1>
                <h2
                  className="font-heading text-2xl md:text-3xl text-primary mb-6"
                  data-testid="hero-title"
                >
                  Développeur Web Full-Stack
                </h2>
                <div className="space-y-2 mb-8">
                  <p
                    className="text-xl md:text-2xl text-gray-100 font-heading"
                    data-testid="hero-tagline"
                  >
                    Excellence Digitale Architecturée.
                  </p>
                  <p className="text-lg md:text-xl text-gray-400">
                    Ingéniosité Humaine, Efficacité IA.
                  </p>
                </div>
                <p
                  className="text-gray-400 text-lg leading-relaxed max-w-lg mb-10"
                  data-testid="hero-description"
                >
                  Je construis des sites web robustes, sécurisés et scalables.
                  L&apos;IA m&apos;assiste, mais c&apos;est mon expertise qui
                  façonne chaque ligne de code.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    className="group inline-flex items-center gap-2 bg-primary text-background font-heading font-bold tracking-wider uppercase px-8 py-4 hover:bg-primary/80 transition-all duration-300 "
                    data-testid="hero-cta"
                    href="/contact"
                    data-discover="true"
                  >
                    Démarrer un projet
                    <ArrowRight
                      size={20}
                      className="transition-all duration-300 group-hover:translate-x-2"
                    />
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 border border-primary text-primary font-heading font-bold tracking-wider uppercase px-8 py-4 hover:bg-primary/10 transition-all duration-300"
                    data-testid="hero-secondary-cta"
                    href="/projects"
                    data-discover="true"
                  >
                    Réalisations
                  </Link>
                </div>
              </div>
              <div
                className="hidden lg:block relative flex-1"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 border border-primary rotate-45" />
                  <div className="absolute inset-4 border border-primary" />
                  <div className="absolute inset-8 bg-surface/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <span className="font-heading text-8xl text-primary">
                        LY
                      </span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary" />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">test</div>
          </section>
        </div>
        <section className="relative py-24 bg-zinc-900 h-60 text-white border">
          <h1>LUCAS : {env.BASE_URL}</h1>
        </section>
        <SectionDevis
          title="Parlons de votre projet"
          paragraph="Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. Un appel de 30 minutes peut suffire pour clarifier votre besoin et vous proposer une approche."
        />
      </div>
    </>
  );
}
