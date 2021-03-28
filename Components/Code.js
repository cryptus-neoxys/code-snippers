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
        className="hover:bg-blue-900 focus:outline-none focus:shadow-outline px-3 py-1 mb-2 text-xs font-bold text-white bg-blue-800">
        {showCode ? "Hide Code" : "Show Code"}
      </button>
      {showCode && (
        <div className="relative">
          <pre className="p-2 text-gray-800 bg-gray-300 rounded-md">{code}</pre>
          <button
            className={`${
              copyText === "Copy" ? "text-gray-600" : "text-green-600"
            } font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline mb-2 absolute top-0 right-0 transform -translate-x-1 -translate-y-1`}
            type="submit"
            onClick={copyCode}>
            {copyText}
          </button>
        </div>
      )}
    </div>
  );
}
