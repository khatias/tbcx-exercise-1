import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTranslations } from "next-intl";
function DesktopNavLinks() {
  const { user, isLoading } = useUser();
  const t = useTranslations("Navigation");
  return (
    <ul className="flex w-full gap-8 justify-end">
      <li>
        <Link href="/contact"> {t("contact")}</Link>
      </li>
      <li>
        <Link href="/about">{t("about")}</Link>
      </li>
      <li>
        <Link href="/blog">{t("blog")}</Link>
      </li>
      <li>
        <Link href="/products">{t("products")}</Link>
      </li>
      {!isLoading && user && (
        <li>
          <Link href="/profile">{t("profile")}</Link>
        </li>
      )}
    </ul>
  );
}

export default DesktopNavLinks;
