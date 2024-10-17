import React,{useState} from 'react';
import "./styles.css";
export default function App() {
 const [persInfo,setPersInfo]=useState({
   firstName:'',
   lastName:'',
   mobile:''
 })
 
const firstNameChangeHandler=(e)=>{
   setPersInfo({...persInfo,firstName:e.target.value});
}
const lastNameChangeHandler=(e)=>{
 setPersInfo({...persInfo,lastName:e.target.value});
}
const mobileChangeHandler=(e)=>{
 setPersInfo({...persInfo,mobile:e.target.value});
}
 
const showData=(e)=>{
   e.preventDefault();
   setData(firstName+','+lastName+','+mobile);
}
return (
  <div className="App">
    <div>
      <form onSubmit={showData}>
      <input  type="text"
      placeholder="First Name"
      onChange={firstNameChangeHandler}
      />
      <br/>
      <input type="text"
      placeholder="Last Name"
      onChange={lastNameChangeHandler}
      />
      <br/>
      <input type="text"
       placeholder="Mobile"
       onChange={mobileChangeHandler}
       />
      <br/>
      <input type="submit" value="Submit"/>
      </form>
      {JSON.stringify(persInfo)}
    </div>
  </div>
);
}