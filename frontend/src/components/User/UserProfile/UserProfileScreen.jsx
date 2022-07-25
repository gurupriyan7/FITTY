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
import { imageUpload } from '../../../util/cloudniary/imageUpload'
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


function UserProfileScreen() {
  const dispatch = useDispatch()

  // edit-form-data
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth,
  )
  // post-count
  const { userposts } = useSelector((state) => state.userPost)
  const [postCount, setPostCount] = useState(0)

  useEffect(() => {
    if (isSuccess) {
      edithandleClose()
    }
  }, [user, isSuccess, isError, isLoading, message])

  useEffect(() => {
    if (userposts) {
      setPostCount(userposts.length)
    }
  }, [userposts])

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    coverimage: user.coverimage,
    profileimage: user.profileimage,
  })

  useEffect(() => {
    dispatch(updateUser(formData))
  }, [formData.coverimage, formData.profileimage])

// profile-image
  const [Pimage, setPimage] = useState(null)
  const onSubmit = async(e) => {
    e.preventDefault()
    setcload(true)
      const data = await imageUpload(Pimage)
      const pimge = await data.secure_url.toString()
      let newImage = { profileimage: pimge }
      setFormData((formData) => ({
        ...formData,
        ...newImage,
      }))
      setcload(false)
   
  }

  // cover-image
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [cload, setcload] = useState(false)
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
  const onChangeCoverimg = async (event) => {
    if (event.target.files && event.target.files[0]) {
      let Cimg = event.target.files[0]
      setCimage(Cimg)
      setcload(true)
      const data = await imageUpload(Cimg)
      const cimge = await data.secure_url.toString()
      let newImage = { coverimage: cimge }
      setFormData((formData) => ({
        ...formData,
        ...newImage,
      }))
      setcload(false)
    }
  }
  // upload-cover-image-

  // onchange-prview-profile
  const onChangePoverimg =async (event) => {
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
  if (cload) {
    return <h1>hello world</h1>
  }
  return (
    <>
      {/* edit-profile */}
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
                          ) : user.profileimage ? (
                            <img src={user.profileimage} alt="" className="PeditPimg" />
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
          <img src={user.coverimage} alt="" className="coverimgpopup" />
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
          <img src={user.profileimage} alt="" className="profileimgpopup" />
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
                onClick={handleOpen}
              />
            ) : user.coverimage ? (
              <img
                onClick={handleOpen}
                src={user.coverimage}
                alt=""
                className="coverimg"
              />
            ) : (
              <img src={emptyprofilepic} alt="" className="coverimg" />
            )}
          </div>
          <div className="updetails">
            {user.profileimage ? (
              <img
                onClick={PhandleOpen}
                src={user.profileimage }
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
                        <span className='emailPhone'>{formData.email}</span>
                        <br />
                        <span className='emailPhone'>{formData.phoneNumber}</span>
                      </p>
                    </div>
              <div className="pedit">
                {/* <buttom className="peditbtn">Edit</buttom> */}
              </div>
              <hr className="Pline" />
              <div className="noPostsdiv">
                <div className="left">
                  <h5 className="plans primary-Color">Plans</h5>
                  <h5 className="planscount">5</h5>
                </div>
                <div className="center">
                  <h5 className="clients primary-Color">Clients</h5>
                  <p className="clientscount">8</p>
                </div>
                <div className="right">
                  <h5 className="posts primary-Color">Posts</h5>
                  <h5 className="postscount">{postCount}</h5>
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
