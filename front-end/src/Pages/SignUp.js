import React, { useState } from 'react';
import Axios from 'axios';

import signhero from './signuphero.png';

function SignUp(){
  const url = "https://a7d5-125-63-30-143.au.ngrok.io/signup"
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
      <div className='signup'>
        <h1>SIGN UP</h1>
        <form onSubmit={(e)=> submit(e)}>
          <input onChange={(e)=>handle(e)} id ="email" value = {data.email} placeholder='email' type="text"></input>
          <input onChange={(e)=>handle(e)} id ="password" value = {data.password} placeholder='password' type="password"></input>
          <button>Submit</button>
        </form>
      </div>
      <img src={ signhero } alt="Signup Hero" className='herosign'></img>
    </div>
  );
}

export default SignUp;