import Head from "next/head";
import SnippetForm from "../Components/SnippetForm";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    if (!document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <Head>
        <title>Create Next Snippet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-lg mx-auto">
        <h1 className="mb-4 text-2xl text-blue-900" onClick={toggle}>
          New Snippet{" "}
          <span className="cursor-pointer">
            {theme === "dark" ? "🌚" : "🌞"}
          </span>
        </h1>
        <SnippetForm />
      </main>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
