// import "../styles/app.css";
import Head from "next/head";
import useSWR from "swr";

import Snippet from "../Components/Snippet";
import Navbar from "../Components/Navbar";

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
          <Navbar />
          {/* <a
            target="_blank"
            rel="author"
            href="https://github.com/cryptus-neoxys/code-snippers">
            <img
              className="inline-block h-8"
              src="https://www.vectorlogo.zone/logos/github/github-tile.svg"
              alt="Checkout GitHub"
            />
          </a> */}
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
