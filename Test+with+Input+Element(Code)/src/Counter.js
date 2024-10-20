import React,{useState} from 'react';
const Counter=()=>{
    const [counter,setCounter]=useState(0);
    return(
        <div>
            <h3 data-testid="cnt">{counter}</h3>
            <button data-testid="btn" 
            onClick={()=>setCounter(counter+1)}>Increment</button>
            <hr/>
            <input type="text" data-testid="input"/>
        </div>
    )
}
export default Counter;