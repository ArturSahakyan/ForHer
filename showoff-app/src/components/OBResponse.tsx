import {ReactNode, useState} from "react";

function OBResponse({onOkay, prompt, btnStr}: 
                        {onOkay: Function, prompt: string, btnStr: string}) {
    
    return (
    <div className="quiz">
        <h1 className="quiz__heading">{prompt}</h1>
        <button
              className="button button-primary"
              onClick={()=>onOkay()}
        >
        {btnStr}
        </button>
    </div>
    );
}

export default OBResponse;
