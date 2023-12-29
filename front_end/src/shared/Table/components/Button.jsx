import { Chip, IconButton, Tooltip } from "@material-tailwind/react";

import { TbCubeSend } from "react-icons/tb";
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
import { autoForwarding } from "../../../utils/autoForwarding";
import { updateSuccessPackage } from "../../../utils/updateSuccessPackage";
import { updateFailPackage } from "../../../utils/updateFailPackage";

export const deliver = (online) => (
  <Chip
    variant="ghost"
    size="sm"
    value={online ? "arrived" : "on delivering"}
    className={online ? "bg-green-400" : "  bg-red-300"}
  />
);

export const confirm = (id, isTrade, setChange, change, userId) => (
  <Tooltip content="Confirm arrived">
    <IconButton
      variant="gradient"
      className="items-center justify-center flex bg-white"
      onClick={() => { autoForwarding(id, isTrade, change, setChange, userId); console.log("aäutoForward", userId) }}
    >
      <TiTickOutline className="h-4 w-4 " color={"green"} />
    </IconButton>
  </Tooltip>
);

export const confirmArrivedUser = (packCode, change, setChange) => (
  <Tooltip content="Confirm arrived">
    <IconButton
      variant="gradient"
      className="items-center justify-center flex bg-white"
      onClick={() => { updateSuccessPackage(packCode);setChange(!change); console.log("C") }}
    >
      <TiTickOutline className="h-4 w-4 " color={"green"} />
    </IconButton>
  </Tooltip>
);

export function account(username, password, phone, change, setChange) {
  return (
    <Modal
      label="Account"
      username={username}
      password={password}
      phone={phone}
      change={change}
      setChange={setChange}
      icon={<BsPersonCircle className="h-4 w-4 mr-2" />}
      color="bg-green-400"
    />
  );
}

export function account2(staffID, change, setChange) {
  // console.log(staffID, change, setChange, "account setChange");
  console.log(staffID, ":223123");
  return (
    <Modal
      label="Account3"
      staffID={staffID}
      change={change}
      setChange={setChange}
      icon={<BsPersonCircle className="h-4 w-4 mr-2" />}
      color="bg-green-400"
    />
  );
}

export const send = (id, isTrade, setChange, change, userId) => (
  <Tooltip content="Send Package">
    <IconButton
      variant="gradient"
      color="white"
      className="items-center justify-center flex "
      onClick={() => { autoForwarding(id, isTrade, change, setChange, userId); }}
    >
      <TbCubeSend className="h-10 w-10" color="lightGreen" />
    </IconButton>
  </Tooltip>
);

export const cancel = (id, change, setChange, userId) => (
  <Tooltip content="Cancel">
    <IconButton
      variant="gradient"
      color="white"
      className="items-center justify-center flex "
      onClick={() => { updateFailPackage(id, userId, change, setChange);}}
    >
      <TiDeleteOutline className="h-6 w-6" color="red" />
    </IconButton>
  </Tooltip>
);

export const action = ({toggleOpen, open, name, address, staffID, change, setChange}) => {
  return (
    <div className="flex">
      <Button
        className="items-center h-[30%] gap-4 bg-blue-400 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        size="sm"
        onClick={toggleOpen}
      >
        <FaPlus className="h-5 w-5 transition-transform group-before:rotate-45 group-after:-rotate-45" />
      </Button>
      <Collapse open={open} className="flex flex-col w-10">
        <Modal
          label="Print"
          icon={<FiPrinter className="h-5 w-5"></FiPrinter>}
          color="bg-blue-500"
        />
        <Modal
          label="Edit"
          icon={<FaRegEdit className="h-5 w-5 " />}
          color="bg-red-400"
          name={name}
          address={address}
          change={change}
          setChange={setChange}
          staffID={staffID}
        />
        <Modal
          label="Delete"
          icon={<TiDeleteOutline className="h-5 w-5 " />}
          color="bg-red-400"
          name={name}
          address={address}
          change={change}
          setChange={setChange}
        />
      </Collapse>
    </div>
  );
};
