import { heading, text } from "@/lib/utils/primitives";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Button from "../ui/button";

interface PropsSectionDevis {
  title: string;
  paragraph?: string;
}

export default async function SectionDevis({
  title,
  paragraph,
}: PropsSectionDevis) {
  const t = await getTranslations("Common");
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
        <div>
          <Button
            href="/contact"
            title={t("nav.contact.alt")}
            endIcon={
              <ArrowRight
                size={20}
                className="transition-all duration-300 group-hover:translate-x-2"
              />
            }
          >
            {t("actions.startProject")}
          </Button>
        </div>
      </div>
    </section>
  );
}
