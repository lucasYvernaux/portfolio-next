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
import { env } from "@env";
import { Search } from "lucide-react";

type Props = {
  error: Error & { digest?: string; statusCode?: number };
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: Props) {
  const { safeMessage, digest } = sanitizeForClient(error);
  const t = useTranslations("Common.errors");

  let statusCode = error.statusCode || 500;
  let title: string = t("title");
  let description: string = t("description");
  let emoji: ReactNode = "⚠️";

  if (error instanceof UnauthorizedError || statusCode === 401) {
    statusCode = 401;
    title = t("401.title");
    description = t("401.description");
  } else if (error instanceof ForbiddenError || statusCode === 403) {
    statusCode = 403;
    title = t("403.title");
    description = t("403.description");
    emoji = "🔒";
  } else if (error instanceof NotFoundError || statusCode === 404) {
    statusCode = 404;
    title = t("404.title");
    description = t("404.description");
    emoji = (
      <Search className="lucide lucide-search w-24 h-24 md:w-32 md:h-32 text-primary/30" />
    );
  } else if (error instanceof ServerError || statusCode === 500) {
    statusCode = 500;
    title = t("500.title");
    description = t("500.description");
    emoji = "⚙️";
  } else if (error instanceof UnavailableError || statusCode === 503) {
    statusCode = 503;
    title = t("503.title");
    description = t("503.description");
    emoji = "🔧";
  }

  useEffect(() => {
    // Ici on peut envoyer au service de monitoring
    console.error("[ErrorBoundary]", {
      digest,
      // En dev uniquement :
      ...(env.NEXT_PUBLIC_NODE_ENV === "development" && {
        message: error.message,
      }),
    });
  }, [error, digest]);

  return (
    <ErrorPageCustom
      code={statusCode}
      title={title}
      description={
        env.NEXT_PUBLIC_NODE_ENV === "development"
          ? safeMessage // en dev : message sanitisé
          : description // en prod : message générique
      }
      emoji={emoji}
      digest={digest}
      onRetry={reset}
    />
  );
}
