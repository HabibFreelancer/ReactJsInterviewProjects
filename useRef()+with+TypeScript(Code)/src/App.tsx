import React,{useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const btnHandler = (e:React.MouseEvent<HTMLButtonElement>):void=>{
    inputRef.current?.focus();
  }

  return (
    <div className="App">
      <h1>Trying useRef()</h1>
      <input type="text"/><br/>
      <input type="text" ref={inputRef}/><br/>
      <button onClick={btnHandler}>Set Focus</button>
    </div>
  );
}
export default App;