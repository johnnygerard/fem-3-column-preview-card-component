import { AVAILABLE_LOCALES } from "@/constant/i18n";
import { getLocale } from "@/util/get-locale";
import { NextRequest, NextResponse } from "next/server";

const FIRST_PATH_SEGMENT = /^\/([^/]+)/;

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const match = pathname.match(FIRST_PATH_SEGMENT);
  // @ts-expect-error string type is expected
  const hasLocale = match && AVAILABLE_LOCALES.includes(match[1]);

  if (hasLocale) return;
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
};

export const config = {
  matcher: [
    // Match all paths except Next.js internal paths and static assets
    "/((?!_next|asset\/|opengraph-image.png).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
