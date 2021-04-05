import React from "react";
import { getSnippetById } from "../../utils/Fauna";

import Snippet from "../../Components/Snippet";

export default function Home({ snippet }) {
  return <Snippet snippet={snippet} />;
}

export async function getServerSideProps(context) {
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
}
