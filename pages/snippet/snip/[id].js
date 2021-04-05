import React, { useEffect, useState } from "react";
import { getSnippetById } from "../../../utils/Fauna";

export default function CreateSnippet({ snippet }) {
  const [code, setCode] = useState("");
  useEffect(() => {
    snippet ? setCode(snippet.data.code) : setCode("Error\nCode Not Found");
  }, []);
  return (
    <div>
      <textarea
        className="focus:outline-none w-full px-3 py-2 text-gray-700 border rounded-lg resize-none"
        name="code"
        id="code"
        rows="16"
        value={code}
        onChange={(e) => setCode(e.currentTarget.value)}></textarea>
      <div>
        <h2 className="inline-block text-4xl font-bold text-gray-800 bg-blue-700">
          VS CODE
        </h2>
        <div className="w-full px-3 py-2 text-gray-700 bg-white border rounded-lg">
          {code}
        </div>
      </div>
      <div>
        <h2 className="inline-block text-4xl font-bold text-gray-800 bg-green-500">
          Atom
        </h2>
        <div className="w-full px-3 py-2 text-gray-700 bg-white border rounded-lg">
          {code}
        </div>
      </div>
      <div>
        <h2 className="inline-block text-4xl font-bold text-gray-800 bg-yellow-500">
          Sublime Text
        </h2>
        <div className="w-full px-3 py-2 text-gray-700 bg-white border rounded-lg">
          {code}
        </div>
      </div>
    </div>
  );
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
