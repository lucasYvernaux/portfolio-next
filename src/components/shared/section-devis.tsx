import Link from "next/link";
import { heading, text } from "@/lib/utils/primitives";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

interface PropsSectionDevis {
  title: string;
  paragraph?: string;
}

export default async function SectionDevis({
  title,
  paragraph,
}: PropsSectionDevis) {
  const t = await getTranslations("Common.actions");
  return (
    <section className="relative py-24 hex-pattern bg-[#0a0a0a] text-foreground">
      <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      <div className="content relative max-w-4xl mx-auto flex flex-col items-center justify-center gap-4 px-6 md:px-12">
        <h2
          className={`${heading({ size: "sm" })} `}
          style={{ fontWeight: "normal" }}
        >
          {title}
        </h2>
        <p className={`${text()} text-center`}>{paragraph}</p>
        <Link
          className="group flex items-center w-fit gap-2 mt-4 bg-primary text-background font-heading font-bold tracking-wider uppercase px-8 py-4 hover:bg-primary/80 transition-all duration-300 "
          data-testid="hero-cta"
          href="/contact"
          data-discover="true"
        >
          {t("startProject")}
          <ArrowRight
            size={20}
            className="transition-all duration-300 group-hover:translate-x-2"
          />
        </Link>
      </div>
    </section>
  );
}
