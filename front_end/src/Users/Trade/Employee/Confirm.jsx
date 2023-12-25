import React from "react";
import Navbar from "../../../shared/Layout/Navbar";
import Sidebar from "../../../shared/Layout/Sidebar/Sidebar";
import { Card } from "@material-tailwind/react";
import TableInfor from "../../../shared/Table/components/TableInfor";
import { Tabss } from "../../../shared/Table/components/tab";
import SearchPack from "../../../shared/Table/components/SearchPack";
import TBody from "../../../shared/Table/TBody";

const TABS = [
  {label: "CENTRAL", value: "123" }, 
  {label: "USER", value: "456"},
];

const resHead = ["Package's ID", "Address", "Date", "Action"];
const fakeHead = ["Package's ID", "Address", "Date", "Confirm", "Cancel"];

const res = [
  {
    id: "211AJNDI213",
    address: "Ha noi My DINh Thai",
    date: "27/01/2023"
  },
  {
    id: "312jk90add",
    address: "Ha noi My DINh Thai",
    date: "27/01/2023"
  },
  {
    id: "654adpoak644",
    address: "Ha noi My DINh Thai",
    date: "27/01/2023"
  },
  {
    id: "16add4aw8",
    address: "Ha noi My DINh Thai",
    date: "27/01/2023"
  },
  {
    id: "68468498adsbd",
    address: "Ha noi My DINh Thai",
    date: "27/01/2023"
  },
];

const fake = [
  {
    id: "68468498adsbd",
    address: "Ha noi My DINh Thai",
    date: "27/01/2023"
  },
  {
    id: "16add4aw8",
    address: "Ha noi My DINh Thai",
    date: "27/01/2023"
  },
  {
    id: "654adpoak644",
    address: "Ha noi My DINh Thai",
    date: "27/01/2023"
  },
  {
    id: "312jk90add",
    address: "Ha noi My DINh Thai",
    date: "27/01/2023"
  },
  {
    id: "211AJNDI213",
    address: "Ha noi My DINh Thai",
    date: "27/01/2023"
  },
]

let TABLE_ROWS = res;
let TABLE_HEAD = resHead;

const Confirm = () => {
  const [page, setPage] = React.useState(0);
  const [isTrade, setIsTrade] = React.useState(true);

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
          <Card className="w-full">
            <TableInfor
              head="All packages"
              intro="all packages sent and received"
              add="hidden"
            />
            <div className="flex flex-col sm:flex-row">
              <Tabss TABS={TABS} setIsTrade={setIsTrade} setPage={setPage} />
              <SearchPack />
            </div>
            <TBody
              className="mt-4 border-2 border-gray-200 rounded-lg"
              TABLE_ROWS={TABLE_ROWS}
              type="confirm"
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
};

export default Confirm;
