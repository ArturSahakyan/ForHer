import { ReactNode, useState } from "react";

function Rose({size}: {size: number}) {
   return (
    <div>
        <img src={`./src/assets/rose-growing${size}.png`} 
        className="rose"
        alt="Rose" />
    </div>
   ); 
}

export default Rose;
