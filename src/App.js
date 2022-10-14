import React, {useState} from "react";
import "./style.css"


const App=()=>{
    const [number,setNumber]=useState(0);
    return(
        <div>
            <h1>This is a counter App!!!</h1>
            <h2>{number}</h2>
            <button onClick={()=>setNumber(number+1)} className="button">Add</button>
            <button onClick={()=>setNumber(number-1)} className="button">Substract</button>
            <button onClick={()=>setNumber(0)} className="button">Reset</button>
        </div>

    )
}
export default App;