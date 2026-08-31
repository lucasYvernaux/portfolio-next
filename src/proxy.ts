import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { NextRequest, NextResponse } from "next/server";
import { getClientIp } from "./lib/security/rate-limit";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1 m"), // 10 requêtes par minute pour toutes les routes
  prefix: "middleware",
});

export async function middleware(request: NextRequest) {
  // Appliquer uniquement sur les routes API ou les pages sensibles
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const ip = getClientIp(request) ?? "127.0.0.1";
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }
  }
  return NextResponse.next();
}
