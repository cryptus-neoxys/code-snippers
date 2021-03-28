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
      </Head>

      <main>
        <div className="my-12">
          <h1 className="text-blue-50 text-2xl">Code-Snippers</h1>
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
