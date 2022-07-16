import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { AllTrainers,changeTrainerStatus,deleteTrainer } from '../../../features/adminAuth/AdminSlice'
import './AllTrainer.scss'

// const user = [{},{},{}]
function AllTrainer() {
  const dispatch = useDispatch()

 const changeStatusTrainer = (id)=>{
  dispatch(changeTrainerStatus(id))
 }

 const deleteTr = (trId)=>{
  dispatch(deleteTrainer(trId))
 }

  const { trainers,isModified,isError,isLoading,isDeleted } = useSelector((state) => state.adminAuth)

  useEffect(() => {
    dispatch(AllTrainers())
    console.log(trainers, 'hellooooo')
  }, [dispatch,isModified,isDeleted])

  return (
    <div className="DataTable">
      <div className="head">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="title primary-Color">All Trainers</div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Employ Id</TableCell>
              <TableCell className="tableCell">Name</TableCell>
              <TableCell className="tableCell">Email</TableCell>
              <TableCell className="tableCell">PhoneNumber</TableCell>
              <TableCell className="tableCell">Category</TableCell>
              <TableCell className="tableCell">Available Slots</TableCell>
              <TableCell className="tableCell">Status</TableCell>
              <TableCell className="tableCell">Action</TableCell>
              <TableCell className="tableCell">option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trainers.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.email}</TableCell>
                <TableCell className="tableCell">{row.phoneNumber}</TableCell>
                <TableCell className="tableCell">{row.category}</TableCell>
                <TableCell className="tableCell">{row.slots}</TableCell>
                <TableCell className="tableCell">
                  <span className={row.status ? 'active' : 'block'}>
                    {row.status ? 'Active' : 'Blocked'}
                  </span>
                </TableCell>
                <TableCell className="tableCell">
                  {row.status ? (
                    <button onClick={()=>changeStatusTrainer(row._id)} className="blockbtn">Block</button>
                  ) : (
                    <button onClick={()=>changeStatusTrainer(row._id)} className="unblockbtn">unBlock</button>
                  )}
                </TableCell>
                <TableCell>
                  <button onClick={()=>{deleteTr(row._id)}} className="deleteBtn">Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default AllTrainer
