import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter,setCounter] = useState<number>(1);
  const [txt,setTxt] = useState<string>('');
  const btnHandler=(e:React.MouseEvent<HTMLButtonElement>):void=>{
    setCounter(counter+1);
  }
  const inputChangeHandler=(e:React.ChangeEvent<HTMLInputElement>):void=>{
    setTxt(e.target.value)
  }

  return (
    <div className="App">
    <h1>{counter}</h1>
    <hr/>
      <button onClick={btnHandler}>Increment</button>
    <hr/>
      <p>{txt}</p>
    <hr/>
      <input type="text" onChange={inputChangeHandler}/>
    </div>
  );
}
export default App;