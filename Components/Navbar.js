import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function Navbar() {
  const { user, error, isLoading } = useUser();
  return (
    <header>
      <div className="flex justify-between">
        <div>
          <h1 className="text-blue-50 text-2xl font-bold">Code Snippers</h1>
          <p className="text-blue-100">
            Create, save and share your code snippets from everyday coding
            adventures.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center mx-auto mb-6">
          {!user ? (
            <Link href="/api/auth/login">
              <a className="hover:underline text-xl font-bold text-blue-100 transition-all">
                Login
              </a>
            </Link>
          ) : (
            <>
              <Link href="/mySinppets">
                <a className="hover:underline hover:text-green-500 text-lg font-bold text-center text-green-200 transition-all duration-200 ease-in-out">
                  My Snippets
                </a>
              </Link>
              <Link href="/api/auth/logout">
                <a className="hover:underline hover:text-red-500 text-lg font-bold text-center text-red-200 transition-all duration-200 ease-in-out">
                  Logout
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
      {user && !isLoading ? (
        <Link href="/new">
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
