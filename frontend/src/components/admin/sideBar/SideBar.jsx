import React, { useEffect } from "react";
import "./SideBar.scss";
import { Link, useNavigate } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import AssignmentIndSharpIcon from "@mui/icons-material/AssignmentIndSharp";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import ClassSharpIcon from '@mui/icons-material/ClassSharp';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import { useDispatch, useSelector } from "react-redux";
import {adminLogout,reset} from "../../../features/adminAuth/AdminSlice"

function SideBar() {

const {admin} = useSelector((state)=>{
 return state.adminAuth
});
const dispatch= useDispatch()
const navigate = useNavigate()

const logoutAdmin =(e)=>{
  console.log("hello");
  dispatch(adminLogout())
  dispatch(reset())
  navigate("/admin")
}

useEffect(()=>{
  if(!admin){
    navigate("/admin")
  }
},[admin,navigate,dispatch])

  return (
    <div className="sidebar">
      <div className="top">
        
        <span className="logo primary-Color">{admin ? admin.name :null}</span>
      </div>
      <hr />
      <div className="center">
        <ul>
        <p className="title primary-Color ">Main</p>
          <li>
            <DashboardIcon className="icon primary-Color" />
            <Link style={{textDecoration:"none"}} to="/admin/dashboard"><span>Dashboard</span></Link>
          </li>
        </ul>
        <ul>
          <p className="title primary-Color">User Management</p>
          <li>
            <AccountBoxIcon className="icon primary-Color" />
            <Link style={{textDecoration:"none"}} to='/admin/users'> <span>All Users</span></Link>
           
          </li>
          <li>
            <PersonAddAltSharpIcon className="icon primary-Color" />
            <Link style={{textDecoration:"none"}} to='/admin/users/new'> <span>Add Users</span></Link>
          </li>
        </ul>
        <ul>
        <p className="title primary-Color">Trainer Management</p>
          <li>
            
            <AccountCircleOutlinedIcon className="icon primary-Color" />
            <Link style={{textDecoration:"none"}} to='/admin/trainers'> <span>All Trainers</span></Link>
          </li>
          <li>
            
            <PersonAddAltSharpIcon className="icon primary-Color" />
            <Link style={{textDecoration:"none"}} to='/admin/trainers/new'> <span>Add Trainers</span></Link>
          </li>
          <li>
            <CurrencyExchangeSharpIcon className="icon primary-Color" />
            <Link style={{textDecoration:"none"}} to='/admin/trainers/paymentreq'> <span>Payment Request</span></Link>
            
          </li>
          </ul>
          
        
        {/* <ul>
        <p className="title primary-Color">Plans</p>
          <li>
           
            <FeaturedPlayListIcon className="icon primary-Color" />
            <span>Plans</span>
          </li>
        </ul> */}
        {/* <ul>
        <p className="title primary-Color">Sales</p>
          <li>
            <MonetizationOnSharpIcon className="icon primary-Color" />
            <span>Sales</span>
          </li>
        </ul> */}
        <ul>
        <p className="title primary-Color">Admin</p>
          {/* <li>
            <AssignmentIndSharpIcon className="icon primary-Color" />
            <span>Profile</span>
          </li> */}
          <li>
            <ExitToAppSharpIcon className="icon primary-Color" />
            <button style={{border:"none",backgroundColor:"transparent"}} onClick={logoutAdmin}><span >Logout</span></button>
            
          </li>
        </ul>
        
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default SideBar;
