"use client";
import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/outline";

interface PasswordInputProps {
  name: string;
  placeholder: string;
  dataCy: string; // Add dataCy prop
}

export default function PasswordInput({ name, placeholder, dataCy }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="relative">
      <label className="text-sm font-medium text-gray-700">{placeholder}</label>
      <div className="relative mt-1">
        <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          data-cy={dataCy} 
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          className="w-full p-4 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
        <button
        
          type="button"
          onClick={togglePassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        >
          <EyeIcon />
        </button>
      </div>
    </div>
  );
}
