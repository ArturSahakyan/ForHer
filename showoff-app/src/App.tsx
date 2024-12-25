import { ReactNode, useState } from "react";

import Rose from "./components/Rose";

import questions from "./tools/questions";

function App() {
  const [roseIndex, setRoseIndex] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);

  const nextQuestion = () => {
    if (questions.length === questionIndex+1) {
        window.location.reload();
        return;
    }
    
    setRoseIndex(roseIndex+1);
    setQuestionIndex(questionIndex+1);
  };

  const CurrentQuestion = questions[questionIndex];

  return (
    <>
            <div className="container">
               <CurrentQuestion passQ={nextQuestion} /> 
               {
                (roseIndex != 6)
                    ? <Rose size={roseIndex} />
                    : <div style={{display:"block", width: "100%", height: "100%"}}></div> 
               }
            </div>
    </>
  );
}

export default App;
