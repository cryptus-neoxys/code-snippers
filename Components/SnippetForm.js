import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SnippetForm({ snippet }) {
  const router = useRouter();
  const languages = [
    "Text",
    "C/C++",
    "JavaScript",
    "HTML",
    "CSS",
    "Nodejs",
    "Python",
    "Go",
    "Kotlin",
    "Bash",
    "Rust",
    "Swift",
    "R",
    "Java",
    "Haskell",
    "C#",
    "Ruby",
    "Sql",
    "Perl",
    "Scala",
    "Clojure",
    "Lisp",
    "Php",
    "Lua",
    "Caml",
    "Asm",
  ];

  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      code: snippet ? snippet.data.code : "",
      language: snippet ? snippet.data.language : "",
      description: snippet ? snippet.data.description : "",
      name: snippet ? snippet.data.name : "",
    },
  });
  const createSnippet = async (data) => {};
  const updateSnippet = async (data) => {};
  return (
    <form onSubmit={handleSubmit(snippet ? updateSnippet : createSnippet)}>
      <div className="mb-4">
        <label
          className="block mb-1 text-sm font-bold text-blue-200"
          htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className=" w-full px-4 py-2 text-gray-700 bg-white border rounded outline-none"
          ref={register({ required: true })}
        />
        {errors.name && (
          <p className="font-bold text-red-900">Name is required</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block mb-1 text-sm font-bold text-blue-200"
          htmlFor="language">
          Language
        </label>
        <select
          type="text"
          id="language"
          name="language"
          className=" w-full px-4 py-2 text-gray-700 bg-white border rounded outline-none"
          ref={register({ required: true })}>
          {languages.map((language) => (
            <option className="py-1">{language}</option>
          ))}
        </select>
        {errors.language && (
          <p className="font-bold text-red-900">Language is required</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block mb-1 text-sm font-bold text-blue-200"
          htmlFor="description">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows="3"
          className=" focus:outline-none w-full px-4 py-2 text-gray-700 border rounded-lg resize-none"
          placeholder="What does this snippet do?"
          ref={register({ required: true })}></textarea>
        {errors.description && (
          <p className="font-bold text-red-900">Description is required</p>
        )}
      </div>{" "}
      <div className="mb-4">
        <label
          className="block mb-1 text-sm font-bold text-blue-100"
          htmlFor="code">
          Code
        </label>
        <textarea
          name="code"
          id="code"
          rows="10"
          className="focus:outline-none w-full px-3 py-2 text-gray-700 border rounded-lg resize-none"
          placeholder="ex. console.log('helloworld')"
          ref={register({ required: true })}></textarea>
        {errors.code && (
          <p className="font-bold text-red-900">Code is required.</p>
        )}
      </div>
      <button
        className="hover:bg-green-700 focus:outline-none focus:shadow-outline px-4 py-2 mt-3 mr-2 font-bold text-white bg-green-600 rounded"
        type="submit">
        Save
      </button>
      <Link href="/">
        <a className="hover:bg-red-900 focus:outline-none focus:shadow-outline inline-block px-4 py-2 mt-3 mr-2 font-bold text-white bg-red-700">
          Cancel
        </a>
      </Link>
    </form>
  );
}
