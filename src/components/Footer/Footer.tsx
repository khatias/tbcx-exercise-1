import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

function Footer() {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <footer className=" py-6 px-4  bottom-0 top-0 2xl:px-20"> 
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div className="text-center sm:text-left">
            <ul className="space-y-4 sm:space-y-0 sm:flex sm:space-x-8">
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                >
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                >
                  {t("products")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm font-light">
              &copy; {new Date().getFullYear()} My Website. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
