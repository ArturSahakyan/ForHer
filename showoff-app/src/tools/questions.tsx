
import IsHer from "../components/IsHer";
import BlueyChar from "../components/BlueyChar";
import OBResponse from "../components/OBResponse";

const questions = [
   (props: { passQ: () => void }) => <IsHer {...props} />,
   (props: { passQ: () => void }) => <BlueyChar {...props} />,

   // Finished Quiz Results!
   (props: { passQ: () => void}) => <OBResponse
        onOkay={props.passQ}
        prompt={"Congrats You're a Match! ^_^"}
        btnStr={"Aww Yay!"} />
];

export default questions;
