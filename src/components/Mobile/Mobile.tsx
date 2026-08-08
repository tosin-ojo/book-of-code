import React from "react";
import Cards from "../Cards/Cards";
import mobileFunctions from "../../data/functionsMobile";

const Mobile: React.FC = () => {
  return (
    <>
      <div className="mobile__top">
        <h1 style={{ marginTop: "0.3em" }}>Book of Codes</h1>
        <h2>Oluwatosin Ojo</h2>
      </div>

      <div>
        {mobileFunctions.map((tasks, i) => (
          <div className="mobile" key={i}>
            <Cards information={tasks.task} solution={tasks.solution} />
          </div>
        ))}
      </div>

      <div className="mobile__bottom">
        <p>
          compiled from
          <span>Freecodecamp</span>
          <span>LeetCode</span>
        </p>
      </div>
    </>
  );
};

export default Mobile;
