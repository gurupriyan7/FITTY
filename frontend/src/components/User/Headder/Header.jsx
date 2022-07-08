import { Button } from "react-bootstrap";

import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../../../features/auth/authSlice";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import "./Headder.js";
import "./Headder.css";

function Header() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const Logout = (e) => {
    dispatch(logout());
    Navigate("/login");
  };

  return (
    <>
      <navbar className="main">
        <div
          className="navbar display-flex  position-fixed"
          style={{ zIndex: "9", boxShadow: "revert-layer" }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/">
            <span className="LOGO">FITTY</span>
          </NavLink>

          {user ? (
            // <Button onClick={Logout} className="loginButton">
            //   Logout
            // </Button>
            <span onClick={Logout} className="logouticn">Logout<ExitToAppOutlinedIcon  /></span>
          ) : (
            <Button
              onClick={() => {
                Navigate("/login");
              }}
              className="loginButton"
            >
              Login
            </Button>
          )}

          {/* scroll-inticater */}
          <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
          </div>
        </div>
      </navbar>
    </>
  );
}

export default Header;

{
  /* <div  class="loader"></div> */
}
