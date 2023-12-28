import {React, useState, useEffect} from "react";
import Navbar from "../../../shared/Layout/Navbar";
import Sidebar from "../../../shared/Layout/Sidebar/Sidebar";
import TBody from "../../../shared/Table/TBody";
import Header from "./Header";

const TABLE_HEAD = ["Staff's ID", "Username", "Password", "Update", "Delete"];

const TABLE_ROWS = [
  {
    staffId: "Nguyen Van A",
    staffName: "32131232",
    birth: "0123456789",
    phone: "0123456789",
  },
  {
    staffId: "Nguyen Van A",
    staffName: "Ha Noi",
    birth: "0123456789",
    phone: "0123456789",
  },
  {
    staffId: "Nguyen Van A",
    staffName: "Ha Noi",
    birth: "0123456789",
    phone: "0123456789",
  }
]

const TradeAccount = () => {
  const [page, setPage] = useState(0);
  const {getPostOffice} = require('../../../Authorization/Info');
  const [userData, setUserdata]= useState([]); 
    useEffect( ()=>{
      const getUserdata= async()=>{
          const reqData= await fetch("http://localhost:3001/users");
          const resData= await reqData.json();
          setUserdata(resData);
          console.log(resData);
      }
      getUserdata();
  },[]);
  var data = userData.map(({id, username, password, role, poWorkID}) => ({id, username, password, role, poWorkID}));
  var data_filter1 = data.filter( element => element.role == "1");
  var data_filter2 = data_filter1.filter(element => element.poWorkID == getPostOffice());
  var data2 = data_filter2.map(({id, username, password, role}) => ({id, username, password, role}));
  console.log(data);
  console.log(getPostOffice());
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
            TABLE_ROWS={data2}
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

export default TradeAccount;
