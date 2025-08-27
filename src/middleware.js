import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";

// Define protected routes.
const protectedRoutes = ["/en/profile", "/ar/profile"];

export default function middleware(req) {
  const { pathname } = req.nextUrl;
  const cookies = req.cookies;
  const sessionStatus = !!cookies.get("userData");

  // Check if the path is protected and the session is not active.
  if (
    !sessionStatus &&
    protectedRoutes.some((route) => pathname.startsWith(route))
  ) {
    const loginURL = new URL("/auth", req.nextUrl.origin); // Redirect to the homepage or login page.
    return NextResponse.redirect(loginURL.toString());
  }

  // Return `next-intl` middleware for localization.
  const intlMiddleware = createMiddleware(routing);
  return intlMiddleware(req);
}

// Define matcher configuration.
export const config = {
  matcher: ["/", "/(ar|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
