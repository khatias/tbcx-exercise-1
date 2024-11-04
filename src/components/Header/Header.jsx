"use client";
import { useState, useRef, useEffect } from "react";
import navLogo from "../../assets/logo2.png";
import MenuIcon from "../../assets/MenuIcon.png";
import CloseIcon from "../../assets/close.png";
import Link from "next/link";
import ThemeSwitcher from "../../app/ThemeSwitcher";
import { useUser } from "@auth0/nextjs-auth0/client";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { user, isLoading } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="container mx-auto">
        <nav className="container mx-auto flex flex-col gap-3 md:flex-row items-center p-4">
          <div className="w-full flex items-center justify-between">
            <Link href="/">
              <img className="h-20" src={navLogo.src} alt="Cafe Logo" />
            </Link>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                ref={buttonRef}
                className="text-gray-800 focus:outline-none"
              >
                {isOpen ? (
                  <img className="w-4" src={CloseIcon.src} alt="Close Menu" />
                ) : (
                  <img className="w-9" src={MenuIcon.src} alt="Open Menu" />
                )}
              </button>
            </div>
          </div>

          <ul
            ref={menuRef}
            className={`flex-col md:flex md:flex-row md:space-x-4 border-t-2 md:border-t-0 ${
              isOpen ? "flex" : "hidden"
            } sm:bg-transparent w-full`}
          >
            <li className="p-2 hover:bg-[#a65e3f] hover:text-white">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="p-2 hover:bg-[#a65e3f] hover:text-white">
              <Link href="/about">About</Link>
            </li>
            <li className="p-2 hover:bg-[#a65e3f] hover:text-white dark:text-red-200">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="p-2 hover:bg-[#a65e3f] hover:text-white">
              <Link href="/products">Products</Link>
            </li>

            <li className="p-2 hover:bg-[#a65e3f] hover:text-white">
              <Link className="hidden sm:block" href="/profile">
                Profile
              </Link>
            </li>

            {!isLoading && !user ? (
              <li className="p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white">
                <a href="/api/auth/login">Login</a>
              </li>
            ) : (
              <li className="p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white">
                <a href="/api/auth/logout">Logout</a>
              </li>
            )}


            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
