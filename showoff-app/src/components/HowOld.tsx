import { ReactNode, useState } from "react";

import OBResponse from "./OBResponse";

function HowOld({ passQ }: { passQ: () => void }) {
    const [age, setAge] = useState(0);
    const [wrong, setWrong] = useState(false);
    const [correct, setCorrect] = useState(false);

    const onClk = () => {
        if (age == 27 || age == 28) 
            setCorrect(true);
        else
            setWrong(true);
    }
    
    if (correct) {
        return (
            <OBResponse
                onOkay={passQ}
                prompt="JK IT DOESNT MATTER SILLY!"
                btnStr="hehe"
            />
        );
    }

    if (wrong) {
        return (
            <OBResponse
                onOkay={()=>setWrong(false)}
                prompt="Hey Don't Lie!!!"
                btnStr="Okay Okay.."
            />
        );
    }

    return (
        <div className="quiz">
            <h1 className="quiz__heading">How Old Are You?</h1>
            <input className="input" type="number" min="0" max="99"
                value={age}
                onChange={()=>setAge(event.target.value)}
            />
            <button
                className="button button-primary"
                type="submit"
                onClick={onClk}  
            >
                Submit
            </button>
        </div>
    );
}

export default HowOld;
