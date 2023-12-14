import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Modal from "../Modal/Modal";
import { Button } from "flowbite-react";
import { FiPrinter } from "react-icons/fi";
import { BsBuildingFillAdd } from "react-icons/bs";


import {
  CardHeader,
  Typography,
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

const TableHead = ({ TABS, isTrade, setIsTrade, type }) => {
  let intro = "all sent packages",
    head = "Packages list",
    add = "";
  switch (type) {
    case "ceo":
      head = "Offices List";
      intro = "all offices";
      add = "flex shrink-0 flex-col gap-2 sm:flex-row";
      break;
    case "employee":
      add = "hidden";
      break;
    default:
      break;
  }
  return (
    <div>
      <CardHeader floated={false} shadow={false}>
        <div className="flex items-center mx-2 justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              {head}
            </Typography>
            <Typography
              color="gray"
              className="hidden sm:flex mt-1 font-normal"
            >
              See information about {intro}
            </Typography>
          </div>
          <div className={add}>
            <Modal label="Add Offices" icon={<BsBuildingFillAdd className="h-4 w-4 mr-2"></BsBuildingFillAdd>} color="bg-blue-500"/>
            <Button
              className="flex items-center gap-4 bg-blue-500 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              size="sm"
            >
              <FiPrinter className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col mx-4 items-center justify-between gap-4 md:flex-row">
          <Tabs value="123" className="w-full md:w-max bg-gray-200 rounded-lg">
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
          <div className="sm:ml-6 sm:block relative rounded-md shadow-sm ml-10">
            <div className="hidden pointer-events-none absolute inset-y-0 left-0 sm:flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-black"
                aria-hidden="true"
              />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block rounded-md border-0 outline-none py-1.5 pl-10 pr-15 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
      </CardHeader>
    </div>
  );
};

export default TableHead;
