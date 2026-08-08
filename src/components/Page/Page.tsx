import React, { useState } from "react";
import Front from "../Front/Front";
import Back from "../Back/Back";

interface BackPage {
  title: string;
  instructions: string[];
  checks: string[];
}

interface Acknowledgement {
  title: string;
  author: string;
  credit: string[];
  name: string;
  website: string;
}

interface Props {
  zIndex: number;
  index: number;
  back?: BackPage;
  front?: string;
  conclusion?: string[];
  acknowledgement?: Acknowledgement;
}

const Page: React.FC<Props> = ({
  zIndex,
  index,
  back,
  front,
  conclusion,
  acknowledgement,
}) => {
  const [flipped, setFlipped] = useState(false);

  const onFlip = (): void => {
    setFlipped((flipped) => !flipped);
  };

  const flipStyles = {
    transition: `transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1),
    z-index 0.9s cubic-bezier(0.645, 0.045, 0.355, 1)`,
    transform: "rotateY(-180deg)",
    WebkitTransform: "rotateY(-180deg)",
    zIndex: flipped ? `${index}` : `${zIndex}`,
  };

  return (
    <div
      className="book__page"
      style={
        flipped ? flipStyles : { zIndex: flipped ? `${index}` : `${zIndex}` }
      }
      onClick={onFlip}
    >
      <Front
        flipped={flipped}
        setFlipped={setFlipped}
        content={front}
        acknowledgement={acknowledgement}
      />

      <Back flipped={flipped} content={back} conclusion={conclusion} />
    </div>
  );
};

export default Page;
