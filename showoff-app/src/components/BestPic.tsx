import { ReactNode, useState } from "react";

import OBResponse from "./OBResponse";
import user_data from "../tools/data";

function BestPic( {passQ}:{passQ:()=>void} ) {
    const [chosen, setChosen] = useState(0);
    const [next, setNext] = useState(1);

    const max_pics = 11;

    const rotatePic = (chose:number) => {
        setChosen(chose);
        setNext(next+1);
    };

    if (next == max_pics) {
        user_data.favPic = chosen;
        return (
            <OBResponse
                onOkay={passQ}
                prompt="That's My Favorite Too!"
                btnStr="You're So Handsome ^_^"
            />
        );
    }

    return (
       <div className="quiz" style={{width: "80%"}}>
         <h1 className="quiz__heading">Which Pic is Best?</h1>
         <div className="grid grid--2x2">
            <div className="img-choice" style={{width:"30rem", height:"auto"}}>
           <img
             src={`./src/assets/Artur${chosen}.jpg`}
             onClick={() => rotatePic(chosen)}
           />
           </div>

            <div className="img-choice" style={{width:"30rem", height:"auto"}}>
           
           <img
             src={`./src/assets/Artur${next}.jpg`}
             onClick={() => rotatePic(next)}
           />

           </div>
           <h1 style={{justifySelf: "center", alignSelf:"center", color: "#ff8080"}}> Your Choice </h1>
           <h1 style={{justifySelf: "center", alignSelf:"center"}}> Next Choice </h1>
         </div>
       </div>);
}

export default BestPic;
