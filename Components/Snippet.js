import React from "react";
import Code from "./Code";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Snippet({ snippet, snippetDeleted }) {
  const router = useRouter();

  const deleteSnippet = async () => {
    try {
      await fetch("/api/deleteSnippet", {
        method: "DELETE",
        body: JSON.stringify({ id: snippet.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      snippetDeleted();
    } catch (error) {
      console.error(error);
    }
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
        <a className="text-bold mx-2 font-bold text-blue-600 rounded">Edit</a>
      </Link>
      <button
        onClick={deleteSnippet}
        className="text-bold mx-2 font-bold text-red-600 rounded">
        Delete
      </button>
    </div>
  );
}
