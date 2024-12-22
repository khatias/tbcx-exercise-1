"use client";
import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/outline";
interface PasswordInputProps {
  name: string;
  placeholder: string;
}

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="relative">
      <label className="text-sm font-medium text-gray-700"></label>
      <div className="relative mt-1">
        <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
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
