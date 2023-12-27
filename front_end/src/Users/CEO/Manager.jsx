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
  "Office's Name",
  "Office's Address",
  "Manager Name",
  "Action",
];

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
  const [change, setChange] = useState(true);
  const [TPost, setTPost] = useState();
  const [CPost, setCPost] = useState();
  const type = "ceo";

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
        return {
          name: post.postOfficeName,
          address: post.postOfficeAddress,
          account: {
            staffId: post.managerID,
            usrname: "", // Điền thông tin tài khoản nếu có
            password: "", // Điền thông tin tài khoản nếu có
            phone: post.managerPhone,
          },
        };
      });
  
      setTPData(generatedTPData);
    }
  }, [TPost])

  useEffect(() => {
    if (CPost) {
      const generatedCPData = CPost.map((post) => {
        return {
          name: post.postOfficeName,
          address: post.postOfficeAddress,
          account: {
            staffId: post.managerID,
            usrname: post.managerFullName, 
            password: "xxx",
            phone: post.managerPhone,
          },
        };
      });
  
      setCPData(generatedCPData);
    }
  }, [CPost]);
  console.log(TPData);
  console.log("CPost", CPData);
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
            />
            <TBody
              TABLE_ROWS={TABLE_ROWS}
              type={type}
              TABLE_HEAD={TABLE_HEAD}
              page={page}
              setPage={setPage}
            />
          </Card>
        </main>
      </div>
    </div>
  );
}
