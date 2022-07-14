import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./RegisterScreen.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../../features/auth/authSlice";

import Header from "../Headder/Header";

function RegisterScreen() {
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
    e.preventDefault();

    if (password !== password2) {
      toast.error("Re-enterd password not match");
    } else {
      const userdata = {
        name,
        email,
        phoneNumber,
        password,
      };

      dispatch(register(userdata));
    }
  };

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
                        <label htmlFor="floatingInputEmail">
                          Email address
                        </label>
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
