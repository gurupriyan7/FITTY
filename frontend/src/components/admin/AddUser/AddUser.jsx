import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AddUsers ,reset} from "../../../features/adminAuth/AdminSlice";
import "./AddUser.scss";
import { useForm } from 'react-hook-form'

function AddUser() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' })
          const navigate= useNavigate()
          const dispatch=useDispatch()

const {isSuccess,isError,message} = useSelector((state)=>state.adminAuth)

  const [formData,setFormData]=useState({
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          password2: "",
  })
  const { name, email, phoneNumber, password, password2 } = formData;
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
useEffect(()=>{
if(isError){
          
          toast.error(message);
}
if(isSuccess){
          navigate("/admin/users")
}
dispatch(reset())
},[dispatch,isError,message,navigate,isSuccess])

const changeValue=(e)=>{
setFormData((prev)=>({
          ...prev,
          [e.target.name]:e.target.value
}))
}
          

          const onsubmit = (e) => {
                  const {name,email,phoneNumber,password}=e
                    const userData={
                              name,
                              email,
                              phoneNumber,
                              password
                    }
                    
                    dispatch(AddUsers(userData))
          };
  return (
    <div>
      <body>
        <div className="container RegisterContainer ">
          <div className="row">
            <div className="col-lg-10 col-xl-9  mx-auto">
              <div className="card flex-row my-5 border-0 shadow rounded-4 overflow-hidden login-div">
                <div className="card-body p-4 p-sm-5 card login-card">
                  <h3 className=" Login-text text-center   fs-9">Add User</h3>
                  <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="form-floating mb-1 Linput2">
                      <input
                        type="text"
                        className="form-control"
                        {...register('name', {
                          required: true,
                        })}
                        id="floatingInputName"
                        name="name"
                        placeholder="Name"
                      />
                      {errors.name ?
                       <label style={{ color: 'red' }} htmlFor="floatingInputName"> Please check the Name</label> :
                      <label htmlFor="floatingInputName">Name</label>
                      }
                    </div>
                    <div className="form-floating mb-1 Linput2">
                      <input
                        type="email"
                        className="form-control"
                        {...register('email', {
                          required: true,
                          pattern: pattern,
                        })}
                        id="floatingInputEmail"
                        name="email"
                        placeholder="name@example.com"
                      />
                     {errors.email ? 
                      <label style={{ color: 'red' }} htmlFor="floatingInputEmail">Please check the Email</label>
                      :
                      <label htmlFor="floatingInputEmail">Email address</label>
                      }
                    </div>
                    <div className="form-floating mb-1 Linput2">
                      <input
                        type="text"
                        className="form-control"
                        {...register('phoneNumber', {
                          required: true,
                          minLength: 10,
                          maxLength:10,
                          
                        })}
                        id="floatingInputPhone"
                        name="phoneNumber"
                        placeholder="PhoneNumber"
                      />
                      {errors.phoneNumber ?
                      <label style={{ color: 'red' }} htmlFor="floatingInputPhone">Please check the PhoneNumber</label>
                     :
                      <label htmlFor="floatingInputPhone">PhoneNumber</label>
                      }
                    </div>
                    <div className="form-floating mb-1 Linput2">
                      <input
                        type="password"
                        className="form-control"
                        {...register('password', {
                          required: true,
                          minLength: 5,
                        })}
                        id="floatingPassword"
                        name="password"
                        placeholder="Password"
                      />
                      {errors.password ?
                      <label style={{ color: 'red' }} htmlFor="floatingPassword">Please check the Password</label> :
                      <label htmlFor="floatingPassword">Password</label> 

                      }
                    </div>
                    <div className="form-floating mb-1 Linput2">
                      <input
                        type="password"
                        className="form-control"
                        {...register('password2', {
                          required: true,
                          minLength: 5,
                        })}
                        id="floatingPassword2"
                        name="password2"
                        placeholder="Re-Enter Password"
                      />
                      {errors.password2 ?
                      <label style={{ color: 'red' }} htmlFor="floatingPassword2">
                      Please check the  Re-Enter Password
                    </label> :
                      <label  htmlFor="floatingPassword2">
                          Re-Enter Password
                      </label>
                      }
                    </div>

                    <div className="d-grid ">
                      <button
                        className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                        type="submit"
                      >
                        Add User
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

export default AddUser;
