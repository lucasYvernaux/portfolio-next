import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale, useTranslations } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { createMetadata } from "@/src/lib/seo/metadata";
import { type Locale } from "@/src/i18n/locale";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/src/lib/seo/json-ld";
import SectionDevis from "@/src/components/shared/section-devis";
import {
  ArrowRight,
  ChevronDown,
  Layers,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import Image from "next/image";
// import { useEffect } from "react";

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

  // useEffect(() => {
  //   document
  //     .querySelector("#arrow-down")
  //     ?.addEventListener("click", function () {
  //       console.log("click ");
  //       if (document.querySelector("#section-formule")) {
  //         document
  //           .querySelector("#section-formule")
  //           ?.scrollIntoView({ behavior: "smooth", block: "center" });
  //       }
  //     });
  // });

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
          <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-transparent  to-gray-custom "></div>
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
                    De la conception au déploiement.
                  </p>
                </div>
                <p
                  className="text-gray-400 text-lg leading-relaxed max-w-lg mb-10"
                  data-testid="hero-description"
                >
                  Je n&apos;utilise pas l&apos;IA à votre place — je m&apos;en
                  sers comme levier pour livrer plus vite, sans sacrifier la
                  qualité ni la maîtrise.
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
                        src={"/profile-pic.png"}
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
            <div
              id="arrow-down"
              className="w-full relative top-10 cursor-pointer flex flex-col items-center justify-center text-gray-500 text-sm uppercase tracking-widest"
            >
              découvrir
              <ChevronDown
                color="var(--color-primary)"
                className="animate-bounce mt-4"
              />
            </div>
          </section>
        </div>
        <section
          className="py-24 bg-gray-custom relative"
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
                className="p-6 bg-surface rounded-lg border border-surface-border hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group card-hover"
                data-testid="feature-clean code"
                x-file-name="Home"
                x-line-number={118}
                x-column={14}
                x-component="div"
                x-id="Home_118_14"
                x-dynamic="false"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500/10 to-rose-600/10 flex items-center justify-center mb-4 group-hover:from-orange-500/20 group-hover:to-rose-600/20 transition-colors">
                  <Layers
                    color="var(--color-primary)"
                    className="group-hover:scale-110"
                  />
                </div>

                <h3 className="font-heading text-lg font-semibold text-gray-100 mb-2">
                  Bout en Bout
                </h3>
                <p className="text-gray-500 text-sm">
                  De la maquette au déploiement je gère l&apos;intégralité du
                  projet sans intermédiaire.
                </p>
              </div>
              <div
                className="p-6 bg-surface rounded-lg border border-surface-border hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group card-hover"
                data-testid="feature-scalable"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500/10 to-rose-600/10 flex items-center justify-center mb-4 group-hover:from-orange-500/20 group-hover:to-rose-600/20 transition-colors">
                  <Server
                    color="var(--color-primary)"
                    className="group-hover:scale-110"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-100 mb-2">
                  IA comme levier
                </h3>
                <p className="text-gray-500 text-sm">
                  J&apos;utilise l&apos;IA pour accélerer, pas pour remplacer.
                  Chaque ligne de code est maîtrisé.
                </p>
              </div>
              <div
                className="p-6 bg-surface rounded-lg border border-surface-border hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group card-hover"
                data-testid="feature-sécurisé"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500/10 to-rose-600/10 flex items-center justify-center mb-4 group-hover:from-orange-500/20 group-hover:to-rose-600/20 transition-colors">
                  <ShieldCheck
                    color="var(--color-primary)"
                    className="group-hover:scale-110"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-100 mb-2">
                  Sécurisé
                </h3>
                <p className="text-gray-500 text-sm">
                  Chaque site est conçu pour durer : bonnes pratiques, sécurité
                  et performance au coeur de chacun.
                </p>
              </div>
              <div
                className="p-6 bg-surface rounded-lg border border-surface-border hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group card-hover"
                data-testid="feature-performant"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500/10 to-rose-600/10 flex items-center justify-center mb-4 group-hover:from-orange-500/20 group-hover:to-rose-600/20 transition-colors">
                  <Zap
                    color="var(--color-primary)"
                    className="group-hover:scale-110"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-100 mb-2">
                  Multi-stack
                </h3>
                <p className="text-gray-500 text-sm">
                  Vanilla, WordPress, refonte code existant. J&apos;adapte
                  l&apos;outil au besoin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="py-20 md:py-32 bg-zinc-900 text-zinc-300"
        >
          <div className="container mx-auto px-6 max-w-6xl">
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-zinc-100 mb-8 border-l-4 border-[#C5A866] pl-6">
                    À Propos de Moi
                  </h2>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                      Je suis Lucas Yvernaux, développeur web freelance capable
                      de gérer vos projets de A à Z : de la conception initiale
                      au déploiement et à la maintenance.
                    </p>
                    <p className="bg-zinc-800/50 p-6 rounded-lg border-l-4 border-[#C5A866] shadow-inner">
                      <span className="font-semibold text-[#C5A866]">
                        Note importante :
                      </span>{" "}
                      J&apos;utilise l&apos;Intelligence Artificielle comme un
                      outil puissant pour accélérer le développement, mais la
                      conception, la logique métier et la sécurité sont
                      entièrement pilotées par mon expertise humaine. Je conçois
                      des sites web &quot;avec l&apos;aide de l&apos;IA, et non
                      par l&apos;IA&quot;.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-100 mb-8">
                    Mon Expertise
                  </h3>
                  <div className="grid gap-6">
                    <div
                      className="flex items-start gap-4 p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/80 transition-colors border border-zinc-800/50 hover:border-[#C5A866]/30"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="p-3 bg-zinc-950 rounded-lg text-[#C5A866]">
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
                          className="lucide lucide-code"
                          aria-hidden="true"
                        >
                          <path d="m16 18 6-6-6-6" />
                          <path d="m8 6-6 6 6 6" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-100 mb-1">
                          Développement Sur-Mesure
                        </h4>
                        <p className="text-sm text-zinc-400">
                          Code Vanilla (HTML, CSS, JS pur) ou Frameworks
                          Modernes.
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-start gap-4 p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/80 transition-colors border border-zinc-800/50 hover:border-[#C5A866]/30"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="p-3 bg-zinc-950 rounded-lg text-[#C5A866]">
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
                          className="lucide lucide-briefcase"
                          aria-hidden="true"
                        >
                          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          <rect width={20} height={14} x={2} y={6} rx={2} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-100 mb-1">
                          Création &amp; Refonte WordPress
                        </h4>
                        <p className="text-sm text-zinc-400">
                          Des sites administrables, performants et à votre
                          image.
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-start gap-4 p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/80 transition-colors border border-zinc-800/50 hover:border-[#C5A866]/30"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="p-3 bg-zinc-950 rounded-lg text-[#C5A866]">
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
                          className="lucide lucide-wrench"
                          aria-hidden="true"
                        >
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-100 mb-1">
                          Reprise de Code Existant
                        </h4>
                        <p className="text-sm text-zinc-400">
                          Audit, optimisation et évolution de vos applications
                          actuelles.
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-start gap-4 p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/80 transition-colors border border-zinc-800/50 hover:border-[#C5A866]/30"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="p-3 bg-zinc-950 rounded-lg text-[#C5A866]">
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
                          className="lucide lucide-globe"
                          aria-hidden="true"
                        >
                          <circle cx={12} cy={12} r={10} />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-100 mb-1">
                          Architecture Scalable
                        </h4>
                        <p className="text-sm text-zinc-400">
                          Des solutions prêtes à grandir avec votre entreprise.
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-start gap-4 p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/80 transition-colors border border-zinc-800/50 hover:border-[#C5A866]/30"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="p-3 bg-zinc-950 rounded-lg text-[#C5A866]">
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
                          className="lucide lucide-shield"
                          aria-hidden="true"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-100 mb-1">
                          Déploiement &amp; Maintenance
                        </h4>
                        <p className="text-sm text-zinc-400">
                          Mise en ligne sécurisée et suivi technique continu.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
