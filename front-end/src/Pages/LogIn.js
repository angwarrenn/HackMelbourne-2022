import React, { useState } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";

import loghero from "./loginhero.png";

function LogIn({ email, setEmail }) {
  const url = "https://a7d5-125-63-30-143.au.ngrok.io/login";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        setEmail(res.data.success);
        console.log(res.data);
      })
      .then(() => {
        return <Navigate to="/dashboard"></Navigate>;
      });
  }

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
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
          <p className='gosignup'>Don't have an account? Sign up now!</p>
        </form>
      </div>
      <img src={loghero} alt="Login Hero" className="herolog"></img>
    </div>
  );
}

export default LogIn;
