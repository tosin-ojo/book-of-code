import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Flip from "../../assets/flip.svg";
import FlipWhite from "../../assets/flip-white.svg";

interface Information {
  title: string;
  instructions: string[];
  checks: string[];
}

interface Props {
  information: Information;
  solution: string;
}

const Cards: React.FC<Props> = ({ information, solution }) => {
  const flipSrc = typeof Flip === "string" ? Flip : Flip.src;
  const flipWhiteSrc = typeof FlipWhite === "string" ? FlipWhite : FlipWhite.src;
  const [flip, setFlip] = useState(false);
  const [copy, setCopy] = useState("Copy");

  const handleCopy = async () => {
    try {
      if (solution) await navigator.clipboard.writeText(solution);

      setCopy("Copied!");

      setTimeout(() => {
        setCopy("Copy");
      }, 2500);
    } catch (error) {
      console.log("Could not write to clipBoard!");
    }
  };

  const flipCard = () => {
    setFlip((flip) => !flip);
  };

  const flipStyle = {
    transform: "rotateY(180deg)",
    WebkitTransform: "rotateY(180deg)",
  };

  const flippedStyle = {
    transform: "translateZ(0)",
    WebkitTransform: "translateZ(0)",
  };

  return (
    <div className="card" style={flip ? flipStyle : {}}>
      <div className="card__front">
        <div className="back" style={flip ? flippedStyle : {}}>
          <div>
            <h1>{information.title}</h1>
            {information.instructions.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <div className="back__checks">
              <h2>Checks</h2>
              <ol>
                {information.checks.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ol>
            </div>
            <div className="card__flip" onClick={flipCard}>
              <img src={flipSrc} alt="flip" />
            </div>
          </div>
        </div>
      </div>
      <div className="card__back">
        <div className="code card__code">
          <p className="code__lang">Javascript</p>
          <div className="code__wrapper">
            <SyntaxHighlighter language="javascript" style={obsidian}>
              {solution}
            </SyntaxHighlighter>
            <button onClick={handleCopy}>{copy}</button>
            <div className="card__flip" onClick={flipCard}>
              <img src={flipWhiteSrc} alt="flip" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
