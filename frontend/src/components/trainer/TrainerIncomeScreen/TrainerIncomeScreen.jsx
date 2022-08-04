import React from 'react'
import './TrainerIncomeScreen.scss'

import { useDispatch, useSelector } from 'react-redux'
import {
  getTrainerOrders,
  paymentRequest,
} from '../../../features/TrainerPlans/TrainerPlanSlice'
import { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { toast } from 'react-toastify'
import { useState } from 'react'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function TrainerIncomeScreen() {
  const dispatch = useDispatch()
  const { isLoading, isSuccess, isError, trainerOrders, message } = useSelector(
    (state) => state.trainerPlan,
  )
  console.log('orders', trainerOrders)
  useEffect(() => {
    dispatch(getTrainerOrders())
  }, [isSuccess])
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
  }, [isError])

  const reqtoPayment = (id) => {
    dispatch(paymentRequest(id))
  }
  return (
    <div className="TrainerIncomeScreen">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Plane Name</StyledTableCell>
              <StyledTableCell align="left">Purchased By</StyledTableCell>
              <StyledTableCell align="left">
                Purchesed Amount(₹)
              </StyledTableCell>
              <StyledTableCell align="left">Your commision(₹)</StyledTableCell>
              <StyledTableCell align="left">
                Purchased date
              </StyledTableCell>
              <StyledTableCell align="left">Options</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trainerOrders.map((row) => (
              <StyledTableRow key={row.planeName}>
                <StyledTableCell align="left">{row.planeName}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.user.name}
                </StyledTableCell>
                <StyledTableCell align="left">
                  ₹{row.amount / 100}
                </StyledTableCell>
                <StyledTableCell align="left">
                  ₹{row.amount / 100 - row.amount / 1000}
                </StyledTableCell>
                <StyledTableCell
                  className='green'
                  align="left"
                >
                  {row.date}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.trainerPaymentStatus == 'requested' ? (
                    <p className="requested">Requested</p>
                  ) : row.trainerPaymentStatus == 'success' ? (
                    <p className="success">Payment Recived</p>
                  ) : (
                    <button
                      onClick={() => reqtoPayment(row._id)}
                      className="reqBtn"
                    >
                      Request
                    </button>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TrainerIncomeScreen
