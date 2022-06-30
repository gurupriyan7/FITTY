import { Button } from "react-bootstrap";

import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./TrainerHeadder.scss"

function TrainerHeadder() {
          const user= true;
          const Navigate= useNavigate()
          const Logout = ()=>{

          }
  return (
          <navbar className="main">
          <div
            className="navbar display-flex  position-fixed"
            style={{ zIndex: "9", boxShadow: "revert-layer" }}
          >
            <NavLink style={{ textDecoration: "none" }} to="/">
              <span className="LOGO">FITTY</span>
            </NavLink>
  
            {user ? (
              <Button onClick={Logout} className="loginButton">
                Logout
              </Button>
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
  )
}

export default TrainerHeadder