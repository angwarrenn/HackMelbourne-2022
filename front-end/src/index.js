import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Calendar from "./Pages/Calendar";
import Team from "./Pages/Team";
import NoPage from "./Pages/NoPage";
import Settings from "./Pages/Settings";
import LogIn from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { useState, useEffect } from "react";
import { io } from 'socket.io-client';

import "./App.css";

export default function App() {

  const [responses, setResponses] = useState({});
  const [movieInput, setMovieInput] = useState('');

  const [socket, setSocket] = useState(null);

  useEffect(() => {
      console.log("useEffect called")

      const ENDPOINT = "https://a7d5-125-63-30-143.au.ngrok.io";
      const socket = io(ENDPOINT, {query:{"id":"9eab9fd0-4f39-4d97-88a6-3013c151c7a3"}});

      if (socket) {
          setSocket(socket);

          socket.on("update", data => {
              console.log("update")
              console.log(data)

              setResponses(data);
          });
      }
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="team" element={<Team />} />
          <Route path="settings" element={<Settings />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
