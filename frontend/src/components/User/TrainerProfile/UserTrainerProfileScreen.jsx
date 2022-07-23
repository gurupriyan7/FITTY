import React, { useEffect } from 'react'
import { formControlLabelClasses } from '@mui/material'
import emptyprofilepic from '../../../images/profile-pic-avather.png'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import './TrainerProfileScreen.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AllTrainers } from '../../../features/featchTrainers/FeatchTrainersSlice'

const style = {
  position: 'absolute',
  top: '40%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
}
function UserTrainerProfileScreen() {
  const { trainers, isSuccess, isError, isLoading } = useSelector(
    (state) => state.featchAllTrainers,
  )
  const { id } = useParams()
  console.log('id', trainers)
  const dispatch = useDispatch()

  const [allTr, setAllTr] = useState([])

  useEffect(() => {
    if (trainers) {
      setAllTr(trainers)
    }
  }, [trainers])
  // const trainer = trainers.filter((data) => data._id ==id)

  // cover-image
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  // profile-img
  const [Popen, setPopen] = useState(false)
  const PhandleOpen = () => setPopen(true)
  const PhandleClose = () => setPopen(false)
  return (
    <>
      {trainers
        .filter((data) => data._id == id)
        .map((trainer) => (
          <>
            {/* cover-image */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  src={trainer.coverimage}
                  alt=""
                  className="coverimgpopup"
                />
              </Box>
            </Modal>
            {/* cover-image */}

            {/* profile image */}
            <Modal
              open={Popen}
              onClose={PhandleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <img
                  src={trainer.profileimage}
                  alt=""
                  className="profileimgpopup"
                />
              </Box>
            </Modal>
            {/* profile image */}

            
            <div className="singleplanscreen container-fluid">
              <div className="row">
                <div className="top col-12">
                  {trainer.coverimage ? (
                    <img
                      onClick={handleOpen}
                      src={trainer.coverimage}
                      alt=""
                      className="coverimg"
                    />
                  ) : (
                    <img src={emptyprofilepic} alt="" className="coverimg" />
                  )}
                </div>
                <div className="updetails">
                  {trainer.profileimage ? (
                    <img
                      onClick={PhandleOpen}
                      src={trainer.profileimage}
                      alt=""
                      className="Sprofilepic"
                    />
                  ) : (
                    <img src={emptyprofilepic} alt="" className="profilepic" />
                  )}

                  <div className="pdetails">
                    <div className="Pnamediv">
                      <p className="Pname primary-Color">{trainer.name}</p>
                      <div className="Peditbtndiv">
                        {/* <Link to={"editprofile"}><button className="Peditbtn">Edit</button></Link>  */}
                      </div>
                    </div>
                    <div className="Pemaildiv">
                      <p className="Pemail">
                        <span>{trainer.email}</span>
                        <br />
                        <span>{trainer.phoneNumber}</span>
                      </p>
                    </div>
                    <div className="pedit">
                      {/* <buttom className="peditbtn">Edit</buttom> */}
                    </div>
                    <hr className="Pline" />
                    <div className="noPostsdiv">
                      <div className="left">
                        <h5 className="plans primary-Color">Plans</h5>
                        <h5 className="planscount">2</h5>
                      </div>
                      <div className="center">
                        <h5 className="clients primary-Color">Clients</h5>
                        <p className="clientscount">{trainer.coached}</p>
                      </div>
                      <div className="right">
                        <h5 className="posts primary-Color">Slots</h5>
                        <h5 className="postscount">{trainer.slots}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <TrainerProfilePostScreen /> */}
          </>
        ))}
    </>
  )
}

export default UserTrainerProfileScreen
