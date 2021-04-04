import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import vsLight from "prism-react-renderer/themes/vsLight";
import { useTheme } from "next-themes";

export default function Code({ code, language }) {
  const [showCode, setShowCode] = useState(false);
  const [copyText, setCopyText] = useState("Copy");

  const { theme, setTheme } = useTheme();

  const languages = {
    Text: "markup",
    HTML: "markup",
    C: "c",
    "C++": "cpp",
    CSS: "css",
    Python: "python",
    JavaScript: "javascript",
    Typescript: "typescript",
    JSX: "jsx",
    TSX: "tsx",
    Nodejs: "js-extras",
    JSON: "json",
    MarkDown: "markdown",
    Bash: "bash",
    GraphQL: "graphql",
    Go: "go",
    Java: "clike",
    SASS: "sass",
    SCSS: "scss",
    "Objective-C": "objectivec",
    Caml: "ocaml",
    SQL: "sql",
    "Web Assembly": "wasm",
    Yaml: "yaml",
  };
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
          <Highlight
            {...defaultProps}
            code={code}
            language={languages[language]}
            theme={theme === "dark" ? vsDark : vsLight}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={`${className} px-2 py-4 pt-8 overflow-scroll rounded-md`}
                style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
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

/* 
{
  "HTML": "markup",
  "Text": "markup      
  "Bash": "bash",    
  "Java": "clike",    
  "C": "c",
  "C++": "cpp",  
  "CSS": "css",  
  "JavaScript": "javascript",          
  "JSX: "jsx",  
  "Nodejs": "js-extras",        
  "Go": "go",
  "GraphQL": "graphql
  "JSON": "json",
  "MarkDown": "markdown",
  "Objective-C": "objectivec",
  "Caml": "ocaml",
  "Python": "python
  "SASS": "sass",    
  "SCSS": "scss",
  "SQL": "sql",
  : "stylus",
  "TSX": "tsx",
  "Typescript": "typescript",
  "Web Assembly": "wasm",
  "Yaml": "yaml",
}
*/
