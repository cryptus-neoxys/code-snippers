import React, { useState } from "react";

export default function Code({ code }) {
  const [showCode, setShowCode] = useState(false);
  const [copyText, setCopyText] = useState("Copy");

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopyText("✅ Copied!");
    setTimeout(() => {
      setCopyText("Copy");
    }, 3000);
  };

  return (
    <div>
      <button
        onClick={() => setShowCode(!showCode)}
        className="hover:bg-blue-900 focus:outline-none focus:shadow-outline px-3 py-1 mb-2 text-sm font-bold text-white bg-blue-800 rounded-md">
        {showCode ? "Hide the Code 🙈" : "Show the Code 👇"}
      </button>
      {showCode && (
        <div className="relative">
          <pre className="px-2 py-4 pt-8 overflow-scroll text-gray-800 bg-gray-300 rounded-md">
            {code}
          </pre>
          <button
            className={`${
              copyText === "Copy" ? "text-gray-700" : "text-green-600"
            } font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline mb-2 absolute top-2 right-2 transform -translate-x-1 -translate-y-1`}
            type="submit"
            onClick={copyCode}>
            {copyText}
          </button>
        </div>
      )}
    </div>
  );
}
