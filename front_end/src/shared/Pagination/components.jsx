import {
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

import { TiTickOutline } from "react-icons/ti";
import { Button } from "flowbite-react";
import { BsPersonCircle } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";

export const deliver = (online) => (
  <Chip
    variant="ghost"
    size="sm"
    value={online ? "arrived" : "on delivering"}
    className={online ? "bg-green-400" : "bg-red-300"}
  />
);

export const confirm = (online) => (
  <Tooltip content="Confirm arrived">
    <IconButton variant="text" className="items-center justify-center flex">
      <TiTickOutline className="h-4 w-4 " color={online ? "green" : "red"} />
    </IconButton>
  </Tooltip>
);

export const account = (
  <Button
    className="flex items-center gap-4 bg-green-500 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    size="sm"
  >
    <BsPersonCircle className="h-4 w-4 mr-2" />
    Manager
  </Button>
);



export const action = (
  <div className="flex">
    <Button
      className="flex items-center gap-4 bg-blue-400 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      size="sm"
    >
      <FiPrinter className="h-5 w-5" />
    </Button>
    <Button
      className="flex items-center gap-4 bg-red-400 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      size="sm"
    >
      <TiDeleteOutline className="h-6 w-6 " />
    </Button>
    <Button
      className="flex items-center gap-4 bg-red-400 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      size="sm"
    >
      <FaRegEdit className="h-5 w-5 " />
    </Button>
  </div>
);

