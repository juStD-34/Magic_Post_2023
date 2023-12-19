import React, { useState } from "react";
import Navbar from "../../shared/Layout/Navbar";
import Sidebar from "../../shared/Layout/Sidebar/Sidebar";
import TBody from "../../shared/Table/TBody";
import TableHead from "../../shared/Table/THead";
import { Card } from "@material-tailwind/react";

const resHead = [
  "Package's ID",
  "Send Office's ID",
  "Receive Office's",
  "Status",
  "Confirm",
];

const fakeHead = [
  "Package's ID",
  "Send Office's ID",
  "Receive Office's",
  "Status",
];

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

let fake = [
  {
    name: "456",

    address: "Programator",

    phone: "Ha noi Hoa binh",
    online: true,
  },
  {
    name: "789",
    online: false,

    address: "Executive",
    phone: "Ha noi Hoa binh",
  },
  {
    name: "123321",
    address: "Programator",

    phone: "Ha noi Hoa binh",
    online: true,
  },
  {
    name: "12312",
    address: "Manager",
    online: false,

    phone: "Ha noi Hoa binh",
  },
  {
    name: "asS",
    online: true,

    address: "Manager",
    phone: "Ha noi Hoa binh",
  },
  {
    name: "qwe",

    address: "Programator",

    phone: "Ha noi Hoa binh",
    online: true,
  },
  {
    name: "789",
    online: false,

    address: "Executive",

    phone: "Ha noi Hoa binh",
  },
  {
    name: "123321",
    address: "Programator",

    phone: "Ha noi Hoa binh",
    online: true,
  },
  {
    name: "x ",
    address: "Manager",
    online: false,

    phone: "Ha noi Hoa binh",
  },
  {
    name: "a3",

    address: "Manager",
    phone: "Ha noi Hoa binh",
    online: true,
  },
  {
    name: "1sxx",
    address: "Manager",

    online: true,

    phone: "Ha noi Hoa binh",
  },
];

let res = [
  {
    name: "1",
    address: "Manager",
    phone: "Ha noi Hoa binh",
    online: true,
  },
  {
    name: "2",

    address: "Programator",

    phone: "Ha noi Hoa binh",
    online: false,
  },
  {
    name: "3",

    address: "Executive",
    phone: "Ha noi Hoa binh",

    online: false,
  },
  {
    name: "4",
    address: "Manager",
    phone: "Ha noi Hoa binh",
    online: true,
  },
  {
    name: "5",
    address: "Executive",
    phone: "Ha noi Hoa binh",
    online: false,
  },
  {
    name: "6",
    address: "Programator",
    phone: "Ha noi Hoa binh",
    online: true,
  },
  {
    name: "7",
    address: "Manager",
    phone: "Ha noi Hoa binh",
    online: false,
  },
];

let TABLE_ROWS = res;
let TABLE_HEAD = resHead;

function CentralEmployee() {
  const [isTrade, setIsTrade] = useState(true);
  const [page, setPage] = React.useState(0);

  const type = "employee";

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
      <div className="h-full w-[85%] sm:w-full px-auto">
        <Navbar />
        <main className="max-w-4xl flex-5 mx-auto py-2 my-4">
          <Card className="w-full">
            <TableHead
              TABS={TABS}
              isTrade={isTrade}
              setIsTrade={setIsTrade}
              setPage={setPage}
              type={type}
            />
            <TBody
              TABLE_ROWS={TABLE_ROWS}
              type={type}
              TABLE_HEAD={TABLE_HEAD}
              page={page}
              setPage={setPage}
              isTrade={isTrade}
            />
          </Card>
        </main>
      </div>
    </div>
  );
}
export default CentralEmployee;
