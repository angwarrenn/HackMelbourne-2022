import React, { useState } from 'react';
import Axios from 'axios';

import loghero from './loginhero.png';

function LogIn(){
  const url = "https://a7d5-125-63-30-143.au.ngrok.io/login"
  const [data,setData] = useState({
    email:"",
    password: "",
  })

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      email:data.email,
      password: data.password,
    })
      .then(res=>{
        console.log(res.data)
      })
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  return(
    <div>
      <div className='login'>
        <h1>LOGIN</h1>
        <form onSubmit={(e) => submit(e)}>
          <input
            onChange={(e) => handle(e)}
            id="email"
            value={data.email}
            placeholder="email"
            type="text"
          ></input>
          <input
            onChange={(e) => handle(e)}
            id="password"
            value={data.password}
            placeholder="password"
            type="password"
          ></input>
          <button className="button">Submit</button>
        </form>
      </div>
      <img src={ loghero } alt="Login Hero" className='herolog'></img>
    </div>
  );
}

export default LogIn;