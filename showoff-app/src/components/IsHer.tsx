import {ReactNode, useState} from "react";

import OBResponse from "./OBResponse";

function IsHer({passQ}: {passQ:()=>void}) {
    const [saidNo, setSaidNo] = useState(false);

  if (saidNo) {
    return (
      <>
        <OBResponse 
            onOkay={()=>setSaidNo(false)} 
            prompt={"You're Funny -_-"}
            btnStr={"Sorryyy"}
        />
      </>
    );
  }

   return (<div className="quiz">
     <h1 className="quiz__heading">Are You Joy?</h1>
     <div className="grid grid--1x2">
       <button
         className="button button-primary"
         onClick={() => passQ()}
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
