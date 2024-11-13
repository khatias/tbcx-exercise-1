"use client";
import { useRef } from "react";
import navLogo from "../../assets/logo2.png";
import Link from "next/link";
import ThemeSwitcher from "../../app/ThemeSwitcher";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useMenuToggle } from "../../hooks/useMenuToggle";


function Header() {
  const [isOpen, toggleMenu] = useMenuToggle(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { user, isLoading } = useUser();

  useClickOutside([menuRef, buttonRef], () => toggleMenu(false));

  return (
    <header>
      <div className="container mx-auto 2xl:px-20">
        <nav className=" mx-auto flex flex-col gap-3 md:flex-row items-center p-4">
          <div className="w-full flex items-center justify-between">
            <Link href="/">
              <img className="h-16" src={navLogo.src} alt="Cafe Logo" />
            </Link>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                ref={buttonRef}
                className="burger-icon focus:outline-none"
              >
                <span className={`line ${isOpen ? "open" : ""}`} />
                <span className={`line ${isOpen ? "open" : ""}`} />
                <span className={`line ${isOpen ? "open" : ""}`} />
              </button>
            </div>
          </div>

          <ul
            ref={menuRef}
            className={`flex-col justify-between md:flex md:flex-row md:space-x-4 border-t-[1px] md:border-t-0 ${
              isOpen ? "flex" : "hidden"
            } sm:bg-transparent w-full`}
          >
            <li className="p-2 hover:bg-[#b32929] hover:text-white">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="p-2 hover:bg-[#b32929] hover:text-white">
              <Link href="/about">About</Link>
            </li>
            <li className="p-2 hover:bg-[#b32929] hover:text-white">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="p-2 hover:bg-[#b32929] hover:text-white">
              <Link href="/products">Products</Link>
            </li>

            <li className="p-2 hover:bg-[#b32929] hover:text-white">
              <Link className="hidden sm:block" href="/profile">
                Profile
              </Link>
            </li>
            <span className="flex gap-2 border-t-[1px] pt-8 md:pt-0 md:border-t-0">
            {!isLoading && !user ? (
              <li className="p-2 border border-gray-300 rounded bg-[#b32929] dark:bg-gray-700 dark:text-white ">
                <a href="/api/auth/login">Login</a>
              </li>
            ) : (
              <li className="p-2 border border-gray-300 rounded text-white bg-[#b32929] dark:bg-gray-700  ">
                <a href="/api/auth/logout">Logout</a>
              </li>
            )}

            <li>
              <ThemeSwitcher />
            </li>

    
            </span>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
