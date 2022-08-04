import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./RegisterScreen.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registeruser, reset } from "../../../features/auth/authSlice";
import { useForm } from 'react-hook-form'
import Header from "../Headder/Header";

function RegisterScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    password2: "",
  });

  const { name, email, phoneNumber, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (user && isSuccess) {
      navigate("/home");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  function changeValue(e) {
    setFormData((prevestate) => ({
      ...prevestate,
      [e.target.name]: e.target.value,
    }));
  }

  const onSubmit = (e) => {
const {name,
  email,
  phoneNumber,
  password,password2}=e
    if (password !== password2) {
      toast.error("Re-enterd password not match");
    } else {
      const userdata = {
        name,
        email,
        phoneNumber,
        password,
      };
      console.log("form",userdata);

      dispatch(registeruser(userdata));
    }
  };
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return (
    <>
      <Header />
      <div>
        <body>
          <div className="container RegisterContainer ">
            <div className="row">
              <div className="col-lg-10 col-xl-9  mx-auto">
                <div className="card flex-row my-5 border-0 shadow rounded-4 overflow-hidden login-div">
                  <div className="card-img-left d-none d-md-flex"></div>
                  <div className="card-body p-4 p-sm-5 card login-card">
                    <h3 className=" Login-text text-center   fs-9">Register</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-floating mb-1 Linput2">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInputName"
                          name="name"
                          placeholder="Name"
                          {...register('name', {
                            required: true,
                            
                          })}
                        />
                        {errors.name && (
                        <p style={{ color: 'red' }}>
                          Please check the name
                        </p>
                      )}
                        <label htmlFor="floatingInputName">Name</label>
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
                         {errors.email && (
                        <p style={{ color: 'red' }}>Please check the Email</p>
                      )}
                        <label htmlFor="floatingInputEmail">
                          Email address
                        </label>
                      </div>
                      <div className="form-floating mb-1 Linput2">
                        <input
                          type="text"
                          className="form-control"
                          {...register('phoneNumber', {
                            required: true,
                            maxLength:10
                            
                          })}
                          id="floatingInputPhone"
                          name="phoneNumber"
                          placeholder="PhoneNumber"
                        />
                        {errors.phoneNumber && (
                        <p style={{ color: 'red' }}>
                          Please check the phoneNumber
                        </p>
                      )}
                        <label htmlFor="floatingInputPhone">PhoneNumber</label>
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
                        {errors.password && (
                        <p style={{ color: 'red' }}>
                          Please check the Password
                        </p>
                      )}
                        <label htmlFor="floatingPassword">Password</label>
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
                        {errors.password2 && (
                        <p style={{ color: 'red' }}>
                          Please check the Re-Entered Password
                        </p>
                      )}
                        <label htmlFor="floatingPassword2">
                          Re-Enter Password
                        </label>
                      </div>

                      <div className="d-grid ">
                        <button
                          className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      <NavLink
                        style={{ textDecorationLine: "none" }}
                        to="/"
                        className="d-block text-center mt-2 small"
                      >
                        <span className="signin">
                          You Alredy have an account?
                          <span className="signin2"> SignIn </span>
                        </span>
                      </NavLink>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default RegisterScreen;
