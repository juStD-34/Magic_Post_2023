import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Authorization/Login";
import Confirm from "./Users/TradeEmployee/Confirm";
import Manager from "./Users/CEO/Manager";
import Home from "./Users/Home/Home";
import Create from "./Users/TradeEmployee/Create";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/employee/confirm" element={<Confirm />} />
          <Route path="/employee/create" element={<Create />} />
          <Route path="/manager" element={<Manager />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
