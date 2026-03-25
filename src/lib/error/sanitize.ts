/**
 * SÉCURITÉ : ne jamais exposer au client :
 *  - stack traces
 *  - chemins internes (node_modules, src/, etc.)
 *  - noms de variables / tables SQL
 *  - tokens, clés API
 *
 * On renvoie UNIQUEMENT un message générique
 * + un digest pour corrélation dans les logs.
 */

const SENSITIVE_PATTERNS = [
  /at\s+.*\(.*:\d+:\d+\)/i, // stack traces
  /node_modules/i,
  /ECONNREFUSED/i,
  /prisma/i,
  /SELECT|INSERT|UPDATE|DELETE/i, // SQL
  /Bearer\s+\S+/i, // tokens
  /password|secret|api.?key/i,
];

export function isSensitive(message: string): boolean {
  return SENSITIVE_PATTERNS.some((p) => p.test(message));
}

export function sanitizeForClient(error: unknown): {
  safeMessage: string;
  digest: string | undefined;
} {
  // Next.js ajoute `digest` aux erreurs serveur
  // pour la corrélation sans exposer de détails
  const digest =
    error instanceof Error
      ? (error as Error & { digest?: string }).digest
      : undefined;

  // En production, JAMAIS le vrai message
  if (process.env.NODE_ENV === "production") {
    return {
      safeMessage: "Une erreur inattendue est survenue.",
      digest,
    };
  }

  // En dev, on peut afficher plus (mais jamais de données sensibles)
  const raw = error instanceof Error ? error.message : "Erreur inconnue";

  return {
    safeMessage: isSensitive(raw)
      ? "Erreur (détails masqués pour raison de sécurité)"
      : raw,
    digest,
  };
}
