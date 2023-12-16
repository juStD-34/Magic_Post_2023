import React from "react";
import Datarow from "../Pagination/Datarow";
import TablePagination from "@mui/material/TablePagination";

import { Typography, CardBody } from "@material-tailwind/react";

const TBody = ({ TABLE_HEAD, TABLE_ROWS, type, page, setPage }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - TABLE_ROWS.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  let Data =
    rowsPerPage > 0
      ? TABLE_ROWS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : TABLE_ROWS;

  return (
    <CardBody className="overflow-x-auto overflow-y-auto px-0 pb-2  rounded-lg">
      <table className="min-w-full mx-auto my-auto  table-fixed text-left border-t-2 border-gray-300 rounded-2xl">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 text-left p-4 bg-gray-200"
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
          <Datarow currentItems={Data} type={type} />
          {emptyRows > 0 && (
            <tr style={{ height: 72 * emptyRows }}>
              <td aria-hidden />
            </tr>
          )}
        </tbody>
      </table>
      <TablePagination
        component="div"
        count={TABLE_ROWS.length}
        page={page}
        rowsPerPageOptions={[4, 5]}
        slotProps={{
          actions: {
            showFirstButton: true,
            showLastButton: true,
          },
        }}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </CardBody>
  );
};

export default TBody;
