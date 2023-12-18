import React from "react";
import { Typography } from "@material-tailwind/react";
import { action, account, deliver, confirm } from "./Button";
import Modal from "../../Modal/Modal";
import { TiDeleteOutline } from "react-icons/ti";

export function Row({ type, row, isTrade }) {
  var icons;
  var rowData = Object.values(row);
  const online = rowData.filter((data) => typeof data == "boolean")[0];
  const acc = rowData.filter((data) => typeof data == "object")[0];

  const [onLine, setOnLine] = React.useState(online);
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  switch (type) {
    case "ceo":
      icons = [account({ ...acc }), action({ toggleOpen, open, name: rowData[0], address: rowData[1]})];
      break;
    case "employee":
      isTrade
        ? (icons = [deliver(onLine), confirm(onLine, setOnLine)])
        : (icons = [deliver(onLine)]);
      break;
    case "statistic":
      icons = [deliver(onLine)];
      break;
    case "TradeManager":
      rowData.pop();
      icons = [ 
        account({...row}),
        <Modal
          label="Delete"
          icon={<TiDeleteOutline className="h-5 w-5 " />}
          color="bg-red-400"
        />,
      ];
      break;
    default:
      break;
  }

  rowData = rowData.filter((data) => typeof data !== "boolean");
  rowData = rowData.filter((data) => typeof data !== "object");
  return (
    <tr>
      {rowData.map((data) => (
        <td className="p-4 border-b border-blue-gray-50">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal w-max"
          >
            {data}
          </Typography>
        </td>
      ))}

      {icons.map((data) => (
        <td className="p-4 border-b border-blue-gray-50">
          <div className="w-max">{data}</div>
        </td>
      ))}
    </tr>
  );
}

export default Row;