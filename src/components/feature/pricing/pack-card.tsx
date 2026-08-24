import { PackKey } from "@/src/lib/types";
import { Check } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";

interface PropsPackCardTest {
  pack: PackKey;
}

export default function PackCardTest({ pack }: PropsPackCardTest) {
  const t = useTranslations("Pricing"); // Namespace parent
  const messages = useMessages();

  const featureKeys = Object.keys(messages.Pricing.packs[pack].features);

  const isPopular = messages.Pricing.packs[pack].isPopular === "true";

  return (
    <div key={pack} className="w-1/3 shrink-0 px-4">
      <div
        className={`relative p-8 bg-surface border card-hover h-full ${
          isPopular ? "border-primary shadow-glow" : "border-surface-border"
        }`}
      >
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 bg-primary text-background px-4 py-1 text-sm font-bold">
              ★ Populaire
            </div>
          </div>
        )}

        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl text-gray-100 mb-2">
            {t(`packs.${pack}.title`)}
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            {t(`packs.${pack}.description`)}
          </p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-gray-500 text-sm">
              {t(`packs.${pack}.pricePrefix`) || t("pricePrefix")}
            </span>
            <span className="font-heading text-4xl text-primary">
              {t(`packs.${pack}.price`)}
            </span>
          </div>
          <span className="text-gray-500 text-sm">
            {t(`packs.${pack}.priceSuffix`) || t("priceSuffix")}
          </span>
        </div>

        <ul className="space-y-4 mb-8">
          {featureKeys.map((fKey) => (
            <li key={fKey} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0" />
              <span className="text-gray-400 text-sm">
                {t(`packs.${pack}.features.${fKey}` as Parameters<typeof t>[0])}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
