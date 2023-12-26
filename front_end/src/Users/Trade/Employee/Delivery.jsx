import React, { useState,useEffect } from "react";
import Navbar from "../../../shared/Layout/Navbar";
import Sidebar from "../../../shared/Layout/Sidebar/Sidebar";
import { Card } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import TBody from "../../../shared/Table/TBody";
import SearchPack from "../../../shared/Table/components/SearchPack"
import { fetchOutgoingPackages } from "../../../utils/mailUtils";
import { takeSendingPostID } from "../../../utils/postInfor";

const TABLE_HEAD = ["Package's ID", "Date", "Ship"];
const TABLE_ROWS = [{ pack: "1231321323", date: "12/12/2021" }];


const takeDeliPack = (deliPack, setDeliPack) =>{
    
}
const Delivery = () => {
  const postId = 1;
  const [page, setPage] = React.useState(0);
  const [change, setChange] = useState(true);
  const [deliPack, setDeliPack] = React.useState([]);

  //Lay thong tin cac goi tin den
  // useEffect(() => {
  //   fetchOutgoingPackages(postId, setDeliPack);
  // }, [change]);

  // //Loc nhung goi tin la hang duoc gui tai TPost
  // useEffect(() => {
  //   const filterDeliPack = deliPack.filter(pack => takeSendingPostID(pack) === -1);
  //   setDeliPack(filterDeliPack);
  // }, [change]);
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
                <SearchPack/>
              </div>
            </div>
            <TBody
              TABLE_ROWS={TABLE_ROWS}
              type="TradeEmployee"
              TABLE_HEAD={TABLE_HEAD}
              page={page}
              setPage={setPage}
            />
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Delivery;
