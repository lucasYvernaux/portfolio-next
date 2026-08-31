"use client";

import { ReactNode, useEffect } from "react";
import {
  ForbiddenError,
  NotFoundError,
  ServerError,
  UnauthorizedError,
  UnavailableError,
} from "@/lib/error/codes";
import { sanitizeForClient } from "@/lib/error/sanitize";
import { ErrorPageCustom } from "@/components/error/error-page-custom";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { clientEnv } from "@/env/client";

type Props = {
  error: Error & { digest?: string; statusCode?: number };
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: Props) {
  const { safeMessage, digest } = sanitizeForClient(error);
  const t = useTranslations("Common.errors");

  let statusCode: number;
  let title: string;
  let description: string;
  let emoji: ReactNode = "⚠️";

  switch (true) {
    case error instanceof UnauthorizedError || error.statusCode === 401:
      statusCode = 401;
      title = t("401.title");
      description = t("401.description");
      break;
    case error instanceof ForbiddenError || error.statusCode === 403:
      statusCode = 403;
      title = t("403.title");
      description = t("403.description");
      emoji = "🔒";
      break;
    case error instanceof NotFoundError || error.statusCode === 404:
      statusCode = 404;
      title = t("404.title");
      description = t("404.description");
      emoji = (
        <Search className="lucide lucide-search size-24 md:size-32 text-primary/30" />
      );
      break;
    case error instanceof ServerError || error.statusCode === 500:
      statusCode = 500;
      title = t("500.title");
      description = t("500.description");
      emoji = "⚙️";
      break;
    case error instanceof UnavailableError || error.statusCode === 503:
      statusCode = 503;
      title = t("503.title");
      description = t("503.description");
      emoji = "🔧";
      break;
    default:
      statusCode = 500;
      title = t("500.title");
      description = t("500.description");
      break;
  }

  useEffect(() => {
    // Ici on peut envoyer au service de monitoring
    console.error("[ErrorBoundary]", {
      digest,
      // En dev uniquement :
      ...(clientEnv.NEXT_PUBLIC_NODE_ENV === "development" && {
        message: error.message,
      }),
    });
  }, [error, digest]);

  return (
    <ErrorPageCustom
      code={statusCode}
      title={title}
      description={
        clientEnv.NEXT_PUBLIC_NODE_ENV === "development"
          ? safeMessage // en dev : message sanitisé
          : description // en prod : message générique
      }
      emoji={emoji}
      digest={digest}
      onRetry={reset}
    />
  );
}
