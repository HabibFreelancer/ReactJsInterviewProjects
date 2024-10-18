import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter,setCounter] = useState<number>(1);
  const btnHandler=(e:React.MouseEvent<HTMLButtonElement>):void=>{
    setCounter(counter+1);
  }

  return (
    <div className="App">
    <h1>{counter}</h1>
    <hr/>
      <button onClick={btnHandler}>Increment</button>
    </div>
  );
}
export default App;