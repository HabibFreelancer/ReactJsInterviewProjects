import React,{useState} from 'react';
import "./styles.css";
export default function App() {
 const [persInfo,setPersInfo]=useState({
   firstName:'',
   lastName:'',
   mobile:''
 })

const inputChangeHandler=(e)=>{
 setPersInfo((prevState)=>{
    return { ...prevState,[e.target.name]:e.target.value}
 });
}
const showData=(e)=>{
   e.preventDefault();
}
return (
  <div className="App">
    <div>
      <form onSubmit={showData}>
      <input  type="text"
      placeholder="First Name"
      name="firstName"
      onChange={inputChangeHandler}
      />
      <br/>
      <input type="text"
      placeholder="Last Name"
      name="lastName"
      onChange={inputChangeHandler}
      />
      <br/>
      <input type="text"
       placeholder="Mobile"
       name="mobile"
       onChange={inputChangeHandler}
       />
      <br/>
      <input type="submit" value="Submit"/>
      </form>
      {JSON.stringify(persInfo)}
    </div>
  </div>
);
}