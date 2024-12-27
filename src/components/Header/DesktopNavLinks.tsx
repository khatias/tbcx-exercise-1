import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { UserIcon, ShoppingCartIcon, PlusIcon } from "@heroicons/react/outline";

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
      setLoading(false);
    };

    checkAuthStatus();
  }, [locale]);

  if (loading) {
    return (
      <ul className="flex w-full gap-8 justify-end items-center">
        <li className="flex justify-center items-center">
          <div className="animate-spin border-4 border-t-4 border-purple-800 border-solid w-6 h-6 rounded-full"></div>
        </li>
      </ul>
    );
  }

  return (
    <ul className="flex w-full gap-8 justify-end items-center">
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
          <Link href={`/${locale}/profile`} aria-label="Profile">
            <UserIcon className="h-6 w-6 text-gray-800 dark:text-white" />
          </Link>
        </li>
      )}
      <li>
        <Link href={`/${locale}/cart`} aria-label="Cart">
          <ShoppingCartIcon className="h-6 w-6 text-purple-800" />
        </Link>
      </li>
      {session && (
        <li>
          <Link href={`/${locale}/create-product`} aria-label="Add Product">
            <PlusIcon className="h-6 w-6 text-gray-800 dark:text-white" />
          </Link>
        </li>
      )}
    </ul>
  );
}

export default DesktopNavLinks;
