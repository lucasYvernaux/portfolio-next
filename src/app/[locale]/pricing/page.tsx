import { PricingTabs } from "@/components/feature/pricing/pricing-tabs";
import SectionDevis from "@/components/shared/section-devis";
import SectionHero from "@/components/shared/section-hero";
import { getTranslations } from "next-intl/server";

export default async function PricingPage() {
  const tPricing = await getTranslations("Pricing");
  const tCommon = await getTranslations("Common");

  return (
    <>
      <div className="pt-23 min-h-screen">
        <SectionHero
          path="pricing"
          title={tPricing("title")}
          intro={tPricing("introduction")}
        />
        <section className="py-16 md:py-24 bg-linear-to-b from-background/95 to-gray-custom text-foreground">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <PricingTabs />
          </div>
        </section>
        <SectionDevis
          title={tCommon("components.sectionDevis.title")}
          paragraph="Chaque projet est unique. Contactez-moi pour obtenir un devis personnalisé adapté à vos besoins."
        />
      </div>
    </>
  );
}
