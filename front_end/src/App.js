import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Authorization/Login";
import Manager from "./Users/CEO/Manager";
import Home from "./Users/Home/Home";
import TradeEmployee from "./Users/Trade/Employee";
import TradeManager from "./Users/Trade/Manager/Statistic";
import CEOStatistic from "./Users/CEO/Statistic";
import TradeAccount from "./Users/Trade/Manager/Account";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
