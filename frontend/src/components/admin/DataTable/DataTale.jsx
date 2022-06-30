import React, { useState } from 'react'
import "./DataTable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { AllUsers } from '../../../features/adminAuth/AdminSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DataTale() {
  
  const dispatch=useDispatch()
 
const {users}= useSelector((state)=>state.adminAuth)
console.log(users);
  useEffect(()=>{
    dispatch(AllUsers())  
  },[dispatch])
  return (
    <div className='DataTable'>
      <div className="head">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="title primary-Color">All Users</div>
      <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>User Id</TableCell>
            <TableCell className='tableCell'>Name</TableCell>
            <TableCell className='tableCell'>Email</TableCell>
            <TableCell className='tableCell'>PhoneNumber</TableCell>
            <TableCell className='tableCell' >Status</TableCell>
            <TableCell className='tableCell' >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row._id}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.phoneNumber}</TableCell>
              <TableCell className="tableCell">
                <span className={row.status ? "active" : "block"}>{row.status ? "Active" : "Blocked"}</span>
              </TableCell>
              <TableCell className="tableCell">
                        { row.status? <button className='blockbtn'>Block</button> :
                          <button className='unblockbtn'>unBlock</button>}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default DataTale