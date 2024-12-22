import { NextResponse, NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const nextIntlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  nextIntlMiddleware(req);

  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  const isLoginPage = req.nextUrl.pathname.includes("/login");
  const isRestrictedPage = [
    "/contact",
    "/profile",
    "/blog",
    "/about",
    "/products",
  ].some((path) => req.nextUrl.pathname.includes(path));

  if (!session && !isLoginPage && isRestrictedPage) {
    const locale = req.nextUrl.pathname.startsWith("/ka") ? "ka" : "en";
    const loginUrl = new URL(`/${locale}/login`, req.url);
    return NextResponse.redirect(loginUrl); // Redirect to login
  }

  if (
    !req.nextUrl.pathname.startsWith("/en") &&
    !req.nextUrl.pathname.startsWith("/ka")
  ) {
    const defaultLocale = "en";
    const redirectUrl = new URL(
      `/${defaultLocale}${req.nextUrl.pathname}`,
      req.url
    );
    return NextResponse.redirect(redirectUrl); 
  }

  return res;
}

export const config = {
  matcher: ["/", "/(ka|en)/:path*"],
};
