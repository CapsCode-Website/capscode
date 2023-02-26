import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Loader from "../Loading/Loader";
import "./MarkDownReaderComponent.css";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterIcon,
  TwitterShareButton,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { BsArrowUpCircleFill } from "react-icons/bs";
const MarkDownReaderComponent = ({
  link,
  like,
  heart,
  title,
  shortTitle,
  blogLink,
}) => {
  const [mdText, setMdText] = useState("");
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  const CopyCodeToClipboard = () => {
    const copyButtonLabel = "Copy Code";

    // you can use a class selector instead if you, or the syntax highlighting library adds one to the 'pre'.
    let blocks = document.querySelectorAll("pre");

    blocks.forEach((block) => {
      // only add button if browser supports Clipboard API
      if (navigator.clipboard) {
        let button = document.createElement("button");
        button.innerText = copyButtonLabel;
        button.className = "CopyToClipboardButton";

        button.addEventListener("click", copyCode);
        block.appendChild(button);
      }
    });

    async function copyCode(event) {
      const button = event.srcElement;
      const pre = button.parentElement;
      let code = pre.querySelector("code");
      let text = code.innerText;
      await navigator.clipboard.writeText(text);

      button.innerText = "Code Copied";
      setTimeout(() => {
        button.innerText = copyButtonLabel;
      }, 1000);
    }
  };

  useEffect(() => {
    import(`../../${link}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => {
            setMdText(res);
            CopyCodeToClipboard();
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, [link]);

  //commenetd before making md file local and written above use effect insted of this commeneted one
  // useEffect(() => {
  // import("../../blogfiles/html-css/variable-in-css/index.md")
  //   .then((module) => {
  //     console.log(module.default);
  //   })
  //   .catch(console.log);
  // CopyCodeToClipboard();
  // fetch(link)
  //   .then((response) => {
  //     if (response.ok) return response.text();
  //     else return Promise.reject("Didn't fetch text correctly");
  //   })
  //   .then((text) => {
  //     setMdText(text);
  //     CopyCodeToClipboard();
  //   })
  //   .catch((error) => console.error(error));
  // }, [link]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      {mdText === "" ? (
        <div style={{ marginTop: "90px" }}>
          <Loader />
        </div>
      ) : (
        <>
          <h1
            style={{
              textAlign: "center",
              fontSize: "40px",
              padding: "15px",
              lineHeight: "46px",
              margin: "14px 0px 0px 0px",
            }}
          >
            {title}
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FacebookShareButton
              url={"https://www.capscode.in/" + blogLink}
              quote={shortTitle}
              hashtag="#webdevelopment"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <LinkedinShareButton
              url={"https://www.capscode.in/" + blogLink}
              title={title}
              summary={shortTitle}
              source="https://www.capscode.in"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <TwitterShareButton
              url={"https://www.capscode.in" + blogLink}
              title={shortTitle}
              hashtags={[
                "capscode",
                "javascript",
                "reactjs",
                "coding",
                "frontend",
                "backend",
                "webdevelopment",
                "htmlcss",
              ]}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <TelegramShareButton
              url={"https://www.capscode.in/" + blogLink}
              title={shortTitle}
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>

            <WhatsappShareButton
              url={"https://www.capscode.in/" + blogLink}
              title={shortTitle}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
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
                      background: "#d3d3d396",
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

          {showButton && (
            <button
              style={{
                position: "sticky",
                bottom: 10,
                float: "right",
                // margin: "12px",
                // height: "40px",
                // width: "40px",
                fontSize: "2rem",
                color: "darkgrey",
                // background: "rgba( 255, 255, 255, 0.2 )",
                // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                // backdropFilter: "blur( 2px )",
                // borderRadius: "50%",
                // border: "1px solid rgba( 255, 255, 255, 0.18 )",
                border: "none",
                background: "transparent",
              }}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // for smoothly scrolling
                });
              }}
            >
              <BsArrowUpCircleFill />
            </button>
          )}
        </>
      )}
    </>
  );
};

export default MarkDownReaderComponent;
