import React from "react";
import { Typography } from "@material-tailwind/react";

export function Received({ name, address, classes }) {
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
          </div>
        </div>
      </td>

      <td className={classes}>
        <div className="flex flex-col">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {address}
          </Typography>
        </div>
      </td>
    </tr>
  );
}

export default Received;
