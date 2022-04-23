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
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import "./App.css";

export default function App() {
  const [responses, setResponses] = useState({});
  const [movieInput, setMovieInput] = useState("");

  const [email, setEmail] = useState("a");

  const [socket, setSocket] = useState(null);

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
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
