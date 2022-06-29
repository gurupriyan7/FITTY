import React from 'react'
import "./DataTable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const userRows=[
  {id:1, name:"Gurupriyan",email:"gurupriyanj@gmail.com",number:9074306855,status:"Active" },
  {id:2, name:"Gurupriyan",email:"gurupriyanj@gmail.com",number:9074306855,status:"Active" },
  {id:3, name:"Gurupriyan",email:"gurupriyanj@gmail.com",number:9074306855,status:"Blocked" },
  {id:4, name:"Gurupriyan",email:"gurupriyanj@gmail.com",number:9074306855,status:"Active" },
  {id:5, name:"Gurupriyan",email:"gurupriyanj@gmail.com",number:9074306855,status:"Blocked" },
  {id:6, name:"Gurupriyan",email:"gurupriyanj@gmail.com",number:9074306855,status:"Active" },
  {id:7, name:"Gurupriyan",email:"gurupriyanj@gmail.com",number:9074306855,status:"Blocked" },
]
function DataTale() {
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
            <TableCell className='tableCell'>Tracking Id</TableCell>
            <TableCell className='tableCell'>Name</TableCell>
            <TableCell className='tableCell'>Email</TableCell>
            <TableCell className='tableCell'>PhoneNumber</TableCell>
            <TableCell className='tableCell' >Status</TableCell>
            <TableCell className='tableCell' >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userRows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.number}</TableCell>
              <TableCell className="tableCell">
                <span className={`status${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                        { row.status=="Active" ? <button className='blockbtn'>Block</button> :
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