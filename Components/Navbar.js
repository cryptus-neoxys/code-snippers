import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { user, error, isLoading } = useUser();

  const { theme, setTheme } = useTheme();

  const toggle = () => {
    if (!document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <header>
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-900 cursor-pointer">
            Code Snippers
            <span className="cursor-pointer" onClick={toggle}>
              {theme === "dark" ? "🌚" : "🌞"}
            </span>
          </h1>
          <p className="text-blue-700">
            Create, save and share your code snippets from everyday coding
            adventures.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center mx-auto mb-6">
          {!user ? (
            <Link href="/api/auth/login">
              <a className="hover:underline hover:text-green-700 text-lg font-bold text-center text-green-500 transition-all duration-200 ease-in-out">
                Login
              </a>
            </Link>
          ) : (
            <>
              <Link href="/mySnippets">
                <a className="hover:underline hover:text-green-700 text-lg font-bold text-center text-green-400 transition-all duration-200 ease-in-out">
                  My Snippets
                </a>
              </Link>
              <Link href="/api/auth/logout">
                <a className="hover:underline hover:text-red-700 text-lg font-bold text-center text-red-400 transition-all duration-200 ease-in-out">
                  Logout
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
      {user && !isLoading ? (
        <Link href="/snippet/new">
          <a className="hover:bg-blue-900 focus:outline-none focus:shadow-outline inline-block px-4 py-2 mt-3 font-bold text-white bg-blue-700 rounded">
            Create a Snippet!
          </a>
        </Link>
      ) : (
        <Link href="/api/auth/login">
          <a className="hover:bg-blue-900 focus:outline-none focus:shadow-outline inline-block px-4 py-2 mt-3 font-bold text-white bg-blue-700 rounded">
            Login to Create Snippets!
          </a>
        </Link>
      )}
    </header>
  );
}
