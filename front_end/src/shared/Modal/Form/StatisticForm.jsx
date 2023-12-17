import React from "react";
import { Tab, Tabs, TabsHeader, Typography } from "@material-tailwind/react";
import TablePagination from "@mui/material/TablePagination";

let res = [
  {
    name: "1231512231",
    address: "New York",
  },
  {
    name: "12315625116631",
    address: "New York",
  },
  {
    name: "163145216176176",
    address: "New York",
  },
  {
    name: "1251765125",
    address: "New York",
  },
  {
    name: "125161661",
    address: "New York",
  },
  {
    name: "126521412",
    address: "New York",
  },
  {
    name: "125171612612",
    address: "New York",
  },
  {
    name: "1265165215125",
    address: "New York",
  },
  {
    name: "125217125152151",
    address: "New York",
  },
];

const fake = [
  {
    name: "689969659",
    address: "New York",
  },
  {
    name: "56846949491",
    address: "New York",
  },
  {
    name: "46940044",
    address: "New York",
  },
  {
    name: "469469495",
    address: "New York",
  },
  {
    name: "46949464",
    address: "New York",
  },
  {
    name: "469496699",
    address: "New York",
  },
  {
    name: "4699446996496",
    address: "New York",
  },
  {
    name: "46969464946",
    address: "New York",
  },
  {
    name: "146949669469",
    address: "New York",
  },
];

let TABLE_ROWS = res;
const StatisticForm = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  let [isFrom, setIsFrom] = React.useState(true);
  TABLE_ROWS = isFrom ? res : fake;

  let Data =
    rowsPerPage > 0
      ? TABLE_ROWS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : TABLE_ROWS;

  return (
    <div className="flex my-6 sm:my-auto mx-8 sm:mx-96 fixed inset-0 max-h-sm h-[70%] z-50 outline-none focus:outline-none">
      <div className="w-auto mx-auto max-w-sm">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative bg-white outline-none focus:outline-none">
          {/*body*/}
          <div className="relative p-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              All packages
            </h2>
            <Tabs
              value="FROM"
              className="w-full md:w-full bg-gray-200 rounded-lg"
            >
              <TabsHeader>
                  <Tab
                    value="FROM"
                    className="sm:whitespace-nowrap z-20"
                    onClick={() => {
                      setIsFrom(true); 
                      setPage(0);
                    }}
                  >
                    &nbsp;&nbsp;FROM&nbsp;&nbsp;
                  </Tab>
                  <Tab
                    value="TO"
                    className="sm:whitespace-nowrap z-20"
                    onClick={() => {
                      setIsFrom(false); 
                      setPage(0);
                    }}
                  >
                    &nbsp;&nbsp;TO&nbsp;&nbsp;
                  </Tab>
              </TabsHeader>
            </Tabs>
            <table className="w-full mt-2 border-2 ">
              <thead>
                <tr
                  className="border-y border-blue-gray-100 text-center p-4 h-10 bg-gray-200"
                >
                  <td key="id">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Package's ID
                      </Typography>
                    </td>
                    <td key="adr">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {isFrom ? "From" : "To"}
                      </Typography>
                    </td>
                </tr>
              </thead>

              <tbody>
                {Data.map(({ name, address }) => {
                  const classes = "p-4 border-b border-blue-gray-50";
                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {address}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <TablePagination
            component={"div"}
            colSpan={2}
            count={TABLE_ROWS.length}
            page={page}
            rowsPerPageOptions={[4, 5]}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticForm;
