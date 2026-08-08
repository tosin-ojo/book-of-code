import React from "react";

interface Content {
  title: string;
  instructions: string[];
  checks: string[];
}

interface Props {
  flipped: boolean;
  content?: Content;
  conclusion?: string[];
}

const Back: React.FC<Props> = ({ flipped, content, conclusion }) => {
  const flipStyle = {
    opacity: "0.03",
    transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
  };

  return (
    <>
      {conclusion && (
        <div className="back back__conclusion">
          {conclusion.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      )}
      <>
        {content && (
          <div className="back" style={!flipped ? flipStyle : {}}>
            <div>
              <h1>{content.title}</h1>
              {content.instructions.map((p) => (
                <p key={p}>{p}</p>
              ))}

              <div className="back__checks">
                <h2>Checks</h2>
                <ol>
                  {content.checks.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Back;
