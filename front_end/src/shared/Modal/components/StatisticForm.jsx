import React from "react";
import { Tab, Tabs, TabsHeader, Typography } from "@material-tailwind/react";
import Datarow from "../../Pagination/Datarow";

const TABS = [
  {
    label: "Received",
    value: "123",
  },
  {
    label: "Sent",
    value: "456",
  },
];

const TABLE_HEAD = ["Package's ID", "From"];

const TABLE_ROWS = [
  {
    name: "1231512231",
    address: "New York",
  },
  {
    name: "12315625116631",
    address: "New York",
  },
  {
    name: "163145216176176",
    address: "New York",
  },
  {
    name: "1251765125",
    address: "New York",
  },
  {
    name: "125161661",
    address: "New York",
  },
  {
    name: "126521412",
    address: "New York",
  },
  {
    name: "125171612612",
    address: "New York",
  },
  {
    name: "1265165215125",
    address: "New York",
  },
  {
    name: "125217125152151",
    address: "New York",
  },
];

const AccountForm = (props) => {
  const [isTrade, setIsTrade] = React.useState(true);
  return (
    <div className="flex my-6 sm:my-auto mx-12 sm:mx-96 fixed inset-0 max-h-sm h-[60%] z-50 outline-none focus:outline-none">
      <div className="relative w-auto mx-auto max-w-sm">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <form>
              <div className="space-y-12">
                <div className=" pb-4">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    All packages
                  </h2>

                  <Tabs
                    value="123"
                    className="w-full md:w-max bg-gray-200 rounded-lg"
                  >
                    <TabsHeader>
                      {TABS.map(({ label, value }) => (
                        <Tab
                          key={value}
                          value={value}
                          className="sm:whitespace-nowrap z-20"
                          onClick={() => setIsTrade(!isTrade)}
                        >
                          &nbsp;&nbsp;{label}&nbsp;&nbsp;
                        </Tab>
                      ))}
                    </TabsHeader>
                  </Tabs>

                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 text-left p-4 bg-gray-200"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}

                    <Datarow currentItems={TABLE_ROWS} type={null} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
