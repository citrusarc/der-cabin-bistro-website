import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  const botPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /curl/i,
    /wget/i,
    /python-requests/i,
    /go-http-client/i,
    /scrapy/i,
    /axios/i,
  ];

  const isBot = botPatterns.some((pattern) => pattern.test(userAgent));

  if (isBot) {
    const allowedBots =
      /googlebot|bingbot|yahoo|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot/i;
    if (!allowedBots.test(userAgent)) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
