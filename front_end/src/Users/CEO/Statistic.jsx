import React, { useEffect } from "react";
import StatisticAll from "./components/StatisticAll";
import axios from "axios";
import { PostInfo } from "../../utils/postInfor";
import { dateNormalize } from "../../utils/deliPackInfor";

const TABLE_HEAD = ["Packages's Code", "FROM", "TO", "Date", "Status"];

const CEOStatistic = () => {
  const [change, setChange] = React.useState(true);
  const [fromDate, setFromDate] = React.useState("2023-12-26");
  const [toDate, setToDate] = React.useState("2023-12-27");
  const [arrivedPackages, setArrivedPackages] = React.useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const arrived = await axios.get('http://localhost:3001/getAllPackage', { params: { startDate: fromDate, endDate: toDate, type: "Arrived" } });
        console.log(arrived.data.Packages);
        const arrivedPack = await Promise.all(arrived.data.Packages.map(async (pack) => {
          try {
            const From_po_Id = pack.From_po_Id;
            const to_po_id = pack.to_po_id;
            const [fromPoName, toPoName] = await Promise.all([
              PostInfo(From_po_Id), PostInfo(to_po_id)
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
  return <StatisticAll TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={arrivedPackages} />;
};

export default CEOStatistic;
