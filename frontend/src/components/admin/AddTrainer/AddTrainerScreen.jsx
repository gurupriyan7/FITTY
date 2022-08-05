import React, { useState } from 'react'
import './AddTrainerScreen.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddTrainer, reset } from '../../../features/adminAuth/AdminSlice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
function AddTrainerScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error,setError]=useState(false)

  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.adminAuth,
  )
  useEffect(() => {
    if (isError) {
      setError(true)
      toast.error(message)
    }
    if (isSuccess) {
      setError(false)
      navigate('/admin/trainers')
    }
    dispatch(reset())
  }, [isError, isLoading, isSuccess, message, dispatch, navigate])
  

  


  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  const onsubmit = (e) => {
   const { name,
    email,
    password,
    phoneNumber,
    category,
    slots,}=e

    const trainerData = {
      name,
      email,
      password,
      phoneNumber,
      category,
      slots,
    }
  
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
                  <form onSubmit={handleSubmit(onsubmit)}>
                    {error && <p style={{ color: 'red' }}>
                         {message} 
                        </p> }
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
                      {/* {errors.email && (
                        <p style={{ color: 'red' }}>Please check the Email</p>
                      )} */}
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
                        type="text"
                        className="form-control"
                        {...register('category', {
                          required: true,
                        })}
                        id="floatingInputcategory"
                        name="category"
                        placeholder="category"
                      />
                      {errors.category ?
                      <label style={{ color: 'red' }} htmlFor="floatingInputcategory">Please check the Category</label>
                      :
                      <label htmlFor="floatingInputcategory">Category</label>
                    }
                    </div>
                    <div className="form-floating mb-1 Linput2">
                      <input
                        type="text"
                        className="form-control"
                        {...register('slots', {
                          required: true,
                        })}
                        id="floatingInputcategory"
                        name="slots"
                        placeholder="category"
                      />
                      {errors.category ?
                      <label style={{ color: 'red' }} htmlFor="floatingInputcategory">Please check the Slots</label>
                      :  
                      <label htmlFor="floatingInputcategory">No of Solts</label>
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
