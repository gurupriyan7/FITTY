import "./Tables.scss";

import  React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {getAllOrders} from "../../../features/adminAuth/AdminSlice"
import { useDispatch, useSelector } from "react-redux";


const columns = [
  { id: "trackId", label: "Tracking ID", minWidth: 100 },
  { id: "plan", label: "Plan", minWidth: 100 },
  {
    id: "amount",
    label: "Amount",
    minWidth: 100,
    align: "right",
  },
  {
    id: "user",
    label: "User",
    minWidth: 100,
    align: "right",
  },
  {
    id: "trainer",
    label: "Trainer",
    minWidth: 100,
    align: "right",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 100,
    align: "right",
  },
  {
    id: "paymentMenthod",
    label: "Payment Method",
    minWidth: 100,
    align: "right",
  },
  {
    id: "paymentStatus",
    label: "Payment Status",
    minWidth: 100,
    align: "right",
    color: "green",
  },
];

function createData(
  trackId,
  plan,
  amount,
  user,
  trainer,
  date,
  paymentMenthod,
  paymentStatus
) {
  return {
    trackId,
    plan,
    amount,
    user,
    trainer,
    date,
    paymentMenthod,
    paymentStatus,
  };
}


// const rows = [
//   createData(
//     "123456789",
//     "Full Body",
//     2000,
//     "Gurupriyan",
//     "trainer",
//     "20-06-2022",
//     "PayPal",
//     "Success"
//   ),
 
  
// ];
function Tables() {
  const dispatch = useDispatch()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const {orders}=useSelector((state)=>state.adminAuth)
  useEffect(()=>{
    dispatch(getAllOrders())
  },[])

  const rows = orders.map((data)=>{
    return createData(data._id,data.planeName,data.amount,data.user.name,data.trainer.name,data.date,"Razorpay","Success")
  })
  

  return (
    <div className="tables">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default Tables;
