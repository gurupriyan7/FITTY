import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './TrainerLoginScreen.scss'
import { reset, trainerLogin } from '../../../features/trainerAuth/TrainerSlice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
function TrainerLoginScreen() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const changeValue = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const { trainer, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.trainerAuth,
  )

  const onsubmit = (e) => {
    e.preventDefault()
    const trainerData = { email, password }
    dispatch(trainerLogin(trainerData))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || trainer) {
      navigate('/trainer/home')
    }
    dispatch(reset())
  }, [isError, message, isLoading, isSuccess, dispatch, navigate, trainer])

  return (
    <div>
      <body>
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-lg-10 col-xl-9  mx-auto">
              <div className="card flex-row my-5 border-0 shadow rounded-4 overflow-hidden logIn-div">
                <div className="card-img-lefttrainer d-none d-md-flex"></div>
                <div className="card-body p-4 p-sm-5 card login-card">
                  <h3 className=" Login-text text-center   fs-9">
                    Welcome Trainer
                  </h3>
                  <form>
                    <div className="form-floating mb-3 Linput">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInputEmail"
                        onChange={changeValue}
                        value={email}
                        name="email"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInputEmail">Email address</label>
                    </div>

                    <div className="form-floating mb-3 Linput2">
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={changeValue}
                        name="password"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="d-grid ">
                      <button
                        onClick={onsubmit}
                        className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                        type="submit"
                      >
                        SignIn
                      </button>
                    </div>
                    <div className="d-grid mb-3">
                      {/* <button
                            className="btn  btn-primary btn-login fw-bold text-uppercase"
                            type="submit"
                          >
                            SignIn with OTP
                          </button> */}
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

export default TrainerLoginScreen
