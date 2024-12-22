import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

// // Define available locales and default
// export const routing = defineRouting({
//   locales: ["en", "ka"],
//   defaultLocale: "en",
// });

// export const { redirect } = createNavigation(routing);

// export async function GET(req: NextRequest) {
//   const url = new URL(req.url);
//   const locale = url.pathname.split('/')[1]; 
//   const code = url.searchParams.get("code"); 

//   if (code) {
//     const cookieStore = cookies();
//     const supabase = createRouteHandlerClient({
//       cookies: () => cookieStore,
//     });

//     try {
      
//       const { data, error } = await supabase.auth.exchangeCodeForSession(code);

//       if (error) {
//         console.error("Error during code exchange:", error.message);
//         return NextResponse.redirect(`${url.origin}/${locale}/auth/error`); 
        
//       }

  
//       return redirect({
//         href: `/${locale}`, 
//         locale,
//       });
//     } catch (error) {
//       console.error("Unexpected error during code exchange:", error);
//       return NextResponse.redirect(`${url.origin}/${locale}/auth/error`); 
//     }
//   }


//   return NextResponse.redirect(`${url.origin}/${locale}/auth/error`);
// }
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const locale = url.pathname.split('/')[1];  
  const code = url.searchParams.get("code");

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({
      cookies: () => cookieStore,
    });

    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("Error during code exchange:", error.message);
        return NextResponse.redirect(`${url.origin}/${locale}/auth/error`); 
      }

      return NextResponse.redirect(`${url.origin}/${locale}`); 
    } catch (error) {
      console.error("Unexpected error during code exchange:", error);
      return NextResponse.redirect(`${url.origin}/${locale}/auth/error`); 
    }
  }

  return NextResponse.redirect(`${url.origin}/${locale}/auth/error`);
}
