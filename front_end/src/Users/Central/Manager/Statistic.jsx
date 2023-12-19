import React, {useState} from "react";
import Navbar from "../../../shared/Layout/Navbar";
import Sidebar from "../../../shared/Layout/Sidebar/Sidebar";
import TBody from "../../../shared/Table/TBody"
import TableInfor from "../../../shared/Table/components/TableInfor";
import { Tabss } from '../../../shared/Table/components/tab';

const TABS = [
  {
    label: "Ongoing",
    value: "123",
  },
  {
    label: "Outgoing",
    value: "456",
  },
];

const resHead = ["Package's ID", "FROM", "Date", "Status"];
const fakeHead = ["Package's ID", "TO", "Date", "Status"];

let res = [
  {
    name: "[BN B SOC SON SOC]",
    address: "Manager",
    online: true,
    date: "0365280358",
  },
  {
    name: "[BN B Mega  CAU GIAY SOC]",
    address: "Programator",
    online: false,
    date: "0365280358",
  },
  {
    name: "AAAAA",
    address: "Executive",
    online: false,
    date: "0365280358",
  },
  {
    name: "123",
    address: "Programator",
    online: true,
    date: "0365280358",
  },
  {
    name: "456",
    address: "Manager",
    online: false,
    date: "0365280358",
  },
  {
    name: "789",
    address: "Manager",
    online: true,
    date: "23/04/18",
  },
  {
    name: "126",
    address: "Programator",
    online: false,
    date: "0365280358",
  },
];

let fake = [
  {
    name: "[BN 123312N SOC]",
    address: "Manager",
    online: true,
    date: "0365280358",
  },
  {
    name: "[BN 1521Mega  CAU GIAY SOC]",
    address: "Programator",
    online: false,
    date: "0365280358",
  },
  {
    name: "A14A",
    address: "Executive",
    online: false,
    date: "0365280358",
  },
  {
    name: "1a42`4`3",
    address: "Programator",
    online: true,
    date: "0365280358",
  },
  {
    name: "424`b`4ab",
    address: "Manager",
    online: false,
    date: "0365280358",
  },
  {
    name: "781241b59",
    address: "Manager",
    online: true,
    date: "23/04/18",
  },
  {
    name: "ab52a52a6",
    address: "Programator",
    online: false,
    date: "0365280358",
  },
];


let TABLE_ROWS = res;
let TABLE_HEAD = resHead;

const CentralManager = () => {
  const [page, setPage] = React.useState(0);
  const [isTrade, setIsTrade] = useState(true);

  if (isTrade) {
    TABLE_ROWS = res;
    TABLE_HEAD = resHead;
  } else {
    TABLE_ROWS = fake;
    TABLE_HEAD = fakeHead;
  }

  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="h-screen w-[85%] sm:w-full px-auto">
        <Navbar />
        <main className="max-w-4xl flex-4 mx-auto py-2 my-4">
          <TableInfor
            head="All packages"
            intro="all packages sent and received"
            add="hidden"
            statistic = {true}
          />
          <Tabss TABS={TABS} setIsTrade={setIsTrade} setPage={setPage}  />
          <TBody
            className="mt-4 border-2 border-gray-200 rounded-lg"
            TABLE_ROWS={TABLE_ROWS}
            type="statistic"
            TABLE_HEAD={TABLE_HEAD}
            page={page}
            setPage={setPage}
            isTrade={isTrade}
          />
        </main>
      </div>
    </div>
  )
};

export default CentralManager;
