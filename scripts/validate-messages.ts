/**
 * Script de validation des traductions.
 * → Exécuter en CI ou en pre-build :
 *    pnpm tsx scripts/validate-messages.ts
 *
 * Vérifie :
 * 1. Toutes les locales ont les mêmes clés
 * 2. Aucune valeur vide
 * 3. Les variables ICU sont cohérentes entre locales
 */

import fs from "node:fs";
import path from "node:path";

const MESSAGES_DIR = path.resolve(process.cwd(), "./messages");
const REFERENCE_LOCALE = "fr";

/* ── Utilitaires ── */

function flattenKeys(
  obj: Record<string, unknown>,
  prefix = "",
): Map<string, string> {
  const result = new Map<string, string>();

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      for (const [k, v] of flattenKeys(
        value as Record<string, unknown>,
        fullKey,
      )) {
        result.set(k, v);
      }
    } else {
      result.set(fullKey, String(value));
    }
  }

  return result;
}

function extractICUVariables(message: string): string[] {
  const matches = message.match(/\{(\w+)/g);
  return matches ? matches.map((m) => m.slice(1)).sort() : [];
}

function loadLocaleMessages(locale: string): Record<string, unknown> {
  const dir = path.join(MESSAGES_DIR, locale);
  if (!fs.existsSync(dir)) {
    throw new Error(`Missing locale directory: ${dir}`);
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  const merged: Record<string, unknown> = {};

  for (const file of files) {
    const content = JSON.parse(fs.readFileSync(path.join(dir, file), "utf-8"));
    Object.assign(merged, content);
  }

  return merged;
}

/* ── Validation ── */

let errors = 0;

const locales = fs
  .readdirSync(MESSAGES_DIR)
  .filter((f) => fs.statSync(path.join(MESSAGES_DIR, f)).isDirectory());

console.log(`\nValidating ${locales.length} locales: ${locales.join(", ")}\n`);

const referenceMsgs = loadLocaleMessages(REFERENCE_LOCALE);
const referenceKeys = flattenKeys(referenceMsgs);

for (const locale of locales) {
  if (locale === REFERENCE_LOCALE) continue;

  const msgs = loadLocaleMessages(locale);
  const keys = flattenKeys(msgs);

  // Clés manquantes
  for (const [key] of referenceKeys) {
    if (!keys.has(key)) {
      console.error(`❌ [${locale}] Missing key: "${key}"`);
      errors++;
    }
  }

  // Clés en trop
  for (const [key] of keys) {
    if (!referenceKeys.has(key)) {
      console.warn(`⚠️  [${locale}] Extra key: "${key}"`);
    }
  }

  // Valeurs vides
  for (const [key, value] of keys) {
    if (!value || value.trim() === "") {
      console.error(`❌ [${locale}] Empty value: "${key}"`);
      errors++;
    }
  }

  // Variables ICU incohérentes
  for (const [key, refValue] of referenceKeys) {
    const locValue = keys.get(key);
    if (!locValue) continue;

    const refVars = extractICUVariables(refValue);
    const locVars = extractICUVariables(locValue);

    if (JSON.stringify(refVars) !== JSON.stringify(locVars)) {
      console.error(
        `❌ [${locale}] ICU variable mismatch in "${key}":` +
          ` expected {${refVars.join(", ")}},` +
          ` got {${locVars.join(", ")}}`,
      );
      errors++;
    }
  }
}

console.log(
  `\n${errors === 0 ? "✅ All translations valid!" : `❌ ${errors} error(s) found.`}\n`,
);

if (errors > 0) {
  process.exit(1);
}
