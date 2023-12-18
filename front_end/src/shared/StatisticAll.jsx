import React from "react";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar/Sidebar";
import TBody from "./Table/TBody";
import TableInfor from "./Table/components/TableInfor";

const StatisticAll = ({TABLE_HEAD, TABLE_ROWS}) => {
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

export default StatisticAll;
