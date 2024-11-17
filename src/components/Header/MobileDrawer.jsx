import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import {useTranslations} from 'next-intl';
import { useLocale } from "next-intl"; 
function MobileDrawer({ isOpen }) {
  const { user, isLoading } = useUser();
  const t = useTranslations('Navigation');
  const locale = useLocale(); 
  return (
    <>
      <div className={`${isOpen ? "flex" : "hidden"} flex-col `}>
        <ul className="pt-6 flex flex-col gap-6 ">
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
      </div>
    </>
  );
}

export default MobileDrawer;
