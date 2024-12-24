import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

function DesktopNavLinks() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  const [session, setSession] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const response = await fetch(`/${locale}/api/auth/status`);
      const data = await response.json();

      if (data.authenticated) {
        setSession(true);
      } else {
        setSession(false);
      }
    };

    checkAuthStatus();
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
      {session && (
        <li>
          <Link href={`/${locale}/profile`}>{t("profile")}</Link>
        </li>
      )}
    </ul>
  );
}

export default DesktopNavLinks;
