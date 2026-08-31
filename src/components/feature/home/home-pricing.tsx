import Button from "@/components/ui/button";
import { Check } from "lucide-react";

export async function HomePricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-100 mb-6">
              Tarifs &amp; Prestations
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Des solutions adaptées à vos besoins et à votre budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800 relative overflow-hidden flex flex-col"
              style={{ opacity: 1, transform: "none" }}
            >
              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                Site Vitrine
              </h3>
              <div className="text-3xl font-bold text-[#C5A866] mb-8">
                Sur devis
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Design responsive &amp; moderne</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Jusqu&apos;à 5 pages</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Optimisation SEO de base</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Formulaire de contact</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Livraison rapide</span>
                </li>
              </ul>
              <Button
                href="/contact"
                variant="secondary"
                style={{ textTransform: "capitalize" }}
              >
                Contact
              </Button>
            </div>
            <div
              className="bg-zinc-950 rounded-2xl p-8 border border-[#C5A866] shadow-xl shadow-[#C5A866]/10 transform md:-translate-y-4 relative overflow-hidden flex flex-col"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A866] to-transparent" />
              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                Sur-Mesure / Web App
              </h3>
              <div className="text-3xl font-bold text-[#C5A866] mb-8">
                Sur devis
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Architecture sur-mesure</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Base de données</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Espace administration</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Performances maximales</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Code Vanilla ou React</span>
                </li>
              </ul>
              <Button href="/contact" style={{ textTransform: "capitalize" }}>
                Contact
              </Button>
            </div>
            <div
              className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800 relative overflow-hidden flex flex-col"
              style={{ opacity: 1, transform: "none" }}
            >
              <h3 className="text-xl font-bold text-zinc-100 mb-2">
                Maintenance &amp; Reprise
              </h3>
              <div className="text-3xl font-bold text-[#C5A866] mb-8">
                Taux horaire
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Audit de code existant</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Mises à jour de sécurité</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Ajout de fonctionnalités</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Optimisation des performances</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <Check className="text-primary" size={20} />
                  <span>Support technique réactif</span>
                </li>
              </ul>
              <Button
                href="/contact"
                variant="secondary"
                style={{ textTransform: "capitalize" }}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
