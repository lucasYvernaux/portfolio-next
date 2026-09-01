import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

const handleI18nRouting = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  // 1. next-intl gère la locale
  const response = handleI18nRouting(request);

  // 2. (optionnel) Ajouter des headers de réponse
  // response.headers.set("x-custom-header", "value");

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
