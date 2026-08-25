import { heading } from "@/lib/utils/primitives";

interface PropsSectionHero {
  path: string;
  title: string;
  intro?: string;
  center?: boolean;
}

export default async function SectionHero({
  path,
  title,
  intro,
  center = false,
}: PropsSectionHero) {
  return (
    <section className="relative py-16 md:py-24 hex-pattern bg-background text-foreground">
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-background/50 to-background"></div>
      <div
        className={`content relative max-w-3xl flex flex-col ${center ? "items-center justify-center mx-auto" : ""} gap-4 px-6 md:px-12`}
      >
        <p
          className={`text-primary font-mono text-sm tracking-wider mb-4 capitalize`}
        >{`// ${path}`}</p>
        <h1
          className={`${heading({ size: "base" })} capitalize`}
          style={{ fontWeight: "normal", color: "var(--color-gray-100)" }}
        >
          {title}
        </h1>
        <p className={`text-xl text-gray-400`}>{intro}</p>
      </div>
    </section>
  );
}
