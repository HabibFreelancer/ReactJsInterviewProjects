import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter,setCounter] = useState<number|string>('test');
  return (
    <div className="App">
      {counter}
    </div>
  );
}
export default App;