import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Authorization/Login";
import Manager from "./Users/CEO/Manager";
import Home from "./Users/Home/Home";
import TradeEmployee from "./Users/Trade/Employee";
import Statistic from "./Users/CEO/Statistic";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<TradeEmployee />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/manager/statistic" element={<Statistic />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
