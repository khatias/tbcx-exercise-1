"use client";
import React, { useState } from "react";
import { useLocale } from "next-intl";
import PasswordInput from "@/src/components/Inputs/PasswordInput";
import { supabase } from "../supabase/supabase";

export default function Login() {
  const locale = useLocale();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await fetch(`/${locale}/api/auth/login`, {
      method: "POST",
      body: new URLSearchParams({
        email,
        password,
      }),
    });

    if (!response.ok) {
      const result = await response.json();
      setErrorMessage(result.error);
    } else {
      window.location.href = `/${locale}/products`;
    }
  };

  const handleGithubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/${locale}/api/auth/callback`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-grow items-center justify-center h-full bg-gray-100 dark:bg-black ">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-sm m-4 rounded-xl p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Log In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-3">
            <label
              htmlFor="email"
              className="font-medium text-gray-800 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
          data-cy="login-email-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label
              htmlFor="password"
              className="font-medium text-gray-800 dark:text-gray-300"
            >
              Password
            </label>
            <PasswordInput />
          </div>

          <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <a
              href="./signup"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none"
            >
              Sign Up
            </a>
          </div>
          <button
              data-cy="login-submit-button"
            onClick={handleGithubLogin}
            className="w-full py-2 px-4 bg-gray-800 text-white rounded-md mt-4"
          >
            Sign in with GitHub
          </button>
          <button
            className="w-full py-3 bg-customPurple text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none dark:bg-blue-700 dark:hover:bg-blue-800"
            type="submit"
          >
            Log In
          </button>

          {errorMessage && (
            <div data-cy='login-error-message' className="text-center text-red-500 mt-4">
              <strong>{errorMessage}</strong>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
