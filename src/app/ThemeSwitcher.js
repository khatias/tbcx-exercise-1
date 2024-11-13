"use client";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { MoonIcon } from "../components/icon/MoonIcon"; 
import { SunIcon } from "../components/icon/SunIcon"; 

const themes = [
  { value: "light", label: "light", icon: <SunIcon className="w-5 h-5" /> },
  { value: "dark", label: "dark", icon: <MoonIcon className="w-5 h-5" /> },
  { value: "system", label: "system", icon: <SunIcon className="w-5 h-5" /> }, 
];

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (theme) => {
    setTheme(theme);
    setDropdownOpen(false); 
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) return null; 

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          {themes.find((t) => t.value === currentTheme)?.icon}
          <span className="ml-2">
            {themes.find((t) => t.value === currentTheme)?.label}
          </span>
        </div>
      </button>
      {dropdownOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg dark:bg-gray-700">
          {themes.map((themeOption) => (
            <button
              key={themeOption.value}
              className="flex items-center w-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              onClick={() => handleThemeChange(themeOption.value)}
            >
              {themeOption.icon}
              <span className="ml-2">{themeOption.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;


