import React, { useState } from "react";
import "./Login.css";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setIslogin } = props;

  const loginHandler = () =>{
    if(username === "admin" && password === "admin123"){
      console.log("you are login 🎉")
      setIslogin(true);
    }else{
      console.log("Please enter corect username and password 😟")
    }
  }

  return (
    <div className="root">
      <div className="container">
        <h2 className="title" style={{ textAlign: "center" }}>
          Sing in Page
        </h2>
        <hr />
        <br />
        <div className="formContainer">
          <input name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="buttonContainer">
          <button onClick={loginHandler} > Login </button>
        </div>
      </div>
    </div>
  );
}
