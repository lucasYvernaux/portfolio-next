"use client";
// import { ServiceCustom } from "@/src/lib/types";

// interface PropsServicesGrid {
//   items: ServiceCustom[];
// }

import { useTranslations, useMessages } from "next-intl";
import {
  Search,
  MapPin,
  Zap,
  PenTool,
  BarChart3,
  Mail,
  MessageSquare,
  Plug,
} from "lucide-react";

// Icônes mappées par clé de service
const serviceIcons: Record<string, React.ElementType> = {
  seo: Search,
  google: MapPin,
  performance: Zap,
  copywriting: PenTool,
  analytics: BarChart3,
  email: Mail,
  consulting: MessageSquare,
  apiIntegration: Plug,
};

export default function ServicesGrid() {
  const t = useTranslations("Pricing");
  const messages = useMessages();

  const serviceKeys = Object.keys(
    (messages.Pricing as Record<string, any>).services.items,
  );

  return (
    <section className="mt-16">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl text-gray-100 mb-3">
          {t("services.sectionTitle" as Parameters<typeof t>[0])}
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          {t("services.sectionDescription" as Parameters<typeof t>[0])}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceKeys.map((key) => {
          const Icon = serviceIcons[key] || Plug;

          return (
            <div
              key={key}
              className="group flex flex-col gap-3 p-6 bg-surface border border-surface-border rounded-lg card-hover"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary/10 border border-primary/20">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-base text-gray-100">
                  {t(`services.items.${key}.title` as Parameters<typeof t>[0])}
                </h3>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {t(
                  `services.items.${key}.description` as Parameters<
                    typeof t
                  >[0],
                )}
              </p>

              <div className="pt-3 border-t border-surface-border">
                <span className="font-heading text-lg text-primary">
                  {t(`services.items.${key}.price` as Parameters<typeof t>[0])}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
