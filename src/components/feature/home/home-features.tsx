import { Layers, Server, ShieldCheck, Zap } from "lucide-react";

export async function HomeFeatures() {
  return (
    <section
      className="py-24 bg-gray-custom relative"
      data-testid="features-section"
      id="features-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            className="p-6 bg-surface rounded-lg border border-surface-border hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group card-hover"
            data-testid="feature-clean code"
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
              De la maquette au déploiement je gère l&apos;intégralité du projet
              sans intermédiaire.
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
              Chaque site est conçu pour durer : bonnes pratiques, sécurité et
              performance au coeur de chacun.
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
  );
}
