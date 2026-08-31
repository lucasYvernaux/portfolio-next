export async function HomeAbout() {
  return (
    <section id="about" className="py-20 md:py-32 bg-zinc-900 text-zinc-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zinc-100 mb-8 border-l-4 border-[#C5A866] pl-6">
                À Propos de Moi
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Je suis Lucas Yvernaux, développeur web freelance capable de
                  gérer vos projets de A à Z : de la conception initiale au
                  déploiement et à la maintenance.
                </p>
                <p className="bg-zinc-800/50 p-6 rounded-lg border-l-4 border-[#C5A866] shadow-inner">
                  <span className="font-semibold text-[#C5A866]">
                    Note importante :
                  </span>{" "}
                  J&apos;utilise l&apos;Intelligence Artificielle comme un outil
                  puissant pour accélérer le développement, mais la conception,
                  la logique métier et la sécurité sont entièrement pilotées par
                  mon expertise humaine. Je conçois des sites web &quot;avec
                  l&apos;aide de l&apos;IA, et non par l&apos;IA&quot;.
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
                      Code Vanilla (HTML, CSS, JS pur) ou Frameworks Modernes.
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
                      Des sites administrables, performants et à votre image.
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
  );
}
