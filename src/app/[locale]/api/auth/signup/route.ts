import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const formData = await req.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  const locale = cookieStore.get("locale")?.value || "en";

  if (error) {
    console.error("Login error:", error.message);

    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json({
    message: "signup successful",
    redirectTo: `/${locale}/`,
  });
}
