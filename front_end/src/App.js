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
  const {getLogin} = require('./Authorization/Auth');
  const {getPostOffice, getWorkerID} = require('./Authorization/Info');
  const role = getLogin();
  const userID = getWorkerID();
  const post_officeID = getPostOffice();
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* {role === "central/manager" && <Route path="/central/manager/account" element={<CentralAccount />} />}
          {role === "central/manager" && <Route path="/central/manager/statistic" element={<CentralManager />} />}
          {role === "central/employee" && <Route path="/central/employee" element={<CentralEmployee />} />}

          {role === "trade/manager" && <Route path="/trade/manager/account" element={<TradeAccount />} />}
          {role === "trade/manager" && <Route path="/trade/manager/statistic" element={<TradeManager />} />}
          {role === "trade/employee" && <Route path="/trade/employee/package" element={<Package />} />}
          {role === "trade/employee" && <Route path="/trade/employee/delivery" element={<Delivery />} />}
          {role === "trade/employee" && <Route path="/trade/employee/statistic" element={<TradeStatistic />} />}
          {role === "trade/employee" && <Route path="/trade/employee/confirm" element={<Confirm />} />}

          {role === "manager" && <Route path="/manager" element={<Manager />} />}
          {role === "manager" && <Route path="/manager/statistic" element={<CEOStatistic />} />} */}
          
          <Route path="/central/manager/account" element={<CentralAccount />} />
          <Route path="/central/manager/statistic" element={<CentralManager postId={post_officeID}/>} />
          <Route path="/central/employee" element={<CentralEmployee postId={post_officeID}/>} />

          <Route path="/trade/manager/account" element={<TradeAccount />} />
          <Route path="/trade/manager/statistic" element={<TradeManager postId={post_officeID} userId={userID}/>} />
          <Route path="/trade/employee/package" element={<Package postId={post_officeID} userId={userID}/>} />
          <Route path="/trade/employee/delivery" element={<Delivery postId={post_officeID} userId={userID} />} />
          <Route path="/trade/employee/statistic" element={<TradeStatistic  postId={post_officeID} userId={userID}/>} />
          <Route path="/trade/employee/confirm" element={<Confirm postId={post_officeID} userId={userID} />} />

          <Route path="/manager" element={<Manager />} />
          <Route path="/manager/statistic" element={<CEOStatistic />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
