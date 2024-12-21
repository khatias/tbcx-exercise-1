"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Sort: React.FC = () => {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    const params = new URLSearchParams(window.location.search);
    params.set("sort", value);

    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-between items-center my-4">
      <select
        onChange={handleChange}
        defaultValue=""
        className="p-2 border border-gray-300 dark:border-gray-700 rounded-sm bg-[#f9f9f9] dark:bg-[#1a1a1a] focus:outline-none focus:border-[#7743e6] focus:ring-2 focus:ring-[#7743e6] transition-all disabled:bg-[#eaeaea] disabled:cursor-not-allowed"
      >
        <option value="" disabled>
          Select Sorting Type
        </option>
        <option value="asc">Price Low to High</option>
        <option value="desc">Price High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
