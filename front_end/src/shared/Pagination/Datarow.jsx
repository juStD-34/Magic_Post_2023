import {
  Typography,
} from "@material-tailwind/react";
import { action, account, deliver, confirm } from "../Pagination/components";

export default function Datarow({ currentItems, type }) {
  return (
    <>
      {currentItems.map(({ name, address, online, phone }, index) => {
        const isLast = index === currentItems.length - 1;
        const classes = isLast
          ? "p-4 border-b border-gray-300"
          : "p-4 border-b border-blue-gray-50";

        var icon;
        var icon2;

        switch (type) {
          case "ceo":
            icon = account;
            icon2 = action;
            break;
          case "employee":
            icon = deliver(online);
            icon2 = confirm(online);
            break;
          default:
            break;
        }
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
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {address}
                </Typography>
              </div>
            </td>

            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {phone}
              </Typography>
            </td>

            <td className={classes}>
              <div className="w-max">{icon}</div>
            </td>

            <td className={classes}>{icon2}</td>
          </tr>
        );
      })}
    </>
  );
}
