import { ReactNode, useState } from "react";
import axios from "axios";

import Rose from "./components/Rose";

import questions from "./tools/questions";
import user_data from "./tools/data";

async function handlePost() {
        const url = "http://localhost:3000/runs"; 
        console.log("Attempting Post: ", user_data);
        try {
            user_data.noClicks += 1;
            const response = await axios.post(url, user_data, {
                                headers: {
                                     'Content-Type': 'application/json',
                                    },
                                });
            console.log(response);
        }
        catch (error) {
            console.log("Error", error);
        }
}

function App() {
  const [roseIndex, setRoseIndex] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);

  const nextQuestion = () => {
    if (questions.length === questionIndex+1) {
        // Send Data
        handlePost();

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
