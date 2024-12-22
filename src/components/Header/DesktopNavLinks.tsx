import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Session } from "@supabase/supabase-js"; // Import the Session type

// Initialize the Supabase client
const supabase = createClientComponentClient();

function DesktopNavLinks() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  // Use Session type for proper type-checking
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    async function fetchSession() {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session); // Set the session if available
    }

    fetchSession();
  }, []);

  return (
    <ul className="flex w-full gap-8 justify-end">
      <li>
        <Link href={`/${locale}/contact`}>{t("contact")}</Link>
      </li>
      <li>
        <Link href={`/${locale}/about`}>{t("about")}</Link>
      </li>
      <li>
        <Link href={`/${locale}/blog`}>{t("blog")}</Link>
      </li>
      <li>
        <Link href={`/${locale}/products`}>{t("products")}</Link>
      </li>

      {/* Conditionally render profile link if session exists */}
      {session && (
        <li>
          <Link href={`/${locale}/profile`}>{t("profile")}</Link>
        </li>
      )}
    </ul>
  );
}

export default DesktopNavLinks;
