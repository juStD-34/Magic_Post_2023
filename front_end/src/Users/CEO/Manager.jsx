import React, { useEffect, useState } from "react";
import Navbar from "../../shared/Layout/Navbar";
import Sidebar from "../../shared/Layout/Sidebar/Sidebar";
import TBody from "../../shared/Table/TBody";
import TableHead from "../../shared/Table/THead";
import { Card } from "@material-tailwind/react";
import axios from "axios";

const TABS = [
  {
    label: "Trading",
    value: "123",
  },
  {
    label: "Central",
    value: "456",
  },
];

const TABLE_HEAD = [
  "Office's ID",
  "Office's Name",
  "Manager's ID",
  "Manager's Name",
  "Manager's Phone",
  "Account",
  "Action",
];

const row = [
  {1:  "Name", 2: "Address", 3: "City",}
]

let res = [
  {
    name: "[BN B SOC SON SOC]",
    address: "Manager",
    account: {
      staffId: "123AASD",
      usrname: "",
      password: "",
      phone: "",
    },
  },
  {
    name: "[BN B Mega  CAU GIAY SOC]",
    address: "Programator",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    }
  },
  {
    name: "AAAAA",
    address: "Executive",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    },
  },
  {
    name: "123",
    address: "Programator",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    },
  },
  {
    name: "456",
    address: "Manager",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    },
  },
  {
    name: "789",
    address: "Manager",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    },
  },
  {
    name: "126",
    address: "Programator",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    },
  },
];

let fake = [
  {
    name: "[BN B Mega SOC]",
    address: "Manager",
    account: {
      staffId: "",
      usrname: "",
      password: "",
      phone: "",
    },
  },
];

var TABLE_ROWS = res;

export default function Manager() {
  const [isTrade, setIsTrade] = useState(true);
  const [page, setPage] = React.useState(0);

  const [TPData, setTPData] = useState([]);
  const [CPData, setCPData] = useState([]);

  const [change, setChange] = useState(false);

  const [TPost, setTPost] = useState();
  const [CPost, setCPost] = useState();
  const type = "ceo";
  const {getPostOffice} = require("../../Authorization/Info");

  const [userData, setUserdata]= useState([]); 
    useEffect( ()=>{
        const getUserdata= async()=>{
            const reqData= await fetch("http://localhost:3001/postOffice");
            const resData= await reqData.json();
            setUserdata(resData);
            console.log(resData);
        }
        getUserdata();
    },[change]);
    var data2 = [{"name":"Lenovo Thinkpad 41A4298","website":"google"},
    {"name":"Lenovo Thinkpad 41A2222","website":"google"},
    {"name":"Lenovo Thinkpad 41Awww33","website":"yahoo"},
    {"name":"Lenovo Thinkpad 41A424448","website":"google"},
    {"name":"Lenovo Thinkpad 41A429rr8","website":"ebay"},
    {"name":"Lenovo Thinkpad 41A429ff8","website":"ebay"},
    {"name":"Lenovo Thinkpad 41A429ss8","website":"rediff"},
    {"name":"Lenovo Thinkpad 41A429sg8","website":"yahoo"}]

  var data = userData.map(({poName, poAddress, managerID}) => ({poName, poAddress, managerID}));
  // var data_filter = data.filter( element => element.role =="0");
  //Take CPost and TPost data
  useEffect(() => {
    const fetchTPostData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getPostByType', {
          params: {
            type: 'TP', // Thay 'yourType' bằng giá trị thực tế cần truy vấn
          },
        });

        setTPost(response.data.Post);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Xử lý lỗi nếu cần thiết
      }
    };
    const fetchCPostData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getPostByType', {
          params: {
            type: 'CP', // Thay 'yourType' bằng giá trị thực tế cần truy vấn
          },
        });

        setCPost(response.data.Post);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTPostData();
    fetchCPostData();
  }, [change]);
  useEffect(() => {
    if (TPost) {
      const generatedTPData = TPost.map((post) => {
        console.log('aaaaaaaaaaaaaaaaa',post)
        return {
          name: post.poName,
          address: post.poAddress,
          staffId: post.managerID,
          managerName: post.managerFullName,
          phone: post.phone,
        };
      });
  
      setTPData(generatedTPData);
    }
  }, [TPost])

  useEffect(() => {
    if (CPost) {
      const generatedCPData = CPost.map((post) => {
        return {
          name: post.poName,
          address: post.poAddress,
          staffId: post.managerID,
          managerName: post.managerFullName,
          phone: post.phone,
        };
      });
  
      setCPData(generatedCPData);
    }
  }, [CPost]);
  // console.log(TPData);
  // console.log("CPost", CPData);
  TABLE_ROWS = isTrade ? TPData : CPData; 

  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="h-screen w-[85%] sm:w-full px-auto">
        <Navbar />
        <main className="max-w-4xl flex-4 mx-auto py-2 my-4 rounded-lg">
          <Card className="w-full">
            <TableHead
              TABS={TABS}
              isTrade={isTrade}
              setPage={setPage}
              type={type}
              setIsTrade={setIsTrade}
              change={change}
              setChange={setChange}
            />
            <TBody
              TABLE_ROWS={TABLE_ROWS}
              type={type}
              TABLE_HEAD={TABLE_HEAD}
              page={page}
              setPage={setPage}
              change={change}
              setChange={setChange}
            />
          </Card>
        </main>
      </div>
    </div>
  );
}
