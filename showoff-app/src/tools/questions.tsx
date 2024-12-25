
import IsHer from "../components/IsHer";
import BlueyChar from "../components/BlueyChar";
import LikeMe from "../components/LikeMe";
import BestPic from "../components/BestPic";
import HowOld from "../components/HowOld";
import Results from "../components/Results";

const questions = [
   (props: { passQ: () => void }) => <IsHer {...props} />,
   (props: { passQ: () => void }) => <LikeMe {...props} />,
   (props: { passQ: () => void }) => <BlueyChar {...props} />,
   (props: { passQ: () => void }) => <BestPic {...props} />,
   (props: { passQ: () => void }) => <HowOld {...props} />,

   // Finished Quiz Results!
   (props: { passQ: () => void}) => <Results {...props} />
];

export default questions;
