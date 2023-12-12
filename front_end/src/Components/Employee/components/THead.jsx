import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SendPack from "../Modal";

import {
  CardHeader,
  Typography,
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

const TableHead = ({ TABS, isTrade, setIsTrade, isCreate }) => {
  return (
    <div>
      <CardHeader floated={false} shadow={false}>
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              {isCreate ? "Sent Packages" : "Packages list"}
            </Typography>
            <Typography color="gray" className="hidden sm:flex mt-1 font-normal">
              See information about{" "}
              {isCreate
                ? "all sent packages"
                : "all arriving and arrived packages"}
            </Typography>
          </div>
          <div
            className={
              isCreate ? "flex shrink-0 flex-col gap-2 sm:flex-row" : "hidden"
            }
          >
            <SendPack />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="123" className="w-full md:w-max bg-gray-200 rounded-lg">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className="whitespace-nowrap z-20"
                  onClick={() => setIsTrade(!isTrade)}
                >
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="sm:ml-6 sm:block relative rounded-md shadow-sm ml-10">
            <div className="hidden pointer-events-none absolute inset-y-0 left-0 sm:flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-black"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              placeholder="Search package"
              className="block rounded-md border-0 outline-none py-1.5 pl-10 pr-15 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
      </CardHeader>
    </div>
  );
};

export default TableHead;
