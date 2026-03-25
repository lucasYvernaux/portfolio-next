import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { createMetadata } from "@/src/lib/seo/metadata";
import { type Locale } from "@/src/i18n/locale";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/src/lib/seo/json-ld";
import SectionDevis from "@/src/components/shared/section-devis";
import { ArrowRight } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";

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
        path="/"
      />
      <BreadcrumbJsonLd
        locale={locale as Locale}
        items={[{ name: tCommon("nav.home"), path: "/" }]}
      />

      <div className="relative">
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background hex-pattern">
          {/* over Background (gradient) */}
          <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-transparent  to-background "></div>
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
                      <Image
                        src={"/logo-white-gpt.png"}
                        alt="logo de Yvernaux Web Solutions"
                        fill
                        className="size-full"
                      />
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
        <section
          className="py-24 bg-background relative"
          data-testid="features-section"
          x-file-name="Home"
          x-line-number={114}
          x-column={6}
          x-component="section"
          x-id="Home_114_6"
          x-dynamic="false"
        >
          <div
            className="max-w-7xl mx-auto px-6 md:px-12"
            x-file-name="Home"
            x-line-number={115}
            x-column={8}
            x-component="div"
            x-id="Home_115_8"
            x-dynamic="false"
          >
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              x-file-name="Home"
              x-line-number={116}
              x-column={10}
              x-component="div"
              x-id="Home_116_10"
              x-dynamic="true"
              x-source-type="computed"
              x-source-editable="false"
            >
              <div
                className="p-6 bg-surface border border-surface-border hover:border-primary/50 transition-all duration-300 group card-hover"
                data-testid="feature-clean code"
                x-file-name="Home"
                x-line-number={118}
                x-column={14}
                x-component="div"
                x-id="Home_118_14"
                x-dynamic="false"
                style={{ opacity: 1, transform: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code-xml w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                  x-file-name="Home"
                  x-line-number={127}
                  x-column={16}
                  x-component="icon"
                  x-id="Home_127_16"
                  x-dynamic="false"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
                <h3
                  className="font-heading text-lg text-gray-100 mb-2"
                  x-file-name="Home"
                  x-line-number={128}
                  x-column={16}
                  x-component="h3"
                  x-id="Home_128_16"
                  x-dynamic="true"
                  x-source-type="static-imported"
                  x-source-var="features"
                  x-source-file-abs="/app/frontend/src/pages/Home.jsx"
                  x-source-line={10}
                  x-source-path="title"
                  x-source-editable="true"
                  x-array-var="features"
                  x-array-line={10}
                  x-array-item-param="feature"
                >
                  Clean Code
                </h3>
                <p
                  className="text-gray-500 text-sm"
                  x-file-name="Home"
                  x-line-number={129}
                  x-column={16}
                  x-component="p"
                  x-id="Home_129_16"
                  x-dynamic="true"
                  x-source-type="static-imported"
                  x-source-var="features"
                  x-source-file-abs="/app/frontend/src/pages/Home.jsx"
                  x-source-line={10}
                  x-source-path="desc"
                  x-source-editable="true"
                  x-array-var="features"
                  x-array-line={10}
                  x-array-item-param="feature"
                >
                  Code propre et maintenable
                </p>
              </div>
              <div
                className="p-6 bg-surface border border-surface-border hover:border-primary/50 transition-all duration-300 group card-hover"
                data-testid="feature-scalable"
                x-file-name="Home"
                x-line-number={118}
                x-column={14}
                x-component="div"
                x-id="Home_118_14"
                x-dynamic="false"
                style={{ opacity: 1, transform: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-server w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                  x-file-name="Home"
                  x-line-number={127}
                  x-column={16}
                  x-component="icon"
                  x-id="Home_127_16"
                  x-dynamic="false"
                >
                  <rect width={20} height={8} x={2} y={2} rx={2} ry={2} />
                  <rect width={20} height={8} x={2} y={14} rx={2} ry={2} />
                  <line x1={6} x2="6.01" y1={6} y2={6} />
                  <line x1={6} x2="6.01" y1={18} y2={18} />
                </svg>
                <h3
                  className="font-heading text-lg text-gray-100 mb-2"
                  x-file-name="Home"
                  x-line-number={128}
                  x-column={16}
                  x-component="h3"
                  x-id="Home_128_16"
                  x-dynamic="true"
                  x-source-type="static-imported"
                  x-source-var="features"
                  x-source-file-abs="/app/frontend/src/pages/Home.jsx"
                  x-source-line={10}
                  x-source-path="title"
                  x-source-editable="true"
                  x-array-var="features"
                  x-array-line={10}
                  x-array-item-param="feature"
                >
                  Scalable
                </h3>
                <p
                  className="text-gray-500 text-sm"
                  x-file-name="Home"
                  x-line-number={129}
                  x-column={16}
                  x-component="p"
                  x-id="Home_129_16"
                  x-dynamic="true"
                  x-source-type="static-imported"
                  x-source-var="features"
                  x-source-file-abs="/app/frontend/src/pages/Home.jsx"
                  x-source-line={10}
                  x-source-path="desc"
                  x-source-editable="true"
                  x-array-var="features"
                  x-array-line={10}
                  x-array-item-param="feature"
                >
                  Architecture évolutive
                </p>
              </div>
              <div
                className="p-6 bg-surface border border-surface-border hover:border-primary/50 transition-all duration-300 group card-hover"
                data-testid="feature-sécurisé"
                x-file-name="Home"
                x-line-number={118}
                x-column={14}
                x-component="div"
                x-id="Home_118_14"
                x-dynamic="false"
                style={{ opacity: 1, transform: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield-check w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                  x-file-name="Home"
                  x-line-number={127}
                  x-column={16}
                  x-component="icon"
                  x-id="Home_127_16"
                  x-dynamic="false"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3
                  className="font-heading text-lg text-gray-100 mb-2"
                  x-file-name="Home"
                  x-line-number={128}
                  x-column={16}
                  x-component="h3"
                  x-id="Home_128_16"
                  x-dynamic="true"
                  x-source-type="static-imported"
                  x-source-var="features"
                  x-source-file-abs="/app/frontend/src/pages/Home.jsx"
                  x-source-line={10}
                  x-source-path="title"
                  x-source-editable="true"
                  x-array-var="features"
                  x-array-line={10}
                  x-array-item-param="feature"
                >
                  Sécurisé
                </h3>
                <p
                  className="text-gray-500 text-sm"
                  x-file-name="Home"
                  x-line-number={129}
                  x-column={16}
                  x-component="p"
                  x-id="Home_129_16"
                  x-dynamic="true"
                  x-source-type="static-imported"
                  x-source-var="features"
                  x-source-file-abs="/app/frontend/src/pages/Home.jsx"
                  x-source-line={10}
                  x-source-path="desc"
                  x-source-editable="true"
                  x-array-var="features"
                  x-array-line={10}
                  x-array-item-param="feature"
                >
                  Bonnes pratiques sécurité
                </p>
              </div>
              <div
                className="p-6 bg-surface border border-surface-border hover:border-primary/50 transition-all duration-300 group card-hover"
                data-testid="feature-performant"
                x-file-name="Home"
                x-line-number={118}
                x-column={14}
                x-component="div"
                x-id="Home_118_14"
                x-dynamic="false"
                style={{ opacity: 1, transform: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                  x-file-name="Home"
                  x-line-number={127}
                  x-column={16}
                  x-component="icon"
                  x-id="Home_127_16"
                  x-dynamic="false"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
                <h3
                  className="font-heading text-lg text-gray-100 mb-2"
                  x-file-name="Home"
                  x-line-number={128}
                  x-column={16}
                  x-component="h3"
                  x-id="Home_128_16"
                  x-dynamic="true"
                  x-source-type="static-imported"
                  x-source-var="features"
                  x-source-file-abs="/app/frontend/src/pages/Home.jsx"
                  x-source-line={10}
                  x-source-path="title"
                  x-source-editable="true"
                  x-array-var="features"
                  x-array-line={10}
                  x-array-item-param="feature"
                >
                  Performant
                </h3>
                <p
                  className="text-gray-500 text-sm"
                  x-file-name="Home"
                  x-line-number={129}
                  x-column={16}
                  x-component="p"
                  x-id="Home_129_16"
                  x-dynamic="true"
                  x-source-type="static-imported"
                  x-source-var="features"
                  x-source-file-abs="/app/frontend/src/pages/Home.jsx"
                  x-source-line={10}
                  x-source-path="desc"
                  x-source-editable="true"
                  x-array-var="features"
                  x-array-line={10}
                  x-array-item-param="feature"
                >
                  Optimisé pour la vitesse
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDevis
          title={tCommon("components.sectionDevis.title")}
          paragraph={tCommon("components.sectionDevis.text")}
        />
      </div>
    </>
  );
}
