import { NextResponse, NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });


  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();


  const isLoginPage = req.nextUrl.pathname.includes('/login');
  
  
  if (!session && !isLoginPage) {
    // Get the locale from the URL path or default to 'en'
    const locale = req.nextUrl.pathname.startsWith('/ka') ? 'ka' : 'en';
    
    // Redirect to the login page with the locale in the URL
    const loginUrl = new URL(`/${locale}/login`, req.url);
    return NextResponse.redirect(loginUrl);
  }

  // If the session exists or the user is already on the login page, allow the request to continue
  return res;
}

export const config = {
  // Define paths to apply the middleware to, including routes for specific locales
  matcher: ["/", "/(ka|en)/:path*"],
};
