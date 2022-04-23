import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import moment from 'moment';

import { IoCloudDownload } from "react-icons/io5";
import { EventCard } from "../ScheduleComponents/ScheduleIndex";

function GetEvent({email}){
  const [text, setText] = useState([]);
  const url = "https://2692-125-63-30-25.au.ngrok.io/retrieve-events"
  const [data,setData] = useState({
    email:"",
  })

  useEffect(() => {Axios.post(url,{
    email:email,
  })
    .then(res=>{
      if (res.data.success){
        for (let i = 0; i < res.data.result.length; i++) {
          setText((prev) => [...prev, res.data.result[i].Date])
          setText((prev) => [...prev, res.data.result[i].Name])
          setText((prev) => [...prev, res.data.result[i].Description])
        }
      }
    })},[])

  function print(text){
    let content = [];
    let test = [];
    for (let i =0; i<text.length; i++){

      var currentdate = moment.utc(text[i]).format('DD.MM.YYYY');
      var startdate = moment(currentdate,"DD.MM.YYYY");
      var newdate = startdate.add(1,'days').format("DD/MM/YYYY");
      test.push([newdate,text[i+1],text[i+2]])
      // content.push(<h1>{newdate}</h1>)
      // content.push(<h1>{text[i+1]}</h1>)
      // content.push(<h1>{text[i+2]}</h1>)
      i += 2
    }
    return test;
  }

  function submit(e){
    e.preventDefault();
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function printCard(arr){
    let elements = []

    for (let i =0; i<arr.length;i++){
      elements.push(<EventCard date = {arr[i][0]}
        name = {arr[i][1]}
        desc = {arr[i][2]}/>)
      
    }
    return elements;
  }


  return(
    <div>
      <h3>Events:</h3>
      <br></br>
      <button className='download'>Download events <IoCloudDownload /></button>
      <br></br>
      {printCard(print(text))}
    </div>
  );
}

export default GetEvent;