import Modal from "../../Modal/Modal";
import { FiPrinter } from "react-icons/fi";
import { BsBuildingFillAdd } from "react-icons/bs";
import { Typography } from "@material-tailwind/react";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CiSearch } from "react-icons/ci";
import dayjs from "dayjs";

import React from "react";
import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

export default function TableInfor({ head, intro, add, statistic , setFromDate, setToDate, change, setChange}) {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="flex-col flex-[40%] sm:flex-[60%]">
          <Typography variant="h5" color="blue-gray">
            {head}
          </Typography>
          <Typography
            color="gray"
            className="hidden sm:inline-block mt-1 font-normal"
          >
            See information about {intro}
          </Typography>
        </div>
        {statistic && (
          <div className="sm:w-[40%] flex py-4 gap-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="From" defaultValue={dayjs()} onChange={ (e) => setFromDate(e.format("YYYY-MM-DD"))} />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="To" defaultValue={dayjs() } onChange={ (e) => setToDate(e.format("YYYY-MM-DD"))} />
            </LocalizationProvider>
            <Tooltip content="Filter by date">
              <IconButton
                variant="gradient"
                className="items-center justify-center flex bg-white"
                onClick={() => {
                  setChange(!change);
                  console.log("SSSS")
                }}
              >
                <CiSearch className="h-6 w-6" color="black"/>
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
      <div className={add}>
        <Modal
          label="Add Offices"
          icon={
            <BsBuildingFillAdd className="h-4 w-4 mr-2"></BsBuildingFillAdd>
          }
          color="bg-blue-500"
        />
        <NavLink to="/manager/statistic">
          <Button
            className={`flex items-center gap-4 bg-blue-500 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
          >
            <FiPrinter className="h-4 w-4"></FiPrinter>
          </Button>
        </NavLink>
      </div>
    </>
  );
}
