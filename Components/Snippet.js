import React from "react";
import Code from "./Code";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

export default function Snippet({ snippet, snippetDeleted }) {
  const { user, isLoading, error } = useUser();

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
        <span className=" px-2 py-1 text-xs font-bold text-blue-800 rounded-lg">
          {snippet.data.language}
        </span>
      </div>
      <p className="mb-4 text-gray-900">{snippet.data.description}</p>
      <Code code={snippet.data.code} />
      {user && !isLoading && user.sub == snippet.data.userId && (
        <>
          <Link href={`/edit/${snippet.id}`}>
            <a className="mx-2 font-bold text-green-600">Edit</a>
          </Link>
          <button
            onClick={deleteSnippet}
            className="mx-2 font-bold text-red-600">
            Delete
          </button>
        </>
      )}
    </div>
  );
}
