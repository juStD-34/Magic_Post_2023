import React, { useState } from "react";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import TBody from "../../shared/Table/TBody";
import TableHead from "../../shared/Table/THead";
import { Card } from "@material-tailwind/react";

let TABLE_HEAD = [
  "Package's ID",
  "Send Office's ID",
  "Receive Office's",
  "Status",
  "Confirm",
];

let fake = [
  {
    name: "John Michael3211111111111111",
    address: "Manager",
    phone: "Ha noi Hoa binh",
    online: true,
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",

    address: "Programator",
    phone: "Ha noi Hoa binh",
    online: false,
    date: "23/04/18",
  },
  {
    name: "123",

    address: "Manager",
    phone: "Ha noi Hoa binh",
    online: true,
    date: "23/04/18",
  },
  {
    name: "456",

    address: "Programator",

    phone: "Ha noi Hoa binh",
    online: false,
    date: "23/04/18",
  },
  {
    name: "789",

    address: "Executive",
    phone: "Ha noi Hoa binh",

    online: false,
    date: "19/09/17",
  },
  {
    name: "123321",
    address: "Programator",

    phone: "Ha noi Hoa binh",
    online: true,
    date: "24/12/08",
  },
  {
    name: "12312",
    address: "Manager",

    phone: "Ha noi Hoa binh",
    online: false,
    date: "04/10/21",
  },
  {
    name: "asS",

    address: "Manager",
    phone: "Ha noi Hoa binh",
    online: true,
    date: "23/04/18",
  },
  {
    name: "qwe",

    address: "Programator",

    online: false,
    phone: "Ha noi Hoa binh",
    date: "23/04/18",
  },
  {
    name: "789",

    address: "Executive",

    phone: "Ha noi Hoa binh",
    online: false,
    date: "19/09/17",
  },
  {
    name: "123321",
    address: "Programator",

    phone: "Ha noi Hoa binh",
    online: true,
    date: "24/12/08",
  },
  {
    name: "x ",
    address: "Manager",

    online: false,
    phone: "Ha noi Hoa binh",
    date: "04/10/21",
  },
  {
    name: "a3",

    address: "Manager",
    online: true,
    phone: "Ha noi Hoa binh",
    date: "23/04/18",
  },
  {
    name: "sd",

    address: "Programator",

    online: false,
    phone: "Ha noi Hoa binh",
    date: "23/04/18",
  },
  {
    name: "ax",

    address: "Executive",

    phone: "Ha noi Hoa binh",
    online: false,
    date: "19/09/17",
  },
  {
    name: "as",
    address: "Programator",

    phone: "Ha noi Hoa binh",
    online: true,
    date: "24/12/08",
  },
  {
    name: "1sxx",
    address: "Manager",

    phone: "Ha noi Hoa binh",
    online: false,
    date: "04/10/21",
  },
];

let res = [
  {
    name: "1",

    address: "Manager",
    phone: "Ha noi Hoa binh",
    online: true,
    date: "23/04/18",
  },
  {
    name: "2",

    address: "Programator",

    phone: "Ha noi Hoa binh",
    online: false,
    date: "23/04/18",
  },
  {
    name: "3",

    address: "Executive",
    phone: "Ha noi Hoa binh",

    online: false,
    date: "19/09/17",
  },
  {
    name: "4",
    address: "Manager",
    phone: "Ha noi Hoa binh",
    online: false,
    date: "04/10/21",
  },
  {
    name: "5",

    address: "Executive",

    online: false,
    date: "19/09/17",
  },
  {
    name: "6",
    address: "Programator",

    online: true,
    date: "24/12/08",
  },
  {
    name: "7",
    address: "Manager",

    online: false,
    date: "04/10/21",
  },
];

let TABLE_ROWS = res;

function TradeEmployee() {
  const [isTrade, setIsTrade] = useState(true);
  const [page, setPage] = React.useState(0);

  const type = "employee";

  TABLE_ROWS = isTrade ? res : fake;

  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="h-full w-[85%] sm:w-full px-auto">
        <Navbar />
        <main className="max-w-4xl flex-4 mx-auto py-2 my-4 border-2 border-gray-300 rounded-lg">
          <Card className="w-full">
            <TableHead
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
            />
          </Card>
        </main>
      </div>
    </div>
  );
}
export default TradeEmployee;
