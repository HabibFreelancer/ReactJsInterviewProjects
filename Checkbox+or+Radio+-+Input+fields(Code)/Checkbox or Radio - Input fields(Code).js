import React,{useState} from 'react';
import "./styles.css";
export default function App() {
const [persInfo,setPersInfo]=useState({
  firstName:'',
  lastName:true,
  mobile:''
})
const inputChangeHandler=(e)=>{
setPersInfo((prevState)=>{
  return {...prevState,[e.target.name]:e.target.value}
})
 
}
const inputCheckHandler=(e)=>{
 setPersInfo((prevState)=>{
   return {...prevState,[e.target.name]:e.target.checked}
 })
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
     name="firstName"
     onChange={inputChangeHandler}
     />
     <br/>
     <input type="checkbox"
     placeholder="Last Name"
     name="lastName"
     onChange={inputCheckHandler}
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
