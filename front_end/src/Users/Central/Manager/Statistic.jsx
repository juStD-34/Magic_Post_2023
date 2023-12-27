import React, { useEffect, useState } from "react";
import Navbar from "../../../shared/Layout/Navbar";
import Sidebar from "../../../shared/Layout/Sidebar/Sidebar";
import TBody from "../../../shared/Table/TBody"
import TableInfor from "../../../shared/Table/components/TableInfor";
import { Tabss } from '../../../shared/Table/components/tab';
import { getPackageInfor } from "../../../utils/getPackageByTime";
import { timeNormalize } from "../../../utils/deliPackInfor";

const TABS = [
  {
    label: "Arrived",
    value: "123",
  },
  {
    label: "Sent",
    value: "456",
  },
];

const ArrivedPackagesHead = ["Package's Code", "Employee Accepted", "Date"];
const SentPackagesHead = ["Package's Code", "Employee Assigned", "Date"];

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
let TABLE_HEAD = ArrivedPackagesHead;

const CentralManager = (postId) => {
  const [change, setChange] = useState(true);
  const [page, setPage] = React.useState(0);
  const [isTrade, setIsTrade] = useState(true);  //true: Arrived, false: Sent
  const [fromtDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [arrivedPackages, setArrivedPackages] = useState([]);
  const [sentPackages, setSentPackages] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      getPackageInfor(postId, fromtDate, toDate, "Arrived")
        .then((data) => {
          setArrivedPackages(data.Packages.map((pack) => {
            return {
              code: pack.packageCode,
              employeeAcceptedID: pack.employeeAssignTimeArrivedID,
              date: timeNormalize(pack.timeArrived)
            }
          }));
        })
        .catch((error) => {
          console.log(error);
        })
      getPackageInfor(postId, fromtDate, toDate, "Sent")
        .then((data) => {
          setSentPackages(data.Packages.map((pack) => {
            return {
              code: pack.packageCode,
              employeeAcceptedID: pack.employeeAssignTimeWentID,
              date: timeNormalize(pack.timeWent)
            }
          }));
        })
        .catch((error) => {
          console.log(error);
        })

    }

    fetchData();
  }, [change]);

  // console.log("arrived",arrivedPackages);
  // console.log("sent",sentPackages);

  if (isTrade) {
    TABLE_ROWS = arrivedPackages;
    TABLE_HEAD = ArrivedPackagesHead;
  } else {
    TABLE_ROWS = sentPackages;
    TABLE_HEAD = SentPackagesHead;
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
            statistic={true}
            setFromDate={setFromDate}
            setToDate={setToDate}
            change={change}
            setChange={setChange}
          />
          <Tabss TABS={TABS} setIsTrade={setIsTrade} setPage={setPage} />
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
