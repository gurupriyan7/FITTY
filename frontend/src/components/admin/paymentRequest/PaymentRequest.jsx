import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useDispatch, useSelector } from 'react-redux'
import './PaymentRequest.scss'
import {
  getAllOrders,
  payPayment,
  reset
} from '../../../features/adminAuth/AdminSlice'
function PaymentRequest() {
  const dispatch = useDispatch()
  const { orders,isPaymentSent } = useSelector((state) => state.adminAuth)
  useEffect(() => {
    dispatch(getAllOrders())
  }, [isPaymentSent])

  const payAmount = (orderId) => {
    dispatch(payPayment(orderId))
    dispatch(reset())
  }
  return (
    <div className="paymentTable">
      <div className="head">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="title primary-Color">Payment Request</div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCellh">PlanName</TableCell>
              <TableCell className="tableCellh">Trainer</TableCell>
              <TableCell className="tableCellh">Puchase Amount(₹)</TableCell>
              <TableCell className="tableCellh">
                Trainer Commission(₹)
              </TableCell>
              <TableCell className="tableCellh">Purchase Date</TableCell>
              <TableCell className="tableCellh">userPayment Status</TableCell>
              <TableCell className="tableCellh">options</TableCell>
              {/* <TableCell className="tableCell">option</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.planeName}
                </TableCell>
                <TableCell className="tableCell">{row.trainer.name}</TableCell>
                <TableCell className="tableCell">₹{row.amount / 100}</TableCell>
                <TableCell className="tableCell">
                  ₹{row.amount / 100 - row.amount / 1000}
                </TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell
                  className={
                    row.isPaid ? 'success tabelCell' : 'pending tableCell'
                  }
                >
                  {row.isPaid ? 'Success' : 'Pending'}
                </TableCell>
                <TableCell className="tableCell">
                  {row.trainerPaymentStatus == 'requested' ? (
                    <button
                      onClick={() => payAmount(row._id)}
                      className="sentPayment primary-Color"
                    >
                      send Payment
                    </button>
                  ) : row.trainerPaymentStatus == 'success' ? (
                    <p className="paid">Amount Paid</p>
                  ) : (
                    <p className="notreq">Not Requested</p>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default PaymentRequest
