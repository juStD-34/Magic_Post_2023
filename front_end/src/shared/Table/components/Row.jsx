import React from "react";
import { Typography } from "@material-tailwind/react";
import { action, account, deliver, confirm, send, cancel, confirmArrivedUser } from "./Button";
import Modal from "../../Modal/Modal";
import { TiDeleteOutline } from "react-icons/ti";

export function Row({ type, row, isTrade , setChange, change, userId}) {
  // isTrade = False : Pending ; True : Incoming
  var icons = [];
  var rowData = Object.values(row);
  const acc = rowData.filter((data) => typeof data == "object")[0];
  
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  const id = rowData[0];
  switch (type) {
    case "ceo":
      // icons = [account(acc.username, acc.password, change, setChange), action({ toggleOpen, open, name: rowData[0], address: rowData[1], change, setChange})];
      icons = [account(row.username, row.password, row.phone, change, setChange), action({ toggleOpen, open, name: rowData[0], address: rowData[1], change, setChange})];
      break;
    case "employee":
      isTrade
        ? (icons = [confirm(id, isTrade, setChange, change, userId)])
        : (icons = [confirm(id, isTrade, setChange, change, userId)]);
      break;
    case "statistic":
      icons = [];
      break;
    case "TradeManager":
      rowData.pop();

      icons = [ 
        account(row.username, row.password, row.phone, change, setChange),
        <Modal
          label="Delete2"
          {...row}
          change={change}
          setChange={setChange} 
          icon={<TiDeleteOutline className="h-5 w-5 " />}
          color="bg-red-400"
        />,
      ];
      break;
      case "TradeEmployee":
        icons = [send(id, isTrade, setChange, change, userId)];
        break;
      case "confirm":
        isTrade ? icons = [confirm(id, isTrade, setChange, change, userId)] : icons = [confirmArrivedUser(id, change, setChange), cancel(id, change, setChange, userId)];
        break;
      case "tradeStat":
        icons = [];
        break;
    default:
      break;
  }

  rowData = rowData.filter((data) => typeof data !== "boolean");
  rowData = rowData.filter((data) => typeof data !== "object");
  return (
    <tr>
      {rowData.map((data, index) => (
        <td key={index} className="p-4 border-b border-blue-gray-50">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal w-max"
          >
            {data}
          </Typography>
        </td>
      ))}

      {icons.map((data, index) => (
        <td key={index} className="p-4 border-b border-blue-gray-50">
          <div className="w-max">{data}</div>
        </td>
      ))}
    </tr>
  );
}

export default Row;
