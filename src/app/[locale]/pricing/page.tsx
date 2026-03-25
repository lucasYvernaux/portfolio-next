import SectionDevis from "@/src/components/shared/section-devis";
import SectionHero from "@/src/components/shared/section-hero";
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
          center
        />
        <section className="relative h-[50vh] bg-background text-foreground">
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="font-serif font-bold tracking-widest  relative mb-6 text-primary text-4xl md:text-6xl capitalize rotate-45">
              {tCommon("message.coming")}
            </h3>
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
