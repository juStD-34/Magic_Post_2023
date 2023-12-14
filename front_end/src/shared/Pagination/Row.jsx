import React from "react";
import { Typography } from "@material-tailwind/react";
import { action, account, deliver, confirm } from "./components/Button";

export function Row({ name, address, online, phone, classes, type }) {
  var icon;
  var icon2;
  const [onLine, setOnLine] = React.useState(online);
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  switch (type) {
    case "ceo":
      icon = account;
      icon2 = action({ toggleOpen, open, name, address, phone });
      break;
    case "employee":
      icon = deliver(onLine);
      icon2 = confirm(onLine, setOnLine);
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
          <Typography variant="small" color="blue-gray" className="font-normal">
            {address}
          </Typography>
        </div>
      </td>

      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {phone}
        </Typography>
      </td>

      <td className={classes}>
        <div className="w-max">{icon}</div>
      </td>

      <td className={classes}>{icon2}</td>
    </tr>
  );
}

export default Row;
