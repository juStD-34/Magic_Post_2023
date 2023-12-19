import React from "react";
import Navbar from "../../../shared/Layout/Navbar";
import Sidebar from "../../../shared/Layout/Sidebar/Sidebar";
import TBody from "../../../shared/Table/TBody";
import Header from "./Header";

const TABLE_HEAD = ["Staff's ID", "Username", "Password", "Update", "Delete"];

const TABLE_ROWS = [
  {
    staffId: "Nguyen Van A",
    usrname: "32131232",
    password: "0123456789",
    phone: "0123456789",
  },
  {
    staffId: "Nguyen Van A",
    usrname: "Ha Noi",
    password: "0123456789",
    phone: "0123456789",
  },
  {
    staffId: "Nguyen Van A",
    usrname: "Ha Noi",
    password: "0123456789",
    phone: "0123456789",
  }
]

const CentralAccount = () => {
  const [page, setPage] = React.useState(0);

  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="h-screen w-[85%] sm:w-full px-auto">
        <Navbar />
        <main className="max-w-4xl w-full flex-4 mx-auto py-2 my-4">
          <Header
            head="All Employees"
            intro="all employees account"
            type="TradeManager"
          />
          <TBody
            className="mt-4 border-2 border-gray-200 rounded-lg"
            TABLE_ROWS={TABLE_ROWS}
            type="TradeManager"
            TABLE_HEAD={TABLE_HEAD}
            page={page}
            setPage={setPage}
          />
        </main>
      </div>
    </div>
  );
};

export default CentralAccount;
