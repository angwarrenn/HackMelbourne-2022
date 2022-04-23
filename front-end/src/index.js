import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Empty from "./Pages/Empty";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Calendar from "./Pages/Calendar";
import Team from "./Pages/Team";
import NoPage from "./Pages/NoPage";
import Settings from "./Pages/Settings";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Events from "./Pages/Events";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import "./App.css";

export default function App() {
  const [responses, setResponses] = useState({});
  const [movieInput, setMovieInput] = useState("");

  const [email, setEmail] = useState(null);

  const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   console.log("useEffect called");


    // const ENDPOINT = process.env.REACT_APP_SERVER;
    // const socket = io(ENDPOINT, {
    //   query: { id: "9eab9fd0-4f39-4d97-88a6-3013c151c7a3" },
    // });

  //   if (socket) {
  //     setSocket(socket);

  //     socket.on("update", (data) => {
  //       console.log("update");
  //       console.log(data);

  //       setResponses(data);
  //     });
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={email ? <Layout /> : undefined}>
          <Route
            index
            element={
              email ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="calendar"
            element={email ? <Calendar /> : <Navigate to="/login" />}
          />
          <Route
            path="team"
            element={email ? <Team /> : <Navigate to="/login" />}
          />
          <Route
            path="settings"
            element={email ? <Settings /> : <Navigate to="/login" />}
          />
          <Route
            path="dashboard"
            element={email ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="login"
            element={
              email ? (
                <Navigate to="/dashboard" />
              ) : (
                <LogIn email={email} setEmail={setEmail} />
              )
            }
          />
          <Route
            path="signup"
            element={
              email ? (
                <Navigate to="/dashboard" />
              ) : (
                <SignUp email={email} setEmail={setEmail} />
              )
            }
          />
          <Route
            path="event"
            element={email ? <Events email={email}/> : <Navigate to="/login" />}
          />
          
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
