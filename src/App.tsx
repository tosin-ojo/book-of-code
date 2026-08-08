"use client";

import React from "react";
import Cover from "./components/Cover/Cover";
import Page from "./components/Page/Page";
import functions from "./data/functions";
import Mobile from "./components/Mobile/Mobile";

const App: React.FC = () => {
  const pages = [];
  let i = 0;
  let functionsLength = functions.length;

  while (i < functionsLength) {
    if (i === 0)
      pages.push(
        <Page
          zIndex={functionsLength - i}
          index={i}
          key={i}
          back={functions[i].task}
          acknowledgement={functions[i].acknowledgement}
        />
      );
    else if (i !== functionsLength - 1)
      pages.push(
        <Page
          zIndex={functionsLength - i}
          index={i}
          key={i}
          back={functions[i].task}
          front={functions[i].solution}
        />
      );
    if (i === functionsLength - 1)
      pages.push(
        <Page
          zIndex={functionsLength - i}
          index={i}
          key={i}
          conclusion={functions[i].conclusion}
          front={functions[i].solution}
        />
      );
    i++;
  }

  return (
    <>
      <div className="App">
        <div className="cover">
          <div className="book">
            <Cover />

            {pages}

            <Cover last />
          </div>
        </div>
      </div>
      <div className="mobile__app">
        <Mobile />
      </div>
    </>
  );
};

export default App;
