import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Acknowledgement {
  title: string;
  author: string;
  credit: string[];
  name: string;
  website: string;
}

interface Props {
  flipped: boolean;
  content?: string;
  acknowledgement?: Acknowledgement;
  setFlipped: React.Dispatch<React.SetStateAction<boolean>>;
}

const Front: React.FC<Props> = ({
  acknowledgement,
  flipped,
  content,
  setFlipped,
}) => {
  const [copy, setCopy] = useState("Copy");

  const preventFlipping = () => {
    setFlipped(true);
  };

  const handleCopy = async () => {
    preventFlipping();

    try {
      if (content) await navigator.clipboard.writeText(content);

      setCopy("Copied!");

      setTimeout(() => {
        setCopy("Copy");
      }, 2500);
    } catch (error) {
      console.log("Could not write to clipBoard!");
    }
  };

  const flipStyle = {
    opacity: "0.03",
    transition: "opacity 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",
  };

  return (
    <>
      {acknowledgement ? (
        <div className="front" style={flipped ? flipStyle : {}}>
          <div>
            <h1>{acknowledgement.title}</h1>
            <h2>{acknowledgement.author}</h2>
          </div>
          <p>
            compiled from
            {acknowledgement.credit.map((credit) => (
              <span key={credit}>{credit}</span>
            ))}
          </p>
          <div>
            {acknowledgement.name}
            <span>{acknowledgement.website}</span>
          </div>
        </div>
      ) : (
        <div className="front__code" style={flipped ? flipStyle : {}}>
          <div className="code" onClick={preventFlipping}>
            <p className="code__lang">Javascript</p>
            <div className="code__wrapper">
              <SyntaxHighlighter language="javascript" style={obsidian}>
                {`${content}`}
              </SyntaxHighlighter>
              <button onClick={handleCopy}>{copy}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Front;
