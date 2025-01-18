"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { FaSearch } from "react-icons/fa";
import { useLocale } from "next-intl";

function Search() {
  const router = useRouter();
  const locale = useLocale();
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 750);

  useEffect(() => {
    if (!query) {
      router.push(`/${locale}/products`);
    } else {
      router.push(`/${locale}/products?search=${encodeURIComponent(query)}`);
    }
  }, [query, locale, router]);

  return (
    <div>
      <div className="p-2 border border-gray-300 dark:border-gray-700 rounded-sm bg-[#f9f9f9] dark:bg-[#1a1a1a] mt-3 flex items-center gap-3 w-full focus-within:border-[#7743e6] focus-within:ring-2 focus-within:ring-[#7743e6] md:m-0 md:min-w-96  lg:min-w-[500px]">
        <FaSearch className="bg-red border-none" />
        <input
          className="bg-transparent focus:outline-none focus:border-none"
          value={text}
          placeholder="Search product..."
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
