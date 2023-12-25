import Modal from "../../../shared/Modal/Modal";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { Typography } from "@material-tailwind/react";

import React from "react";


export default function Header({ head, intro, add }) {
  return (
    <div className="flex">
      <div className="items-start w-[50%]">
        <Typography variant="h5" color="blue-gray">
          {head}
        </Typography>
        <Typography color="gray" className="hidden sm:block mt-1 font-normal">
          See information about {intro}
        </Typography>
      </div>
      <div className={`${add} w-[50%] my-auto text-right`}>
        <div className="inline-block">
          <Modal
            label="Account"
            icon={
              <MdOutlinePersonAddAlt className="h-4 w-4 mr-2 "></MdOutlinePersonAddAlt>
            }
            color="bg-green-400"
          />
        </div>
      </div>
    </div>
  );
}
