import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../App.css";

import signhero from "./signuphero.png";

function SignUp({ setEmail }) {
  const url = process.env.REACT_APP_SERVER + "/signup";
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      password: data.password,
    }).then((res) => {
      console.log(res);
      if (res.data.success == true) {
        setEmail(data.email);
      } else {
        setEmail(null);
      }
    });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  return (
    <div>
      <div className="signup">
        <h1>SIGN UP</h1>
        <form onSubmit={(e) => submit(e)}>
          <input
            onChange={(e) => handle(e)}
            id="name"
            value={data.name}
            placeholder="Name"
            type="name"
          ></input>
          <input
            onChange={(e) => handle(e)}
            id="email"
            value={data.email}
            placeholder="Email"
            type="text"
          ></input>
          <input
            onChange={(e) => handle(e)}
            id="password"
            value={data.password}
            placeholder="Password"
            type="password"
          ></input>
          <button className="buttonsubmit">SUBMIT</button>
          <p className="gosignup">
            Already have an account? <Link to="/login">Log-in</Link> now!
          </p>
        </form>
      </div>
      <img src={signhero} alt="Signup Hero" className="herosign"></img>
    </div>
  );
}

export default SignUp;
