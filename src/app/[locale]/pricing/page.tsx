import { PricingTabs } from "@/src/components/feature/pricing/pricing-tabs";
import SectionDevis from "@/src/components/shared/section-devis";
import SectionHero from "@/src/components/shared/section-hero";
import { Link } from "@/src/i18n/navigation";
import { PackCustom, ServiceCustom } from "@/src/lib/types";
import { Check } from "lucide-react";
import { useFormatter } from "next-intl";
import { getFormatter, getTranslations } from "next-intl/server";

export default async function PricingPage() {
  const tPricing = await getTranslations("Pricing");
  const tCommon = await getTranslations("Common");
  const format = await getFormatter();
  const test_pack: PackCustom[] = [
    {
      id: "refonte",
      title: tPricing("packs.refonte.title"),
      subtitle: tPricing("packs.refonte.description"),
      price: format.number(800, {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }),
      features: [
        tPricing("packs.refonte.features.audit"),
        tPricing("packs.refonte.features.design"),
        tPricing("packs.refonte.features.migration"),
        tPricing("packs.refonte.features.mobile"),
        tPricing("packs.refonte.features.performance"),
        tPricing("packs.refonte.features.
        tPricing("packs.refonte.features.seo"),
      ],
    },
    {
      id: "vitrine",
      title: tPricing("packs.vitrine.title"),
      subtitle: tPricing("packs.vitrine.description"),
      price: format.number(950, {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }),
      features: [
        tPricing("packs.vitrine.features.design"),
        tPricing("packs.vitrine.features.form"),
        tPricing("packs.vitrine.features.hosting"),
        tPricing("packs.vitrine.features.pages"),
        tPricing("packs.vitrine.features.seo"),
        tPricing("packs.vitrine.features.training"),
      ],
    },
    {
      id: "ecom",
      title: tPricing("packs.ecommerce.title"),
      subtitle: tPricing("packs.ecommerce.description"),
      price: format.number(1800, {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }),
      features: [
        tPricing("packs.ecommerce.features.account"),
        tPricing("packs.ecommerce.features.dashboard"),
        tPricing("packs.ecommerce.features.payment"),
        tPricing("packs.ecommerce.features.shop"),
        tPricing("packs.ecommerce.features.stock"),
        tPricing("packs.ecommerce.features.support"),
        tPricing("packs.ecommerce.features.vitrine"),
      ],
    },
    {
      id: "custom",
      title: tPricing("packs.surMesure.title"),
      subtitle: tPricing("packs.surMesure.description"),
      price: "sur devis",
      features: [
        tPricing("packs.surMesure.features.ai"),
        tPricing("packs.surMesure.features.api"),
        tPricing("packs.surMesure.features.app"),
        tPricing("packs.surMesure.features.db"),
        tPricing("packs.surMesure.features.maintenance"),
        tPricing("packs.surMesure.features.scalable"),
        tPricing("packs.surMesure.features.support"),
      ],
    },
    {
      id: "maint",
      title: tPricing("packs.maintenance.title"),
      subtitle: tPricing("packs.maintenance.description"),
      price: tPricing("packs.refonte.price"),
      features: [
        tPricing("packs.maintenance.features.backup"),
        tPricing("packs.maintenance.features.bugs"),
        tPricing("packs.maintenance.features.monitoring"),
        tPricing("packs.maintenance.features.report"),
        tPricing("packs.maintenance.features.security"),
        tPricing("packs.maintenance.features.support"),
      ],
    },
  ];
  const test_service: ServiceCustom[] = [
    {
      id: "erz",
      name: "SEO",
      price: "à partir de 50€",
      description: "refe seo",
    },
    {
      id: "erz",
      name: "SEO",
      price: "à partir de 50€",
      description: "refe seo",
    },
    {
      id: "erz",
      name: "SEO",
      price: "à partir de 50€",
      description: "refe seo",
    },
    {
      id: "erz",
      name: "SEO",
      price: "à partir de 50€",
      description: "refe seo",
    },
  ];
  return (
    <>
      <div className="pt-23 min-h-screen">
        <SectionHero
          path="pricing"
          title={tPricing("title")}
          intro={tPricing("introduction")}
          center
        />
        <section className="py-16 md:py-24 bg-linear-to-b from-background/95 to-gray-custom text-foreground">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <PricingTabs />
          </div>
        </section>
        {/* <section className="py-16 md:py-24 bg-gray-custom text-foreground">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="relative p-8 bg-surface border border-surface-border card-hover"
                data-testid="pricing-plan-vitrine"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="text-center mb-8">
                  <h3 className="font-heading text-2xl text-gray-100 mb-2">
                    Site Vitrine
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Parfait pour présenter votre activité
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-gray-500 text-sm">À partir de</span>
                    <span className="font-heading text-4xl text-primary">
                      1 200€
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">par projet</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Design sur-mesure responsive
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Jusqu&apos;à 5 pages
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Formulaire de contact
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Optimisation SEO de base
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Hébergement 1ère année inclus
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Formation utilisation
                    </span>
                  </li>
                </ul>
                <Link
                  className="w-full flex items-center justify-center gap-2 font-heading font-bold tracking-wider uppercase px-6 py-4 transition-all duration-300 border border-primary text-primary hover:bg-primary/10"
                  data-testid="pricing-cta-vitrine"
                  href="/contact"
                  data-discover="true"
                >
                  Démarrer ce projet
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
                    className="lucide lucide-arrow-right w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div
                className="relative p-8 bg-surface border border-primary shadow-glow card-hover"
                data-testid="pricing-plan-ecommerce"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-background px-4 py-1 text-sm font-bold">
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
                      className="lucide lucide-star w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    Populaire
                  </div>
                </div>
                <div className="text-center mb-8">
                  <h3 className="font-heading text-2xl text-gray-100 mb-2">
                    E-Commerce
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Vendez vos produits en ligne
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-gray-500 text-sm">À partir de</span>
                    <span className="font-heading text-4xl text-primary">
                      1800€
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">par projet</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Tout du pack Vitrine
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Boutique complète
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Gestion des stocks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Paiement sécurisé
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">Espace client</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Tableau de bord admin
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Support 6 mois inclus
                    </span>
                  </li>
                </ul>
                <Link
                  className="w-full flex items-center justify-center gap-2 font-heading font-bold tracking-wider uppercase px-6 py-4 transition-all duration-300 bg-primary text-background hover:bg-gold-400"
                  data-testid="pricing-cta-ecommerce"
                  href="/contact"
                  data-discover="true"
                >
                  Démarrer ce projet
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
                    className="lucide lucide-arrow-right w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div
                className="relative p-8 bg-surface border border-surface-border card-hover"
                data-testid="pricing-plan-surmesure"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="text-center mb-8">
                  <h3 className="font-heading text-2xl text-gray-100 mb-2">
                    Sur-Mesure
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Solutions complexes &amp; uniques
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-heading text-4xl text-primary">
                      Sur devis
                    </span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Application web complète
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Intégrations API tierces
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Base de données personnalisée
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Fonctionnalités IA intégrées
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Architecture scalable
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Support prioritaire
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check color="var(--color-primary)" size={20} />{" "}
                    <Check color="var(--color-primary)" size={20} />
                    <span className="text-gray-400 text-sm">
                      Maintenance évolutive
                    </span>
                  </li>
                </ul>
                <Link
                  className="w-full flex items-center justify-center gap-2 font-heading font-bold tracking-wider uppercase px-6 py-4 transition-all duration-300 border border-primary text-primary hover:bg-primary/10"
                  data-testid="pricing-cta-surmesure"
                  href="/contact"
                  data-discover="true"
                >
                  Me contacter
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
                    className="lucide lucide-arrow-right w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-16 md:py-24 bg-background"
          data-testid="extras-section"
        >
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div
              className="text-center mb-12"
              style={{ opacity: 1, transform: "none" }}
            >
              <h2 className="font-heading text-3xl text-gray-100 mb-4">
                Options
              </h2>
            </div>
            <div className="grid gap-4">
              <div
                className="flex items-center justify-between p-6 bg-surface border border-surface-border card-hover"
                data-testid="extra-0"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="text-gray-300 font-medium">
                  Maintenance mensuelle
                </span>
                <span className="text-gold-500 font-heading font-bold">
                  50€/mois
                </span>
              </div>
              <div
                className="flex items-center justify-between p-6 bg-surface border border-surface-border card-hover"
                data-testid="extra-1"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="text-gray-300 font-medium">
                  Refonte WordPress existant
                </span>
                <span className="text-gold-500 font-heading font-bold">
                  À partir de 490€
                </span>
              </div>
              <div
                className="flex items-center justify-between p-6 bg-surface border border-surface-border card-hover"
                data-testid="extra-2"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="text-gray-300 font-medium">
                  Optimisation performances
                </span>
                <span className="text-gold-500 font-heading font-bold">
                  À partir de 290€
                </span>
              </div>
              <div
                className="flex items-center justify-between p-6 bg-surface border border-surface-border card-hover"
                data-testid="extra-2"
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="text-gray-300 font-medium">
                  Optimisation SEO
                </span>
                <span className="text-gold-500 font-heading font-bold">
                  À partir de 200€
                </span>
              </div>
            </div>
          </div>
        </section> */}

        <SectionDevis
          title={tCommon("components.sectionDevis.title")}
          paragraph="Chaque projet est unique. Contactez-moi pour obtenir un devis personnalisé adapté à vos 
      </div>
    </>
  );
}
