"use client";

import { PackCustom } from "@/types/global";
import { useFormatter, useTranslations } from "next-intl";

export function PacksData() {
  const format = useFormatter();
  const t = useTranslations("Pricing");
  const test_pack: PackCustom[] = [
    {
      title: t("packs.refonte.title"),
      features: ["test", "pedro"],
      id: "vit",
      price: format.number(1200, { style: "currency", currency: "EUR" }),
    },
  ];
  return test_pack;
}
