import React, { useState } from 'react'
import './AddTrainerScreen.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddTrainer, reset } from '../../../features/adminAuth/AdminSlice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
function AddTrainerScreen() {
  

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.adminAuth,
  )
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess) {
      console.log("happy");
      navigate('/admin/trainers')
    }
    dispatch(reset())
  }, [isError, isLoading, isSuccess, message, dispatch, navigate])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    category: '',
    Password: '',
    password2: '',
    status:true
  })

  const { name, email, password, password2, phoneNumber, category,status } = formData

  const changeValue = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const trainerData = { name, email, password, phoneNumber, category,status }
    dispatch(AddTrainer(trainerData))
  }
  return (
    <div>
      <body>
        <div className="container trainerRegisterContainer ">
          <div className="row">
            <div className="col-lg-10 col-xl-9  mx-auto">
              <div className="card flex-row my-5 border-0 shadow rounded-4 overflow-hidden login-div">
                <div className="card-body p-4 p-sm-5 card login-card">
                  <h3 className=" Login-text text-center   fs-9">
                    Add Trainer
                  </h3>
                  <form onSubmit={onSubmit}>
                    <div className="form-floating mb-1 Linput2">
                      <input
                        type="text"
                        className="form-control"
                        onChange={changeValue}
                        value={name}
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
                        value={email}
                        id="floatingInputEmail"
                        name="email"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInputEmail">Email address</label>
                    </div>
                    <div className="form-floating mb-1 Linput2">
                      <input
                        type="text"
                        className="form-control"
                        onChange={changeValue}
                        value={phoneNumber}
                        id="floatingInputPhone"
                        name="phoneNumber"
                        placeholder="PhoneNumber"
                      />
                      <label htmlFor="floatingInputPhone">PhoneNumber</label>
                    </div>
                    <div className="form-floating mb-1 Linput2">
                      <input
                        type="text"
                        className="form-control"
                        onChange={changeValue}
                        value={category}
                        id="floatingInputcategory"
                        name="category"
                        placeholder="category"
                      />
                      <label htmlFor="floatingInputcategory">Category</label>
                    </div>
                    <div className="form-floating mb-1 Linput2">
                      <input
                        type="password"
                        className="form-control"
                        onChange={changeValue}
                        value={password}
                        id="floatingPassword"
                        name="password"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-1 Linput2">
                      <input
                        type="password"
                        className="form-control"
                        onChange={changeValue}
                        value={password2}
                        id="floatingPassword2"
                        name="password2"
                        placeholder="Re-Enter Password"
                      />
                      <label htmlFor="floatingPassword2">
                        Re-Enter Password
                      </label>
                    </div>

                    <div className="d-grid ">
                      <button
                        className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                        type="submit"
                      >
                        Add Trainer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default AddTrainerScreen
