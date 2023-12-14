import { Chip, IconButton, Tooltip } from "@material-tailwind/react";

import { TiTickOutline } from "react-icons/ti";
import { Button } from "flowbite-react";
import { BsPersonCircle } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { Collapse } from "@material-tailwind/react";

import Modal from "../../Modal/Modal";
import React from "react";

export const deliver = (online) => (
  <Chip
    variant="ghost"
    size="sm"
    value={online ? "arrived" : "on delivering"}
    className={online ? "bg-green-400" : "bg-red-300"}
  />
);

export const confirm = (online, setOnLine) => (
  <Tooltip content="Confirm arrived">
    <IconButton
      variant="text"
      className="items-center justify-center flex "
      onClick={() => setOnLine(true)}
    >
      <TiTickOutline className="h-4 w-4 " color={online ? "green" : "red"} />
    </IconButton>
  </Tooltip>
);

export const account = (
  <Modal
    label="Account"
    icon={<BsPersonCircle className="h-4 w-4 mr-2" />}
    color="bg-green-400"
  />
);

export const action = (props) => {
  return (
    <div className="flex">
      <Button
        className="items-center h-[30%] gap-4 bg-blue-400 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        size="sm"
        
        onClick={props.toggleOpen}
      >
        <FaPlus className="h-5 w-5 transition-transform group-before:rotate-45 group-after:-rotate-45" />
      </Button>
      <Collapse open={props.open} className="flex flex-col w-10">
        <Button
          className="items-center gap-4 bg-blue-400 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          size="sm"
        >
          <FiPrinter className="h-5 w-5" />
        </Button>
        <Modal
          label="Edit"
          icon={<FaRegEdit className="h-5 w-5 " />}
          color="bg-red-400"
          name={props.name}
          address={props.address}
          phone={props.phone}
        />
        {/* <Button
          className="items-center gap-4 bg-red-400 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          size="sm"
        >
          <TiDeleteOutline className="h-5 w-5 " />
        </Button> */}
        <Modal
          label="Delete"
          icon={<TiDeleteOutline className="h-5 w-5 " />}
          color="bg-red-400"
        />
      </Collapse>
    </div>
  );
};