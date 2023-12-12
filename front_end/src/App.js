import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login_Signup/Login";
import Signup from "./Components/Login_Signup/Signup";
import Confirm from "./Components/Employee/Confirm";
import Manager from "./Components/Manager/Manager";
import Home from "./Components/Home/Home";
import Gathering from "./Components/Manager/Gathering";
import Trading from "./Components/Manager/Trading";
import Create from "./Components/Employee/Create";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/employee/confirm" element={<Confirm />} />
          <Route path="/employee/create" element={<Create />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/manager/gathering" element={<Gathering />} />
          <Route path="/manager/trading" element={<Trading />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
