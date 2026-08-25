import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { env } from "@env";

const NAMESPACE_FILES = [
  { file: "metadata", rootKey: "Metadata" },
  { file: "common", rootKey: "Common" },
  { file: "home", rootKey: "Home" },
  { file: "about", rootKey: "About" },
  { file: "contact", rootKey: "Contact" },
  { file: "projects", rootKey: "Projects" },
  { file: "pricing", rootKey: "Pricing" },
  // { file: "blog", rootKey: "Blog" },
] as const;

async function loadMessages(locale: string) {
  const merged: Record<string, unknown> = {};

  for (const { file, rootKey } of NAMESPACE_FILES) {
    try {
      // ── Import dynamique du fichier JSON ──
      const mod = await import(`../messages/${locale}/${file}.json`);
      const data = mod.default ?? mod;

      // ── Vérifier que la clé racine existe ──
      if (!(rootKey in data)) {
        console.error(
          `[i18n] ❌ messages/${locale}/${file}.json existe`,
          `mais ne contient pas la clé racine "${rootKey}".`,
          `\n  Clés trouvées : [${Object.keys(data).join(", ")}]`,
          `\n  Attendu : { "${rootKey}": { ... } }`,
        );
        continue;
      }

      // ── Fusionner ──
      Object.assign(merged, data);
    } catch (error) {
      // ── Le fichier n'existe pas ──
      console.error(
        `[i18n] ❌ Impossible de charger messages/${locale}/${file}.json`,
        `\n  Vérifiez que le fichier existe.`,
        error instanceof Error ? `\n  ${error.message}` : "",
      );
    }
  }

  if (env.NEXT_PUBLIC_NODE_ENV === "development") {
    const loadedKeys = Object.keys(merged);
    const expectedKeys = NAMESPACE_FILES.map((n) => n.rootKey);
    const missing = expectedKeys.filter((k) => !loadedKeys.includes(k));

    if (missing.length > 0) {
      console.error(
        `[i18n] ⚠️  Locale "${locale}" — namespaces manquants :`,
        missing.join(", "),
      );
    } else {
      console.log(
        `[i18n] ✅ Locale "${locale}" — ${loadedKeys.length} namespaces chargés :`,
        loadedKeys.join(", "),
      );
    }
  }
  // On fusionne tous les Namespace (les messages.json)
  // Pour avoir un object qui reseemble à ça
  //  { "Common": {...}, "Metadata": {...}, ... }
  return merged;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = await loadMessages(locale);

  return {
    locale,
    messages,
    onError(error) {
      if (env.NEXT_PUBLIC_NODE_ENV === "development")
        console.error("[i18n]", error.message);
    },
    getMessageFallback({ namespace, key, error }) {
      // Affiche la clé manquante au lieu de crasher
      const fullKey = [namespace, key].filter(Boolean).join(".");
      if (process.env.NODE_ENV === "development") {
        console.log("err : " + error);
        return `⚠️ ${fullKey}`;
      }
      return fullKey;
    },
  };
});
