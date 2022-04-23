import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import logHero from "./loginhero.png";


function LogIn({ setEmail }) {
  const url = process.env.REACT_APP_SERVER + "/login";
  
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      password: data.password,
    }).then((res) => {
      if (res.data.success == true) {
        setEmail(data.email);
      } else {
        setEmail(null);
      }
    });
  }

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  return (
    <div>
      <div className="login">
        <h1>LOGIN</h1>
        <form onSubmit={(e) => submit(e)}>
          <p className="email">email</p>
          <input
            onChange={(e) => handle(e)}
            id="email"
            value={data.email}
            placeholder="duolingowong@gmail.com"
            type="text"
          ></input>
          <p className="password">password</p>
          <input
            onChange={(e) => handle(e)}
            id="password"
            value={data.password}
            placeholder="********"
            type="password"
          ></input>
          <button className="buttonsubmit">Submit</button>
          <p className="gosignup">
            Don't have an account? <Link to="/signup">Sign up</Link> now!
          </p>
        </form>
      </div>
      <img src={logHero} alt="Login Hero" className="herolog"></img>
    </div>
  );
}

export default LogIn;
