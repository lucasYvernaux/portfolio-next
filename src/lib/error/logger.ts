/**
 * Logger côté serveur uniquement.
 *
 * En production → envoyer vers Sentry / Datadog / etc.
 * Les erreurs ne transitent JAMAIS vers le client.
 */

type ErrorContext = {
  digest?: string;
  pathname?: string;
  userId?: string;
  extra?: Record<string, unknown>;
};

export function logServerError(error: unknown, ctx?: ErrorContext) {
  const timestamp = new Date().toISOString();
  const message = error instanceof Error ? error.message : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  // ── Console (dev + staging) ──
  console.error(
    JSON.stringify(
      {
        level: "error",
        timestamp,
        message,
        stack,
        digest: ctx?.digest,
        pathname: ctx?.pathname,
        userId: ctx?.userId,
        ...ctx?.extra,
      },
      null,
      2,
    ),
  );

  // ── Production : Sentry / Datadog / etc. ──
  // if (serverEnv.NODE_ENV === "production") {
  //   Sentry.captureException(error, {
  //     tags: { digest: ctx?.digest },
  //     extra: ctx?.extra,
  //   });
  // }
}
