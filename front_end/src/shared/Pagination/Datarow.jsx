import {
  Typography,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { TiTickOutline } from "react-icons/ti";

export default function Datarow({ currentItems }) {
  return (
    <>
      {currentItems.map(({ name, email, job, org, online, date }, index) => {
        const isLast = index === currentItems.length - 1;
        const classes = isLast
          ? "p-4 border-b border-gray-300"
          : "p-4 border-b border-blue-gray-50";

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
    </>
  );
}
