import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Authorization/Login";
import Manager from "./Users/CEO/Manager";
import Home from "./Users/Home/Home";

import CentralEmployee from "./Users/Central/Employee";
import CentralManager from "./Users/Central/Manager/Statistic";
import CentralAccount from "./Users/Central/Manager/Account";

import TradeEmployee from "./Users/Trade/Employee";
import TradeManager from "./Users/Trade/Manager/Statistic";
import TradeAccount from "./Users/Trade/Manager/Account";

import CEOStatistic from "./Users/CEO/Statistic";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/central/employee" element={<CentralEmployee />} />
          <Route path="/central/manager/account" element={<CentralAccount />} />
          <Route path="/central/manager/statistic" element={<CentralManager />} />
          <Route path="/trade/employee" element={<TradeEmployee />} />
          <Route path="/trade/manager/account" element={<TradeAccount />} />
          <Route path="/trade/manager/statistic" element={<TradeManager />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/manager/statistic" element={<CEOStatistic />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
