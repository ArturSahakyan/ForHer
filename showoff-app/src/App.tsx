import { ReactNode, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Rose from "./components/Rose";
import OBResponse from "./components/OBResponse";

import questions from "./tools/questions";

function App() {
  const [isHer, setIsHer] = useState(false);
  const [saidNo, setSaidNo] = useState(false);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [roseIndex, setRoseIndex] = useState(4);

  const nextQuestion = () => {
    if (questions.length === questionIndex+1) {
        setQuestionIndex(-1);
        return;
    }

    setQuestionIndex(questionIndex+1);
  };

  if (questionIndex === -1) {
    // Quiz Finished!
    return <></>;
  }

  return (
    <>
        <div style={{ height: "100vh", display: "flex"}}>
            <div className="container">
                {questions[questionIndex]}
            </div>
        </div>
    </>
  );

  if (saidNo) {
    return (
      <>
      <div style={{ height: "100vh", display: "flex" }}>
        <div className="container">
            <OBResponse 
                onOkay={()=>setSaidNo(false)} 
                prompt={"You're Funny -_-"}
                btnStr={"Sorryyy"}
            />
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
            <Rose size={roseIndex} />
          </div>
        </div>
      </>
    );
  }

  return <></>;
}

export default App;
