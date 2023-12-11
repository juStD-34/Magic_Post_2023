import React from "react";
import {
    Typography,
    CardBody,
    Chip,
    IconButton,
    Tooltip,
  } from "@material-tailwind/react";
  import { TiTickOutline } from "react-icons/ti";

const TBody = ({ TABLE_HEAD, TABLE_ROWS }) => {
  return (
    <CardBody className="overflow-x-auto mx-4 my-4 border-2 border-gray-300 rounded-lg">
      <table className="min-w-full table-auto text-left rounded-lg">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 bg-gray-200"
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
          {TABLE_ROWS.map(({ name, email, job, org, online, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {email}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70"
                    >
                      {org}
                    </Typography>
                  </div>
                </td>
                <td className={classes}>
                  <div className="w-max">
                    <Chip
                      variant="ghost"
                      size="sm"
                      value={online ? "arrived" : "on delivering"}
                      className={online ? "bg-green-400" : "bg-red-300"}
                    />
                  </div>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Tooltip content="Confirm arrived">
                    <IconButton
                      variant="text"
                      className="items-center justify-center flex"
                    >
                      <TiTickOutline
                        className="h-4 w-4 "
                        color={online ? "green" : "red"}
                      />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </CardBody>
  );
};

export default TBody;
