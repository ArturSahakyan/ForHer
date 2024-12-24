import {ReactNode, useState} from "react";

import OBResponse from "./OBResponse";

function LikeMe({passQ}: {passQ:()=>void}) {
    const [position, setPosition] = useState({top: "50%", left: "50%"});
    const [tpClicked, setTPClicked] = useState(false);
    const [tpCount,  setTPCount] = useState(0);

    const teleportButton = () => {
        const randomTop = Math.random() * (window.innerHeight - 50); // Ensure button stays within bounds
        const randomLeft = Math.random() * (window.innerWidth - 100); // Ensure button stays within bounds
        setPosition({ top: `${randomTop}px`, left: `${randomLeft}px` });
        setTPClicked(true);
        setTPCount(tpCount+1);
    };

    // Tried pressing "No" Too Much
    if (tpCount >= 5) {
        return (
            <OBResponse 
                onOkay={() => {setTPClicked(false); setTPCount(0);}}
                prompt="Stop Doing That :("
                btnStr="Fiiiiine"
            />
        );
    }

    return (
    <div className="quiz">
        <h1 className="quiz__heading">Do You Like Me? :)</h1>
        <img src="./src/assets/Eyes.webp" style={{height: "20rem", width: "20rem"}}/>
        <br/>
        <div className="grid grid--1x2">
            <button
            className="button button-pink"
            onClick={() => passQ()}
            >
            Yes
            </button>

            {tpClicked ? 
            <button
            className="button button-primary"
            style={{
              position: 'absolute',
              top: position.top,
              left: position.left,
              transform: 'translate(-50%, -50%)', // Keep the button centered at the new position
              padding: '10px 20px',
            }} 
            onClick={teleportButton}
            onMouseEnter={teleportButton}
            >
            No
            </button>

            : 
            <button
            className="button button-primary"
            onClick={teleportButton}
            onMouseEnter={teleportButton}
            >
            No
            </button>}

            
        </div>
    </div>
    );
}

export default LikeMe;
