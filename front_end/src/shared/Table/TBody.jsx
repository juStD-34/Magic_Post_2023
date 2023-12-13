import React from "react";
import Paginate from "../Pagination/Paginate";

import {
    Typography,
    CardBody,
} from "@material-tailwind/react";

const TBody = ({ TABLE_HEAD, TABLE_ROWS, type }) => {
  return (
    <CardBody className="overflow-x-auto overflow-y-auto px-0 pb-2  rounded-lg">
      <table className="min-w-full mx-auto my-auto  table-fixed text-left border-t-2 border-gray-300 rounded-2xl">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 text-center p-4 bg-gray-200"
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
          </tr>
        </thead>
        <tbody>
          <Paginate data={TABLE_ROWS} type={type} className="flex flex-col"/>
        </tbody>
      </table>
    </CardBody>
  );
};

export default TBody;
