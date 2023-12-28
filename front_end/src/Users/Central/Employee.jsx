import React, { useEffect, useState } from "react";
import Navbar from "../../shared/Layout/Navbar";
import Sidebar from "../../shared/Layout/Sidebar/Sidebar";
import TBody from "../../shared/Table/TBody";
import TableHead from "../../shared/Table/THead";
import { Card } from "@material-tailwind/react";
import { fetchIncomingPackages, fetchOutgoingPackages } from "../../utils/mailUtils";
import { takeReceivingPostID, takeSendingPostID, PostInfo } from "../../utils/postInfor";

const incomingHead = [
  "Package's Code",
  "Send Office's name",
  "Confirm Arrived",
];

const pendingHead = [
  "Package's Code",
  "Receive Office's name",
  "Send",
];

const TABS = [
  {
    label: "Incoming",
    value: "123",
  },
  {
    label: "Pending",
    value: "456",
  },
];

function CentralEmployee({postId}) {
  // const postId = 1;
  const [isTrade, setIsTrade] = useState(true);
  const [page, setPage] = React.useState(0);
  const [pending, setPending] = useState([]);
  const [incoming, setIncoming] = useState([]);
  const type = "employee";
  const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
  const [changeRow, setChangeRow] = useState(true);
  let TABLE_HEAD;

  const [change, setChange] = useState(true);
  const [incomingPackage, setIncomingPackage] = useState([]);
  const [outgoingPackage, setOutgoingPackage] = useState([]);
  const [receivingPostName, setReceivingPostName] = useState([]);
  const [sendingPostName, setSendingPostName] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const incomingPackages = await fetchIncomingPackages(postId);
      const outgoingPackages = await fetchOutgoingPackages(postId);

      setIncomingPackage(incomingPackages);
      setOutgoingPackage(outgoingPackages);
    };

    fetchData();
  }, [change]);

  useEffect(() => {
    if (outgoingPackage.length > 0) {
      // Map the array of promises returned by PostInfo
      const promises = outgoingPackage.map(pack => PostInfo(takeReceivingPostID(pack)));

      // Use Promise.all to wait for all promises to resolve
      Promise.all(promises)
        .then(postNames => {
          // postNames is an array of resolved post names
          setReceivingPostName(postNames);
        })
        .catch(error => {
          console.error('Error fetching post names:', error);
        });
    }
    else {
      setReceivingPostName([]);
    }
  }, [outgoingPackage]);

  useEffect(() => {
    if (outgoingPackage.length > 0 && receivingPostName.length > 0) {
      // Combine values from outgoingPackage and receivingPostName
      const combinedPending = outgoingPackage.map((pack, index) => ({
        code: pack.code,
        postName: receivingPostName[index],
        confirm: true,
      }));

      setPending(combinedPending);
    }
    else {
      setPending([]);
    }
  }, [outgoingPackage, receivingPostName]);

  useEffect(() => {
    if (incomingPackage.length > 0) {
      const promisess = incomingPackage.map(pack => PostInfo(takeSendingPostID(pack)));
      Promise.all(promisess)
        .then(postNames => {
          setSendingPostName(postNames);
        })
        .catch(error => {
          console.error('Error fetching post names:', error);
        });
    }
    else {
      setSendingPostName([]);
    }
  }, [incomingPackage]);

  useEffect(() => {
    if (incomingPackage.length > 0 && sendingPostName.length > 0) {
      // Combine values from incomingPackage and sendingPostName
      const combinedIncoming = incomingPackage.map((pack, index) => ({
        code: pack.code,
        postName: sendingPostName[index],

        confirm: true,
      }));

      setIncoming(combinedIncoming);
    }
    else {
      setIncoming([]);
    }
  }, [incomingPackage, sendingPostName]);

  
  // console.log("pending", pending);
  // console.log("incoming", incoming);
  useEffect(() => {
      isTrade ? setTABLE_ROWS(incoming) : setTABLE_ROWS(pending);
  }, [changeRow, isTrade, incoming, pending]);

  // console.log("TABLE_ROWS", TABLE_ROWS);
  if (isTrade) {
    // TABLE_ROWS = incoming;
    TABLE_HEAD = incomingHead;
  } else {
    // TABLE_ROWS = pending;
    TABLE_HEAD = pendingHead;
  }

  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="h-full w-[85%] sm:w-full px-auto">
        <Navbar />
        <main className="max-w-4xl flex-5 mx-auto py-2 my-4">
          <Card className="w-full">
            <TableHead
              TABS={TABS}
              isTrade={isTrade}
              setIsTrade={setIsTrade}
              setPage={setPage}
              type={type}
              TABLE_ROWS={TABLE_ROWS}
              setTABLE_ROWS = {setTABLE_ROWS}
              changeRow={changeRow}
              setChangeRow={setChangeRow}
            />
            <TBody
              TABLE_ROWS={TABLE_ROWS}
              type={type}
              TABLE_HEAD={TABLE_HEAD}
              page={page}
              setPage={setPage}
              isTrade={isTrade}
              change={change}
              setChange={setChange}
            />
          </Card>
        </main>
      </div>
    </div>
  );
}
export default CentralEmployee;
