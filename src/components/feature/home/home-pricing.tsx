import PackCardTest from "../pricing/pack-card";

export function HomePricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col gap-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-100 mb-6">
              Tarifs &amp; Prestations
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Des solutions adaptées à vos besoins et à votre budget.
            </p>
          </div>
          <div className="flex flex-col gap-8 max-w-5xl mx-auto md:flex-row">
            <PackCardTest pack="vitrine" CTAContact />
            <PackCardTest
              pack="surMesure"
              CTAContact
              isPopular
              className="bottom-10 relative"
            />
            <PackCardTest pack="maintenance" CTAContact />
          </div>
        </div>
      </div>
    </section>
  );
}
