import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./MarkDownReaderComponent.css";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
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

  return (
    <>
      {mdText == "" ? (
        <p>loading.........</p>
      ) : (
        <>
          <h1
            style={{ textAlign: "center", fontSize: "40px", padding: "15px" }}
          >
            {title}
          </h1>
          <ReactMarkdown
            children={mdText}
            className="markdown-body"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
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