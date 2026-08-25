// src/types/next-intl.d.ts
import type { Messages } from "@/types/global";

declare global {
  // Utiliser le type `IntlMessages` pour que useTranslations soit typé
  type IntlMessages = Messages;
}
