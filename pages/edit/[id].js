import Head from "next/head";

import { getSnippetById } from "../../utils/Fauna";
import SnippetForm from "../../Components/SnippetForm";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Home({ snippet }) {
  return (
    <div>
      <Head>
        <title>Update Next Snippet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-lg mx-auto">
        <h1 className="text-blue-50 mb-4 text-2xl">Update Snippet</h1>
        <SnippetForm snippet={snippet} />
      </main>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    try {
      const id = context.params.id;
      const snippet = await getSnippetById(id);
      return {
        props: { snippet },
      };
    } catch (error) {
      console.trace(error);
      context.res.statusCode = 302;
      context.res.setHeader("Location", `/`);
      return { props: {} };
    }
  },
});
