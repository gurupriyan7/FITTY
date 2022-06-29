import React from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import "./AdminLogin.scss";
import {reset,adminLogin} from "../../../features/adminAuth/AdminSlice"
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

const dispatch = useDispatch()
const navigate = useNavigate()

const {admin,isError,isSuccess,isLoading,message} = useSelector((state)=>{
  return state.adminAuth
})

  function changeValue(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const onsubmit=(e)=>{
    e.preventDefault()
    const adminData={email,password};
    dispatch(adminLogin(adminData))

  }

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess||admin){
      navigate("/admin/dashboard")
    }
    dispatch(reset())
  },[admin,isError,isSuccess,message,navigate,dispatch])
  

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  return (
    <div>
      <body>
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col-lg-10 col-xl-9  mx-auto">
              <div className="card flex-row my-5 border-0 shadow rounded-4 overflow-hidden logIn-div">
                <div className="card-img-left d-none d-md-flex"></div>
                <div className="card-body p-4 p-sm-5 card login-card">
                  <h3 className=" Login-text text-center  fs-7 primary-Color">
                    Welcome Back Admin!
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default AdminLogin;
