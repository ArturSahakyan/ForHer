import { ReactNode, useState} from "react";


function BlueyChar({passQ}: {passQ: ()=>void}) {

   return (
   <div className="quiz">
     <h1 className="quiz__heading">Who is My Favorite Bluey Character</h1>
     <div className="grid grid--2x2">
       <img
         src="./src/assets/Bluey.webp"
         className="img-choice"
         onClick={() => passQ()}
       />
       
       <img
         src="./src/assets/Bingo.webp"
         className="img-choice"
         onClick={() => passQ()}
       />

       <img
         src="./src/assets/Chili.webp"
         className="img-choice"
         onClick={() => passQ()}
       />

       <img
         src="./src/assets/Muffin.webp"
         className="img-choice"
         onClick={() => {}}
       />
     </div>
   </div>);
}

export default BlueyChar;
