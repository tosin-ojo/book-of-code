import React from "react";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo-2.png";

interface Props {
  last?: boolean;
}

const Cover: React.FC<Props> = ({ last }) => {
  const logoSrc = typeof Logo === "string" ? Logo : Logo.src;
  const logo2Src = typeof Logo2 === "string" ? Logo2 : Logo2.src;
  const lastStyle = {
    backgroundImage: "linear-gradient(90deg, #00c99a 0%, #64ffda 18%)",
  };

  return (
    <div className="book__cover" style={last ? lastStyle : {}}>
      <img src={last ? logo2Src : logoSrc} alt="" />
    </div>
  );
};

export default Cover;
