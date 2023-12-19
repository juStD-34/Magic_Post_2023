import React from "react";
import StatisticAll from "./components/StatisticAll";

const TABLE_HEAD = ["Packages's ID", "FROM", "TO", "Date", "Status"];

const TABLE_ROWS = [
  {
    name: "[BN B SOC SON SOC]",
    address: "Manager",
    receive: "My Dinh",
    online: true,
    date: "24/03/2015",
  },
  {
    name: "[BN B Mega  CAU GIAY SOC]",
    address: "Programator",
    receive: "My Dinh",
    online: false,
    date: "24/03/2015",
  },
  {
    name: "AAAAA",
    address: "Executive",
    receive: "My Dinh",
    online: false,
    date: "24/03/2015",
  },
  {
    name: "123",
    address: "Programator",
    receive: "My Dinh",
    online: true,
    date: "24/03/2015",
  },
  {
    name: "456",
    address: "Manager",
    receive: "My Dinh",
    online: false,
    date: "24/03/2015",
  },
  {
    name: "789",
    address: "Manager",
    receive: "My Dinh",
    online: true,
    date: "24/03/2015",
  },
  {
    name: "126",
    address: "Programator",
    receive: "My Dinh",
    online: true,
    date: "24/03/2015",
  },
];

const CEOStatistic = () => {
  return <StatisticAll TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS} />;
};

export default CEOStatistic;
