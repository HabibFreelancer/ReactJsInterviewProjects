import React, {useState} from "react";
import "./styles.css";

export default function App() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [mobile,setMobile] = useState("");
  const [data,setData] = useState("data");

  const firstNameChangeHandler=(e)=>{
    setFirstName(e.target.value);
  }
  const lastNameChangeHandler=(e)=>{
    setLastName(e.target.value);
  }
  const mobileChangeHandler=(e)=>{
    setMobile(e.target.value);
  }

  const showData = (e) => {
    e.preventDefault();
    setData(firstName+','+lastName+','+mobile);
  }
  return (
    <div className="App">
      <div>
        <form onSubmit={showData}>
          <input type="text" 
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
        {data}
      </div>
    </div>
  );
}