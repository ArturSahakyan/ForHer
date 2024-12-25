import {ReactNode, useState} from "react";

function Results( {passQ}:{passQ:()=>void} ) { 
    return (
    <div className="quiz">
        <h1 className="quiz__heading">Congrats! You're A Match!</h1>
        <h1 className="quiz__heading"> You Got <strong style={{color:"red"}}>0</strong> Wrong </h1>
        <h1 className="quiz__heading"> </h1>
        <button
              className="button button-primary"
              onClick={passQ}
        >
        Aww Yay!
        </button>
    </div>
    );
}

export default Results;
