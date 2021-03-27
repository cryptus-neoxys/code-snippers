import Head from "next/head";

import SnippetForm from "../../components/SnippetForm";
import { getSnippetsById } from "../../utils/Fauna";

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

export async function getServerSideProps(context) {
  try {
    const id = context.params.id;
    const snippet = await getSnippetsById;
    return {
      props: { snippet },
    };
  } catch (error) {
    console.error(error);
    context.res.statusCode = 302;
    context.res.setHeader("Locations", "/");
    return { props: {} };
  }
}
