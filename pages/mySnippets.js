import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import React from "react";
import useSWR from "swr";

import Header from "../Components/Header";
import Snippet from "../Components/Snippet";

export default function mySnippets() {
  const { data: snippets, mutate } = useSWR("/api/mySnippets");
  const { user, error, isLoading } = useUser();
  console.log(user);
  return (
    <div>
      <Head>
        <title>{!isLoading && user && user.given_name}'s snippets</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A website to save, share and create snippets from your everyday coding adventures"
        />
      </Head>

      <main>
        <div className="my-12">
          <Header title="My Snippets" />
        </div>
        {snippets &&
          snippets.map((snippet) => (
            <Snippet key={snippet.id} snippet={snippet} />
          ))}
      </main>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
