import React from "react";
import Navbar from "../../Layout/Navbar";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import TBody from "../../shared/Table/TBody";
import TableInfor from "../../shared/Table/components/TableInfor";

const TABLE_HEAD = ["Packages's ID", "FROM", "TO", "Status", "Date"];

let TABLE_ROWS = [
  {
    name: "[BN B SOC SON SOC]",
    address: "Manager",
    online: true,
    phone: "0365280358",
  },
  {
    name: "[BN B Mega  CAU GIAY SOC]",
    address: "Programator",
    online: false,
    phone: "0365280358",
  },
  {
    name: "AAAAA",
    address: "Executive",
    online: false,
    phone: "0365280358",
  },
  {
    name: "123",
    address: "Programator",
    online: true,
    phone: "0365280358",
  },
  {
    name: "456",
    address: "Manager",
    online: false,
    phone: "0365280358",
  },
  {
    name: "789",
    address: "Manager",
    online: true,
    phone: "23/04/18",
  },
  {
    name: "126",
    address: "Programator",
    online: false,
    phone: "0365280358",
  },
];

const Statistic = () => {
  const [page, setPage] = React.useState(0);

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
          />
          <TBody
            className="mt-4 border-2 border-gray-200 rounded-lg"
            TABLE_ROWS={TABLE_ROWS}
            type="statistic"
            TABLE_HEAD={TABLE_HEAD}
            page={page}
            setPage={setPage}
          />
        </main>
      </div>
    </div>
  );
};

export default Statistic;
