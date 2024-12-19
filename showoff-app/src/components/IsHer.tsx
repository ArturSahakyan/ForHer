import {ReactNode, useState} from "react";

function IsHer() {
    const [isHer, setIsHer] = useState(false);
    const [saidNo, setSaidNo] = useState(false);

   return (<div className="quiz">
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
   </div>);
}

export default IsHer;
