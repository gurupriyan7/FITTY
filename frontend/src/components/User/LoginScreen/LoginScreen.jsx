import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { reset, login,googleLogin } from '../../../features/auth/authSlice'
import { toast } from 'react-toastify'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'
import './LoginScreen.css'

import { useDispatch, useSelector } from 'react-redux'

function LoginScreen() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth,
  )

  const onLoginSuccess = (response) => {
    const start = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: '',
      })
      gapi.load('client:auth2', start)
    }
    dispatch(googleLogin(response.profileObj))
    console.log('happy hello', response.profileObj)
  }
  const onLoginFailure = (response) => {
    console.log('error', response)
    toast.error(response.message)
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (user || isSuccess) {
      navigate('/home')
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

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

  const onsubmit = (e) => {
    e.preventDefault()
    const userdata = { email, password }
    dispatch(login(userdata))
  }

  return (
    <div>
      <body>
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-lg-10 col-xl-9  mx-auto">
              <div className="card flex-row my-5 border-0 shadow rounded-4 overflow-hidden logIn-div">
                <div className="card-img-left d-none d-md-flex"></div>
                <div className="card-body p-4 p-sm-5 card login-card">
                  <h3 className=" Login-text text-center   fs-9">SignIn</h3>
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
                      <GoogleLogin
                        className="btn-login"
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Sign In with Google"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        prompt="select_account"
                        
                      ></GoogleLogin>
                      {/* <GoogleLogout /> */}
                    </div>

                    <NavLink
                      style={{ textDecorationLine: 'none' }}
                      to="/register"
                      className="d-block text-center mt-2 small"
                    >
                      <span className="signin">
                        You Don't have an account?
                        <span className="signin2"> SignUp </span>
                      </span>
                    </NavLink>
                  </form>
                  <button
                    onClick={() => navigate('/trainer')}
                    className="trbtn"
                  >
                    Trainer Login
                  </button>
                  {/* <NavLink style={{ textDecorationLine: 'none' }}  to='/trainer'><span className="tlink">Trainer Login</span></NavLink> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default LoginScreen
