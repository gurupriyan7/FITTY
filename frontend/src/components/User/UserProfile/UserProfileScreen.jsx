import * as React from 'react'
import './UserProfileScreen.scss'
import emptyprofilepic from '../../../images/profile-pic-avather.png'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import ProfilePostsScreen from '../ProfilePostsScreen/ProfilePostsScreen'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { reset, updateUser } from '../../../features/auth/authSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const style = {
  position: 'absolute',
  top: '40%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
}
const Editstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const Csample =
  'https://scontent.fcok8-1.fna.fbcdn.net/v/t39.30808-6/250713542_1729340387456304_9196444806310970091_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ya_QKB6_JiEAX-DUkTD&_nc_oc=AQkIhhX6I1qqSs6vKnplWXbhE3T3ZQQF_7ussLUE6Z16IL3PgOdiVa8EEzM1hC4SOoI&_nc_ht=scontent.fcok8-1.fna&oh=00_AT9Z1zqrW-8QqC4XeJhijblc0Chqv-aeiaQJyLwsANHKCA&oe=62D179AB'
const Psample =
  'https://scontent.fcok8-1.fna.fbcdn.net/v/t1.6435-9/82549164_1189955858061429_8521194662629736448_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=qIdwnaniLLoAX-DiBGy&tn=CpgIrfUW4Ca1UxJB&_nc_ht=scontent.fcok8-1.fna&oh=00_AT9VDCtaIvmdOOI2676HJVlpjFMdeV44ZlQTMydBdrhfPA&oe=62EAD2B7'

function UserProfileScreen() {
  const dispatch = useDispatch()

  // edit-form-data
  // const User = JSON.parse(localStorage.getItem('user'))
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth,
  )

  // const{name,email,phoneNumber}=singleUser
  useEffect(() => {
    if (isSuccess) {
      setFormData((prev) => ({
        ...prev,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
      }))
      edithandleClose()

    }
  }, [user, isSuccess, isError, isLoading, message])

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
  })

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = formData
    dispatch(updateUser(userData))
  }

  // cover-image
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  // profile-img
  const [Popen, setPopen] = useState(false)
  const PhandleOpen = () => setPopen(true)
  const PhandleClose = () => setPopen(false)
  //  edit-profile
  const [editopen, setEditopen] = React.useState(false)
  const edithandleOpen = () => setEditopen(true)
  const edithandleClose = () => setEditopen(false)

  // onchange-prview-cover
  const [Cimage, setCimage] = useState(null)
  const imageRef = useRef()
  const onChangeCoverimg = (event) => {
    if (event.target.files && event.target.files[0]) {
      let Cimg = event.target.files[0]
      setCimage(Cimg)
    }
  }
  // onchange-prview-profile
  const [Pimage, setPimage] = useState(null)
  const onChangePoverimg = (event) => {
    if (event.target.files && event.target.files[0]) {
      let Pimg = event.target.files[0]
      setPimage(Pimg)
    }
  }

  function changeValue(e) {
    setFormData((prevestate) => ({
      ...prevestate,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <>
      {/* edit-image */}
      <Modal
        open={editopen}
        onClose={edithandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Editstyle}>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            <p className="editProfileTitle primary-Color"></p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="container Edit-profile ">
              <div className="row">
                <div className="col-lg-10 col-xl-9  mx-auto">
                  <div className="card flex-row my-5 border-0 shadow rounded-4 overflow-hidden ">
                    <div className="  d-md-flex"></div>
                    <div className="card-body p-4 p-sm-5 card login-card">
                      <h3 className=" Login-text text-center   fs-9">
                        Edit Profile
                      </h3>
                      <form onSubmit={onSubmit}>
                        <div className="editProfieimgdiv">
                          {Pimage ? (
                            <img
                              src={URL.createObjectURL(Pimage)}
                              alt=""
                              className="PeditPimg"
                            />
                          ) : Psample ? (
                            <img src={Psample} alt="" className="PeditPimg" />
                          ) : (
                            <img
                              src={emptyprofilepic}
                              alt=""
                              className="PeditPimg"
                            />
                          )}
                          <AddAPhotoIcon className="addPimageicon" />
                          <input
                            onClick={onChangePoverimg}
                            type="file"
                            className="editPimage"
                          />
                        </div>
                        <div className="form-floating mb-1 Linput2">
                          <input
                            type="text"
                            className="form-control"
                            onChange={changeValue}
                            value={formData.name}
                            id="floatingInputName"
                            name="name"
                            placeholder="Name"
                          />
                          <label htmlFor="floatingInputName">Name</label>
                        </div>
                        <div className="form-floating mb-1 Linput2">
                          <input
                            type="email"
                            className="form-control"
                            onChange={changeValue}
                            value={formData.email}
                            id="floatingInputEmail"
                            name="email"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInputEmail">
                            Email address
                          </label>
                        </div>
                        <div className="form-floating mb-1 Linput2">
                          <input
                            type="text"
                            className="form-control"
                            onChange={changeValue}
                            value={formData.phoneNumber}
                            id="floatingInputPhone"
                            name="phoneNumber"
                            placeholder="PhoneNumber"
                          />
                          <label htmlFor="floatingInputPhone">
                            PhoneNumber
                          </label>
                        </div>

                        <div className="d-grid ">
                          <button
                            className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                            type="submit"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
      {/* edit-image */}

      {/* cover-image */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={Csample} alt="" className="coverimgpopup" />
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
          <img src={Psample} alt="" className="profileimgpopup" />
        </Box>
      </Modal>
      {/* profile image */}

      {/* Edit-Profile */}
      {/* Edit-Profile */}
      <div className="singleplanscreen container-fluid">
        <div className="row">
          <div className="top col-12">
            <AddAPhotoIcon className="addCovericon" />
            <input
              onChange={onChangeCoverimg}
              type="file"
              className="proimginput"
            />

            {Cimage ? (
              <img
                src={URL.createObjectURL(Cimage)}
                alt=""
                className="coverimg"
              />
            ) : Csample ? (
              <img
                onClick={handleOpen}
                src={Csample}
                alt=""
                className="coverimg"
              />
            ) : (
              <img src={emptyprofilepic} alt="" className="coverimg" />
            )}
          </div>
          <div className="updetails">
            {Psample ? (
              <img
                onClick={PhandleOpen}
                src={Psample}
                alt=""
                className="Sprofilepic"
              />
            ) : (
              <img src={emptyprofilepic} alt="" className="profilepic" />
            )}

            <div className="pdetails">
              <div className="Pnamediv">
                <p className="Pname primary-Color">{formData.name}</p>
                <div className="Peditbtndiv">
                  {/* <Link to={"editprofile"}><button className="Peditbtn">Edit</button></Link>  */}
                  <button onClick={edithandleOpen} className="Peditbtn">
                    Edit
                  </button>
                </div>
              </div>
              <div className="Pemaildiv">
                <p className="Pemail">
                  <span>{formData.email}</span>
                  <br />
                  <span>{formData.phoneNumber}</span>
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
                  <p className="clientscount">8</p>
                </div>
                <div className="right">
                  <h5 className="posts primary-Color">Posts</h5>
                  <h5 className="postscount">7</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfilePostsScreen />
    </>
  )
}

export default UserProfileScreen
