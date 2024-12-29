import { ReactNode, useState} from "react";

import OBResponse from "./OBResponse";
import user_data from "../tools/data";

function BlueyChar({passQ}: {passQ: ()=>void}) {
    const [failed, setFailed] = useState(false);
    const [correct, setCorrect] = useState(false);

    if (failed) {
        return (
            <OBResponse 
                onOkay={()=>{setFailed(false)}}
                prompt="NO...I Like The Chocolate Chip Ones..."
                btnStr="ohhhhhhhh"
            />
        );
    }

    if (correct) {
     return(
            <OBResponse 
                onOkay={passQ}
                prompt="Yeah! Muffin :D"
                btnStr="Cute :)"
            />
        );
    }

    const assignFirst = (name) => {
        if (user_data.ogChar != "")
            return;

        user_data.ogChar = name;
    }

   return (
   <div className="quiz">
     <h1 className="quiz__heading">Who is My Favorite Bluey Character</h1>
     <div className="grid grid--2x2">
       <img
         src="./src/assets/Bluey.webp"
         className="img-choice"
         onClick={() => {setFailed(true); assignFirst("Bluey")}}
       />
       
       <img
         src="./src/assets/Bingo.webp"
         className="img-choice"
         onClick={() => {setFailed(true); assignFirst("Bingo")}}
       />

       <img
         src="./src/assets/Chili.webp"
         className="img-choice"
         onClick={() => {setFailed(true); assignFirst("Chili")}}
       />

       <img
         src="./src/assets/Muffin.webp"
         className="img-choice"
         onClick={() => {setCorrect(true); assignFirst("Muffin")}}
       />
     </div>
   </div>);
}

export default BlueyChar;
