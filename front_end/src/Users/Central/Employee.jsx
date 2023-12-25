import React, { useEffect, useState } from "react";
import Navbar from "../../shared/Layout/Navbar";
import Sidebar from "../../shared/Layout/Sidebar/Sidebar";
import TBody from "../../shared/Table/TBody";
import TableHead from "../../shared/Table/THead";
import { Card } from "@material-tailwind/react";
import { fetchIncomingPackages, fetchOutgoingPackages } from "../../utils/mailUtils";
import { takeReceivingPostID, takeSendingPostID, PostInfo } from "../../utils/postInfor";

const incomingHead = [
  "Package's ID",
  "Send Office's name",
  "Confirm",
];

const pendingHead = [
  "Package's ID",
  "Receive Office's name",
  "Confirm",
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

// let pending = [
//   {
//     name: "456",

//     address: "Programator",

//     phone: "Ha noi Hoa binh",
//     online: true,
//   },
//   {
//     name: "789",
//     online: false,

//     address: "Executive",
//     phone: "Ha noi Hoa binh",
//   },
//   {
//     name: "123321",
//     address: "Programator",

//     phone: "Ha noi Hoa binh",
//     online: true,
//   },
//   {
//     name: "12312",
//     address: "Manager",
//     online: false,

//     phone: "Ha noi Hoa binh",
//   },
//   {
//     name: "asS",
//     online: true,

//     address: "Manager",
//     phone: "Ha noi Hoa binh",
//   },
//   {
//     name: "qwe",

//     address: "Programator",

//     phone: "Ha noi Hoa binh",
//     online: true,
//   },
//   {
//     name: "789",
//     online: false,

//     address: "Executive",

//     phone: "Ha noi Hoa binh",
//   },
//   {
//     name: "123321",
//     address: "Programator",

//     phone: "Ha noi Hoa binh",
//     online: true,
//   },
//   {
//     name: "x ",
//     address: "Manager",
//     online: false,

//     phone: "Ha noi Hoa binh",
//   },
//   {
//     name: "a3",

//     address: "Manager",
//     phone: "Ha noi Hoa binh",
//     online: true,
//   },
//   {
//     name: "1sxx",
//     address: "Manager",

//     online: true,

//     phone: "Ha noi Hoa binh",
//   },
// ];

// let incoming = [
//   {
//     name: "1",
//     address: "Manager",
//     phone: "Ha noi Hoa binh",
//     online: true,
//   },
//   {
//     name: "2",

//     address: "Programator",

//     phone: "Ha noi Hoa binh",
//     online: false,
//   },
//   {
//     name: "3",

//     address: "Executive",
//     phone: "Ha noi Hoa binh",

//     online: false,
//   },
//   {
//     name: "4",
//     address: "Manager",
//     phone: "Ha noi Hoa binh",
//     online: true,
//   },
//   {
//     name: "5",
//     address: "Executive",
//     phone: "Ha noi Hoa binh",
//     online: false,
//   },
//   {
//     name: "6",
//     address: "Programator",
//     phone: "Ha noi Hoa binh",
//     online: true,
//   },
//   {
//     name: "7",
//     address: "Manager",
//     phone: "Ha noi Hoa binh",
//     online: false,
//   },
// ];

// let TABLE_ROWS = incoming;
// let TABLE_HEAD = incomingHead;

function CentralEmployee() {
  const postId = 1;
  const [isTrade, setIsTrade] = useState(true);
  const [page, setPage] = React.useState(0);
  const [pending, setPending] = useState([]);
  const [incoming, setIncoming] = useState([]);
  const type = "employee";
  let TABLE_ROWS;
  let TABLE_HEAD;

  const [change, setChange] = useState(true);
  const [incomingPackage, setIncomingPackage] = useState([]);
  const [outgoingPackage, setOutgoingPackage] = useState([]);
  const [receivingPostName, setReceivingPostName] = useState([]);
  const [sendingPostName, setSendingPostName] = useState([]);


  useEffect(() => {
    console.log("change", change);
    fetchIncomingPackages(postId, setIncomingPackage);
    fetchOutgoingPackages(postId, setOutgoingPackage);
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
    else{
      setReceivingPostName([]);
    }
  }, [outgoingPackage]);

  useEffect(() => {
    if (outgoingPackage.length > 0 && receivingPostName.length > 0) {
      // Combine values from outgoingPackage and receivingPostName
      const combinedPending = outgoingPackage.map((pack, index) => ({
        id: pack.id,
        postName: receivingPostName[index],
        confirm : true,
      }));

      setPending(combinedPending);
    }
    else{
      setPending([]);
    }
  }, [outgoingPackage,receivingPostName]);

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
    else{
      setSendingPostName([]);
    }
  }, [incomingPackage]);

  useEffect(() => {
    if (incomingPackage.length > 0 && sendingPostName.length > 0) {
      // Combine values from incomingPackage and sendingPostName
      const combinedIncoming = incomingPackage.map((pack, index) => ({
        id: pack.id,
        postName: sendingPostName[index],

        confirm: true,
      }));

      setIncoming(combinedIncoming);
    }
    else{
      setIncoming([]);
    }
  }, [incomingPackage,sendingPostName]);



  if (isTrade) {
    TABLE_ROWS = incoming;
    TABLE_HEAD = incomingHead;
  } else {
    TABLE_ROWS = pending;
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
            />
            <TBody
              TABLE_ROWS={TABLE_ROWS}
              type={type}
              TABLE_HEAD={TABLE_HEAD}
              page={page}
              setPage={setPage}
              isTrade={isTrade}
              setChange={setChange}
              change = {change}
            />
          </Card>
        </main>
      </div>
    </div>
  );
}
export default CentralEmployee;
