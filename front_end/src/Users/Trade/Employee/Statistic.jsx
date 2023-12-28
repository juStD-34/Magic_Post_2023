import React, { useEffect } from 'react'
import Navbar from '../../../shared/Layout/Navbar'
import Sidebar from '../../../shared/Layout/Sidebar/Sidebar'
import { Card } from '@material-tailwind/react'
import TableInfor from '../../../shared/Table/components/TableInfor'
import { Tabss } from '../../../shared/Table/components/tab'
import SearchPack from '../../../shared/Table/components/SearchPack'
import TBody from '../../../shared/Table/TBody'
import axios from 'axios'

const TABS = [
  { label: "SUCCESS", value: "123" },
  { label: "FAILED", value: "456" },
];

const successHead = ["Package's Code", "Receive's Address", "Receiver Name", "Receiver Phone"];
const failedHead = ["Package's Code", "Date", "Receiver Address", "Sender Address", "Sender Phone"];


const TradeStatistic = ({postId, userId}) => {
  const [page, setPage] = React.useState(0);
  const [isTrade, setIsTrade] = React.useState(true);
  const [successPackage, setSuccessPackage] = React.useState([]);
  const [failedPackage, setFailedPackage] = React.useState([]);
  const [change, setChange] = React.useState(true);
  const [TABLE_ROWS, setTABLE_ROWS] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const success = await axios.get('http://localhost:3001/getSuccessPackage', {
          params: {
            postId: postId
          }
        });
        const failed = await axios.get('http://localhost:3001/getFailedPackage');

        console.log("FFF", failed.data.Packages);
        console.log(success.data.Packages[0]);

        setSuccessPackage(success.data.Packages.map(pack => {
          return {
            code: pack.code,
            receiverAddress: pack.receiverAddress,
            receiverName: pack.receiverName,
            receiverPhone: pack.receiverPhone
          }
        }));

        const failedPackageDetails = await Promise.all(
          failed.data.Packages.map(async (pack) => {
            const code = pack.packageCode;
            try {
              const response = await axios.get('http://localhost:3001/getGuesspathByCode', { params: { code: code } });
              const packInfor = response.data.Guesspath;
              return {
                code: pack.packageCode,
                receiverAddress: packInfor.receiverAddress,
                senderAddress: packInfor.senderAddress,
                senderPhone: packInfor.senderPhone,
                date: pack.timeWent
              };
            } catch (err) {
              console.log(err);
              return null;
            }
          })
        );

        setFailedPackage(failedPackageDetails.filter(detail => detail !== null));
      } catch (error) {
        console.error(error);
        // Xử lý lỗi nếu cần thiết
      }
    };

    fetchData();
  }, [postId]);


  useEffect(() => {
    isTrade ? setTABLE_ROWS(successPackage) : setTABLE_ROWS(failedPackage);
  }, [change, isTrade, successPackage, failedPackage]);

  console.log("success", successPackage);
  console.log("failed", failedPackage);
  const TABLE_HEAD = isTrade ? successHead : failedHead;
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
              <SearchPack TABLE_ROWS={TABLE_ROWS} setTABLE_ROWS={setTABLE_ROWS} change={change} setChange={setChange} />
            </div>
            <TBody
              className="mt-4 border-2 border-gray-200 rounded-lg"
              TABLE_ROWS={TABLE_ROWS}
              type="tradeStat"
              TABLE_HEAD={TABLE_HEAD}
              page={page}
              setPage={setPage}
              isTrade={isTrade}
            />
          </Card>
        </main>
      </div>
    </div>
  )
}

export default TradeStatistic
