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
               <Rose size={roseIndex} />
            </div>
    </>
  );
}

export default App;
