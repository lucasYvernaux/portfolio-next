import ScrollButton from "@/components/shared/scroll-button";
import Button from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function HomeHero() {
  const tCommon = await getTranslations("Common");
  return (
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
              {siteConfig.FullName}
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
              Je n&apos;utilise pas l&apos;IA à votre place — je m&apos;en sers
              comme levier pour livrer plus vite, sans sacrifier la qualité ni
              la maîtrise.
            </p>
            <div className="flex flex-wrap gap-4 w-fit">
              <div>
                <Button
                  href="/contact"
                  title={tCommon("nav.contact.alt")}
                  className="uppercase"
                  endIcon={
                    <ArrowRight
                      size={20}
                      className="transition-all duration-300 group-hover:translate-x-2"
                    />
                  }
                >
                  {tCommon("actions.startProject")}
                </Button>
              </div>
              <div>
                <Button
                  variant="outline"
                  href="/projects"
                  className="uppercase"
                  title={tCommon("nav.projects.alt")}
                >
                  {tCommon("nav.projects.label")}
                </Button>
              </div>
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
        <div className="w-fit relative top-20  m-auto">
          <ScrollButton targetId="features-section" />
        </div>
      </section>
    </div>
  );
}
