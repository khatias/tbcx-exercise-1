import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { LoginIcon, LogoutIcon } from "@heroicons/react/outline"; 
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import "./mobilemenubutton.css";

export default function HeaderTop() {
  const [session, setSession] = useState<boolean | null>(null); 
  const t = useTranslations("HeaderTop");
  const locale = useLocale();

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
  }, [locale]);

  const handleLogout = async () => {
    const response = await fetch(`/${locale}/api/auth/logout`, {
      method: "POST",
    });

    const data = await response.json();

    if (!response.ok) {
      console.log('Logout failed. Error message:', data.message);
    } else {
      console.log('Logout successful:', data.message);
      // Redirect to the login page
      window.location.href = `/${locale}/login`; 
    }
  };

  return (
    <div className="container mx-auto px-4 flex flex-col items-center border-b-[1px] border-b-[#ebebeb] dark:border-b-[#333333] md:flex-row-reverse md:justify-between 2xl:px-20">
      <ul className="flex items-center justify-center gap-8 pt-2 pb-2">
        <li>
          <LanguageSwitcher />
        </li>
        <li>
          <ThemeSwitcher />
        </li>

        {/* Display login button if no session, else display logout button */}
        {session === null ? (
          <li>Loading...</li> // Optionally handle the loading state
        ) : !session ? (
          <li>
            <a className="flex items-center"  data-cy='login-in'  href={`/${locale}/login`}>
              <LoginIcon className="auth-icon" width={18} height={18} />
              <span className="text-sm px-[4px] font-medium"> Log in</span>
            </a>
          </li>
        ) : (
          <li>
            <a className="flex items-center">
              <LogoutIcon className="auth-icon rotate" width={18} height={18} />
              <button
                data-cy='log-out'
                onClick={handleLogout}
                className="text-sm px-[4px] font-medium"
              >
                {" "}
                Log out
              </button>
            </a>
          </li>
        )}
      </ul>

      <span className="text-sm pb-2 text-center">{t("headerTopText")}</span>
    </div>
  );
}
