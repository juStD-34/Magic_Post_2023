import React, { useEffect, useState } from "react";
import Navbar from "../../../shared/Layout/Navbar";
import Sidebar from "../../../shared/Layout/Sidebar/Sidebar";
import { Card } from "@material-tailwind/react";
import TableInfor from "../../../shared/Table/components/TableInfor";
import { Tabss } from "../../../shared/Table/components/tab";
import SearchPack from "../../../shared/Table/components/SearchPack";
import TBody from "../../../shared/Table/TBody";
import { fetchIncomingPackages, fetchOutgoingPackages } from "../../../utils/mailUtils";
import { packageSentToUser } from "../../../utils/postInfor";
import { updateSuccessPackage } from "../../../utils/updateSuccessPackage";

const TABS = [
  { label: "CENTRAL", value: "123" },
  { label: "USER", value: "456" },
];

const packagesCPSendToHead = ["Package's Code", "Name", "Phone", "Address", "Action"];
const packagesToUserHead = ["Package's Code", "Name", "Phone","Address", "Confirm", "Cancel"];



let TABLE_HEAD = packagesToUserHead;

const Confirm = ({ userId, postId }) => {
  // console.log(userId, postId);
  const [change, setChange] = React.useState(true);
  const [page, setPage] = React.useState(0);
  const [isTrade, setIsTrade] = React.useState(true); //true: central, false: user
  const [packagesToUser, setPackagesToUser] = React.useState([]);
  const [packageCPSendTo, setPackageCPSendTo] = React.useState([]);
  const [changeRow, setChangeRow] = React.useState(true);
  const [TABLE_ROWS, setTABLE_ROWS] = React.useState([]);
  useEffect(() => {
    // console.log("change", change);
    const fetchData = async () => {
      const outgoingPackage = await fetchOutgoingPackages(postId);
      const incomingPackage = await fetchIncomingPackages(postId);
      let filterpackagesToUser=[];
      let packageSendToUser=[];
      if (outgoingPackage !== null  && incomingPackage !== null) {
      // console.log("outgoingPackage from fetchOutgoingPackages:", outgoingPackage);
      filterpackagesToUser = outgoingPackage.filter(pack => packageSentToUser(pack)) //not function
        .map(pack => ({ code: pack.code, name: pack.receiverName, phone: pack.receiverPhone ,address: pack.receiverAddress}));
        packageSendToUser = incomingPackage.map(pack => ({code: pack.code, name: pack.senderName, phone: pack.senderPhone, address: pack.senderAddress}));
        // console.log(filterpackagesToUser);
      }
      console.log(filterpackagesToUser, packageSentToUser, "asdadsadaaaaaaaaaaaaaaaaa"); 
      setPackagesToUser(filterpackagesToUser);
      setPackageCPSendTo(packageSendToUser);
    };

    fetchData();
  }, [change]);

  useEffect(() => {
    if (isTrade) {
      setTABLE_ROWS(packageCPSendTo);
    } else {
      setTABLE_ROWS(packagesToUser);
    }
  }, [changeRow, packageCPSendTo, packagesToUser, isTrade]);
  console.log("packagesToUser", TABLE_ROWS, packagesToUser, packageCPSendTo);
  if (isTrade) {
    // TABLE_ROWS = packageCPSendTo;
    TABLE_HEAD = packagesCPSendToHead;
  } else {
    // TABLE_ROWS = packagesToUser;
    TABLE_HEAD = packagesToUserHead;
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
              <SearchPack TABLE_ROWS={TABLE_ROWS} setTABLE_ROWS={setTABLE_ROWS} change={changeRow} setChange={setChangeRow}/>
            </div>
            <TBody
              className="mt-4 border-2 border-gray-200 rounded-lg"
              TABLE_ROWS={TABLE_ROWS}
              type="confirm"
              TABLE_HEAD={TABLE_HEAD}
              page={page}
              setPage={setPage}
              isTrade={isTrade}
              change={change}
              setChange={setChange}
              userId={userId}	
            />
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Confirm;
