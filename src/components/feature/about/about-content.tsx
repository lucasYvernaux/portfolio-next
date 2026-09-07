import {
  BriefcaseBusiness,
  Code2,
  Gauge,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

const EXPERTISE = [
  {
    key: "customDevelopment",
    icon: Code2,
  },
  {
    key: "architecture",
    icon: Workflow,
  },
  {
    key: "security",
    icon: ShieldCheck,
  },
  {
    key: "performance",
    icon: Gauge,
  },
  {
    key: "maintenance",
    icon: BriefcaseBusiness,
  },
] as const;

const PRINCIPLES = ["clarity", "quality", "security"] as const;

const METHOD_STEPS = ["understand", "design", "build"] as const;

export async function AboutContent() {
  const t = await getTranslations("About");

  return (
    <div className="bg-background text-foreground">
      {/* Identity */}
      <section
        aria-labelledby="about-identity-title"
        className="border-y border-border/60 bg-background"
      >
        <div className="content grid gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-sm tracking-wider text-primary">
              {t("identity.eyebrow")}
            </p>

            <h2
              id="about-identity-title"
              className="text-3xl font-semibold tracking-tight text-gray-100 md:text-5xl"
            >
              {t("identity.title")}
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-400 md:text-lg">
              <p>{t("identity.paragraph1")}</p>
              <p>{t("identity.paragraph2")}</p>
            </div>
          </div>

          {/* Principles */}
          <aside
            aria-labelledby="about-principles-title"
            className="rounded-xl border border-border bg-card/40 p-6 md:p-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {t("principles.eyebrow")}
            </p>

            <h3
              id="about-principles-title"
              className="mt-3 text-2xl font-semibold text-gray-100"
            >
              {t("principles.title")}
            </h3>

            <ul className="mt-6 space-y-5">
              {PRINCIPLES.map((key) => (
                <li key={key} className="border-l border-primary/50 pl-4">
                  <h4 className="font-medium text-gray-100">
                    {t(`principles.items.${key}.title`)}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    {t(`principles.items.${key}.text`)}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Expertise */}
      <section aria-labelledby="about-expertise-title" className="bg-[#0a0a0a]">
        <div className="content px-6 py-20 md:px-12 md:py-28">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-sm tracking-wider text-primary">
              {t("expertise.eyebrow")}
            </p>

            <h2
              id="about-expertise-title"
              className="text-3xl font-semibold tracking-tight text-gray-100 md:text-5xl"
            >
              {t("expertise.title")}
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-400 md:text-lg">
              {t("expertise.intro")}
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE.map(({ key, icon: Icon }) => (
              <article
                key={key}
                className="group rounded-xl border border-border bg-card/30 p-6 transition-colors hover:border-primary/40 hover:bg-card/60"
              >
                <div className="mb-5 inline-flex rounded-lg border border-border bg-background p-3 text-primary">
                  <Icon size={22} aria-hidden="true" />
                </div>

                <h3 className="text-lg font-semibold text-gray-100">
                  {t(`expertise.items.${key}.title`)}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {t(`expertise.items.${key}.text`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section
        aria-labelledby="about-method-title"
        className="border-y border-border/60 bg-background"
      >
        <div className="content px-6 py-20 md:px-12 md:py-28">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="font-mono text-sm tracking-wider text-primary">
                {t("method.eyebrow")}
              </p>

              <h2
                id="about-method-title"
                className="mt-4 text-3xl font-semibold text-gray-100 md:text-4xl"
              >
                {t("method.title")}
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:col-span-2">
              {METHOD_STEPS.map((key, index) => (
                <article key={key} className="border-t border-primary/40 pt-5">
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-primary"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 font-semibold text-gray-100">
                    {t(`method.steps.${key}.title`)}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {t(`method.steps.${key}.text`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
