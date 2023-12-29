import React, { useState, useEffect } from "react";
import Navbar from "../../../shared/Layout/Navbar";
import Sidebar from "../../../shared/Layout/Sidebar/Sidebar";
import { Card } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import TBody from "../../../shared/Table/TBody";
import SearchPack from "../../../shared/Table/components/SearchPack"
import { fetchOutgoingPackages } from "../../../utils/mailUtils";
import { packageUserSend, takeSendingPostID } from "../../../utils/postInfor";
import { deliPackInfor } from "../../../utils/deliPackInfor";

const TABLE_HEAD = ["Package's Code", "Date", "Ship"];
const TABLE_ROWS = [{ pack: "1231321323", date: "12/12/2021" }];

const Delivery = ({postId, userId}) => {
  // const postId = 1;
  // const userId = 1;
  console.log("asdaskdhaklsd",postId);
  const isTrade = false;
  const [page, setPage] = React.useState(0);
  const [change, setChange] = useState(true);
  const [deliPack, setDeliPack] = useState([]);
  const [packData, setPackData] = useState([]);
  const [changeRow, setChangeRow] = useState(true);
  const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
  //Lay thong tin cac goi tin den
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchOutgoingPackages(postId);
      let filteredDeliPack;
      let updatedDeliPack = [];
      if (result !== null) {
        filteredDeliPack = result.filter(pack => packageUserSend(pack));
        updatedDeliPack = await deliPackInfor(filteredDeliPack);
        if (!updatedDeliPack == null)
          updatedDeliPack = updatedDeliPack.filter(deliPack => deliPack!==null);
        setPackData(updatedDeliPack);
        
      }
    };
    fetchData();
  }, [change]);

  useEffect(() => {
    setTABLE_ROWS(packData);
  }, [changeRow, packData]);

  console.log(packData);
  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="h-screen w-[85%] sm:w-full px-auto">
        <Navbar />
        <main className="max-w-4xl flex-4 mx-auto py-2 my-4 rounded-lg">
          <Card className="w-full">
            <div className="flex-row">
              <Typography variant="h5" color="blue-gray">
                All Storing Package
              </Typography>
              <div className="flex flex-row">
                <Typography
                  color="gray"
                  className="hidden sm:inline-block mt-1 font-normal"
                >
                  See information about pending packages
                </Typography>
                <SearchPack TABLE_ROWS={TABLE_ROWS} setTABLE_ROWS={setTABLE_ROWS} change={changeRow} setChange={setChangeRow}/>
              </div>
            </div>
            <TBody
              TABLE_ROWS={TABLE_ROWS}
              type="TradeEmployee"
              TABLE_HEAD={TABLE_HEAD}
              page={page}
              setPage={setPage}
              userId={userId}
              change={change}
              setChange={setChange}
              isTrade={isTrade}
            />
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Delivery;
