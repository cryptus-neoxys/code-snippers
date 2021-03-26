import React from "react";
import Code from "./Code";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Snippet({ snippet, snippetDeleted }) {
  const router = useRouter();

  const deleteSnippet = async () => {
    // !TODO
    // Use api to delete snippet
  };
  return (
    <div className="p-4 my-2 bg-gray-100 rounded-md shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold text-gray-800">{snippet.data.name}</h2>
        <span className="px-3 py-1 text-xs font-bold text-blue-800 rounded-lg">
          {snippet.data.language}
        </span>
      </div>
      <p className="mb-4 text-gray-900">{snippet.data.description}</p>
      <Code code={snippet.data.code} />
      <Link href={`/edit/${snippet.id}`}>
        <a className="mr-2 text-gray-800">Edit</a>
      </Link>
      <button onClick={deleteSnippet} className="mr-2 text-gray-500 bg-red-600">
        Delete
      </button>
    </div>
  );
}
