import Head from "next/head";
import SnippetForm from "../Components/SnippetForm";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next Snippet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-lg mx-auto">
        <h1 className="text-blue-50 mb-4 text-2xl">New Snippet</h1>
        <SnippetForm />
      </main>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
