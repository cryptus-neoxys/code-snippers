// import "../styles/app.css";
import Head from "next/head";
import useSWR from "swr";
import Link from "next/link";

import Snippet from "../Components/Snippet";

export default function Home() {
  const { data: snippets, mutate } = useSWR("/api/snippets");
  return (
    <div className="">
      <Head>
        <title>Code-Snippers</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A website to save, share and create snippets from your everyday coding adventures"
        />
      </Head>

      <main>
        <div className="my-12">
          <div className="flex items-center justify-between">
            <h1 className="text-blue-50 text-2xl">Code-Snippers</h1>
            <a
              target="_blank"
              rel="author"
              href="https://github.com/cryptus-neoxys/code-snippers">
              <img
                className="inline-block h-8"
                src="https://www.vectorlogo.zone/logos/github/github-tile.svg"
                alt="Checkout GitHub"
                srcset=""
              />
            </a>
          </div>
          <p className="text-blue-100">
            Create, save and share your code snippets from everyday coding
            adventures.
          </p>
          <Link href="/new">
            <a className="hover:bg-blue-900 focus:outline-none focus:shadow-outline inline-block px-4 py-2 mt-3 font-bold text-white bg-blue-700 rounded">
              Create a Snippet!
            </a>
          </Link>
        </div>
        {snippets &&
          snippets.map((snippet) => (
            <Snippet
              key={snippet.id}
              snippet={snippet}
              snippetDeleted={mutate}
            />
          ))}
      </main>
    </div>
  );
}
