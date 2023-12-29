import React, { useEffect } from "react";
import Navbar from "../../shared/Layout/Navbar";
import Sidebar from "../../shared/Layout/Sidebar/Sidebar";
import TBody from "../../shared/Table/TBody";
import TableInfor from "../../shared/Table/components/TableInfor";


import axios from "axios";
import { PostInfo } from "../../utils/postInfor";
import { dateNormalize } from "../../utils/deliPackInfor";

const TABLE_HEAD = ["Packages's Code", "FROM", "TO", "Date", "Status"];

const CEOStatistic = () => {
  const [page, setPage] = React.useState(0);

  const [change, setChange] = React.useState(true);
  const [fromDate, setFromDate] = React.useState("");
  const [toDate, setToDate] = React.useState("");
  const [arrivedPackages, setArrivedPackages] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const arrived = await axios.get('http://localhost:3001/getAllPackage', { params: { startDate: fromDate, endDate: toDate, type: "Arrived" } });
        // console.log(arrived.data.Packages, "Arrived");
        // console.log("R", arrived.data.Packages);
        const arrivedPack = await Promise.all(arrived.data.Packages.map(async (pack) => {
          try {
            const From_po_Id = pack.From_Po_id;
            const To_po_id = pack.To_po_id;
            // console.log("From_po_Id", pack.);
            console.log(pack, "Arrived");
            const [fromPoName, toPoName] = await Promise.all([
              PostInfo(From_po_Id), PostInfo(To_po_id)
            ]);
            
            console.log(fromPoName, toPoName);
            return {
              code: pack.packageCode,
              from: fromPoName,
              to:  toPoName,
              date: dateNormalize(pack.timeArrived),
              status: pack.statusName === "Success" ? "Đã giao" : "Đang giao"
            };
          } catch (error) {
            console.log(error);
          }
        }));
        console.log(arrivedPack);
        setArrivedPackages(arrivedPack);
        return 1;
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [change]);

  console.log(arrivedPackages);
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
            statistic={true}
            setFromDate={setFromDate}
            setToDate={setToDate}
            change={change}
            setChange={setChange}
          />
          <TBody
            className="mt-4 border-2 border-gray-200 rounded-lg"
            TABLE_ROWS={arrivedPackages}
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

export default CEOStatistic;
