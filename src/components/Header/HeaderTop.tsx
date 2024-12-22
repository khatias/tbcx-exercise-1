import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { LoginIcon, LogoutIcon } from "@heroicons/react/outline"; // Import Heroicons
import "./mobilemenubutton.css";
import { Session } from "@supabase/supabase-js";

const supabase = createClientComponentClient();

function HeaderTop() {
  const t = useTranslations("HeaderTop");
  const locale = useLocale();

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    async function fetchSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    }

    fetchSession();

    
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription?.unsubscribe(); 
    };
  }, []);

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
        {!session ? (
          <li>
            <a className="flex items-center" href={`/${locale}/login`}>
              <LoginIcon className="auth-icon" width={18} height={18} />
              <span className="text-sm px-[4px] font-medium"> Log in</span>
            </a>
          </li>
        ) : (
          <li>
            <a className="flex items-center">
              <LogoutIcon className="auth-icon rotate" width={18} height={18} />
              <button
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

export default HeaderTop;
