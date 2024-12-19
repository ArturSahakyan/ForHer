import { ReactNode, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Rose from "./components/Rose";

function App() {
  const [isHer, setIsHer] = useState(false);
  const [saidNo, setSaidNo] = useState(false);

  const [roseIndex, setRoseIndex] = useState(4);

  if (saidNo) {
    return (
      <>
      <div style={{ height: "100vh", display: "flex" }}>
        <div className="container">
          <div className="quiz">
            <h1 className="quiz__heading">You're funny -_-</h1>
            <button
              className="button button-primary"
              onClick={() => setSaidNo(false)}
            >
              Try Again
            </button>
          </div>
        </div>
          </div>
      </>
    );
  }

  if (!isHer) {
    return (
      <>
        <div style={{ height: "100vh", display: "flex" }}>
          <div className="container">
            <div className="quiz">
              <h1 className="quiz__heading">Are You NAME?</h1>
              <div className="grid grid--1x2">
                <button
                  className="button button-primary"
                  onClick={() => setIsHer(true)}
                >
                  Yes
                </button>
                <button
                  className="button button-primary"
                  onClick={() => setSaidNo(true)}
                >
                  No
                </button>
              </div>
            </div>
            <Rose size={roseIndex} />
          </div>
        </div>
      </>
    );
  }

  return <></>;
}

export default App;
