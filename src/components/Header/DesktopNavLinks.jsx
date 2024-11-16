import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl"; 

function DesktopNavLinks() {
  const { user, isLoading } = useUser();
  const t = useTranslations("Navigation");
  const locale = useLocale(); 

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
      {!isLoading && user && (
        <li>
          <Link href={`/${locale}/profile`}>{t("profile")}</Link>
        </li>
      )}
    </ul>
  );
}

export default DesktopNavLinks;
