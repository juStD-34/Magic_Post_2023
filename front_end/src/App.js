import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Users/Home/Home";
import Login from "./Authorization/Login";

import Manager from "./Users/CEO/Manager";
import CEOStatistic from "./Users/CEO/Statistic";

import CentralManager from "./Users/Central/Manager/Statistic";
import CentralAccount from "./Users/Central/Manager/Account";
import CentralEmployee from "./Users/Central/Employee";

import TradeManager from "./Users/Trade/Manager/Statistic";
import TradeAccount from "./Users/Trade/Manager/Account";
import Package from "./Users/Trade/Employee/Package";
import Delivery from "./Users/Trade/Employee/Delivery";
import Confirm from "./Users/Trade/Employee/Confirm";
import TradeStatistic from "./Users/Trade/Employee/Statistic";

const App = () => {
  const userID = 1;
  const post_officeID = 1;
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/central/manager/account" element={<CentralAccount />} />
          <Route path="/central/manager/statistic" element={<CentralManager />} />
          <Route path="/central/employee" element={<CentralEmployee />} />

          <Route path="/trade/manager/account" element={<TradeAccount />} />
          <Route path="/trade/manager/statistic" element={<TradeManager />} />
          <Route path="/trade/employee/package" element={<Package postId = {post_officeID}/>} />
          <Route path="/trade/employee/delivery" element={<Delivery />} />
          <Route path="/trade/employee/statistic" element={<TradeStatistic />} />
          <Route path="/trade/employee/confirm" element={<Confirm />} />

          <Route path="/manager" element={<Manager />} />
          <Route path="/manager/statistic" element={<CEOStatistic />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
