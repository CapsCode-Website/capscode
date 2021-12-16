import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./MarkDownReaderComponent.css";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  a11yDark,
  a11yLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
const MarkDownReaderComponent = ({ link, like, heart, title }) => {
  const [mdText, setMdText] = useState("");

  useEffect(() => {
    fetch(link)
      .then((response) => {
        if (response.ok) return response.text();
        else return Promise.reject("Didn't fetch text correctly");
      })
      .then((text) => {
        setMdText(text);
        // console.log(mdText);
      })
      .catch((error) => console.error(error));
  }, [link]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {mdText == "" ? (
        <p>loading.........</p>
      ) : (
        <>
          <h1
            style={{
              textAlign: "center",
              fontSize: "40px",
              padding: "15px",
              lineHeight: "46px",
            }}
          >
            {title}
          </h1>
          <ReactMarkdown
            children={mdText}
            className="markdown-body"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={a11yDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code
                    className={className}
                    {...props}
                    style={{
                      background: "lightgrey",
                      padding: "2px",
                      borderRadius: "2px",
                    }}
                  >
                    {children}
                  </code>
                );
              },
            }}
          />
        </>
      )}

      {/* <div
        style={{
          height: "130px",
          background: "red",
          width: "50px",
          position: "fixed",
          top: 150,
          right: 0,
        }}
      >
        <button>Like</button>
        <span>{like}</span>
        <button>Love</button>
      </div> */}
    </>
  );
};

export default MarkDownReaderComponent;
