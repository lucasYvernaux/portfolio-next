"use client";

/**
 * global-error remplace TOUT le document (<html>, <body>).
 * Il attrape les erreurs que error.tsx ne peut pas
 * (celles qui se produisent dans le root layout).
 *
 * ⚠️ Ne peut PAS utiliser le root layout → doit être autonome.
 */

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    console.error("[GlobalError]", {
      digest: error.digest,
      ...(process.env.NODE_ENV === "development" && {
        message: error.message,
        stack: error.stack,
      }),
    });
  }, [error]);

  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          color: "#e4e4e7",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>⚙️</div>
          <h1
            style={{
              fontSize: "6rem",
              fontWeight: 800,
              color: "#c4a35a",
              lineHeight: 1,
              margin: "0 0 1rem",
            }}
          >
            500
          </h1>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              margin: "0 0 0.5rem",
            }}
          >
            Erreur critique
          </h2>
          <p
            style={{
              color: "#a1a1aa",
              maxWidth: "400px",
              margin: "0 auto 2rem",
              lineHeight: 1.6,
            }}
          >
            Un problème majeur est survenu. Nos équipes ont été notifiées.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#c4a35a",
              color: "#09090b",
              border: "none",
              borderRadius: "9999px",
              padding: "0.75rem 2rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Réessayer
          </button>
          {error.digest && (
            <p
              style={{
                marginTop: "2rem",
                fontFamily: "monospace",
                fontSize: "0.75rem",
                color: "#52525b",
              }}
            >
              Référence : {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
