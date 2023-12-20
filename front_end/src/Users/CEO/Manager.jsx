import React, { useState } from "react";
import Navbar from "../../shared/Layout/Navbar";
import Sidebar from "../../shared/Layout/Sidebar/Sidebar";
import TBody from "../../shared/Table/TBody";
import TableHead from "../../shared/Table/THead";
import { Card } from "@material-tailwind/react";

const TABS = [
  {
    label: "Trading",
    value: "123",
  },
  {
    label: "Central",
    value: "456",
  },
];

const TABLE_HEAD = [
  "Office's ID",
  "Office's Address",
  "Manager Account",
  "Action",
];

let res = [
  {
    name: "[BN B SOC SON SOC]",
    address: "Manager",
    account: {
      staffId: "123AASD",
      usrname: "",
      password: "",
      phone: "",
    },
  },
  {
    name: "[BN B Mega  CAU GIAY SOC]",
    address: "Programator",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    }
  },
  {
    name: "AAAAA",
    address: "Executive",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    },
  },
  {
    name: "123",
    address: "Programator",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    },
  },
  {
    name: "456",
    address: "Manager",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    },
  },
  {
    name: "789",
    address: "Manager",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    },
  },
  {
    name: "126",
    address: "Programator",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    },
  },
];

let fake = [
  {
    name: "[BN B Mega SOC]",
    address: "Manager",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    },
  },
];

var TABLE_ROWS = res;

export default function Manager() {
  const [isTrade, setIsTrade] = useState(true);
  const [page, setPage] = React.useState(0);

  const type = "ceo";

  TABLE_ROWS = isTrade ? res : fake;

  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="h-screen w-[85%] sm:w-full px-auto">
        <Navbar />
        <main className="max-w-4xl flex-4 mx-auto py-2 my-4 rounded-lg">
          <Card className="w-full">
            <TableHead
              TABS={TABS}
              isTrade={isTrade}
              setPage={setPage}
              type={type}
              setIsTrade={setIsTrade}
            />
            <TBody
              TABLE_ROWS={TABLE_ROWS}
              type={type}
              TABLE_HEAD={TABLE_HEAD}
              page={page}
              setPage={setPage}
            />
          </Card>
        </main>
      </div>
    </div>
  );
}
