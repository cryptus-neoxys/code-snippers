import { useUser } from "@auth0/nextjs-auth0";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header({ title, subtitle }) {
  const { user, isLoading, error } = useUser();

  const { theme, setTheme } = useTheme();

  const toggle = () => {
    if (!document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <header className="my-12">
      <h1 className="text-2xl text-blue-900 cursor-pointer" onClick={toggle}>
        {title}
        {theme === "dark" ? "🌚" : "🌞"}
      </h1>
      {subtitle && <p className="text-blue-700">{subtitle}</p>}
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
