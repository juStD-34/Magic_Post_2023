import React, { useState } from "react";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import TBody from "./components/TBody";
import TFoot from "./components/TFoot";
import TableHead from "./components/THead";
import { Card } from "@material-tailwind/react";

const TABS = [
  {
    label: "Điểm giao dịch",
    value: "123",
  },
  {
    label: "Điểm tập kết",
    value: "456",
  },
];

const TABLE_HEAD = [
  "Package's ID",
  "Send Office's ID",
  "Receive Office's ID",
  "Receive Address",
  "Confirm",
];

const res = [
  {
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];

const fake = [
  {
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];

let TABLE_ROWS = res;

function Employee()  {
  const [isTrade, setIsTrade] = useState(true);

  TABLE_ROWS = (isTrade ? res : fake);

    return (
      <div className="flex bg-white">
        <Sidebar />
        <div className="h-full w-[85%] sm:w-full px-auto">
          <Navbar />
          <main className="max-w-5xl flex-4 mx-auto py-2 border-2 border-gray-400 rounded-lg">
              <Card className="w-full">
                <TableHead TABS={TABS} isTrade={isTrade} setIsTrade={setIsTrade}/>
                <TBody TABLE_ROWS={TABLE_ROWS} TABLE_HEAD={TABLE_HEAD}/>
                <TFoot />
              </Card>
          </main>
        </div>
      </div>
    );
}
export default Employee;
