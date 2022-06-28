import React from "react";
import "./SideBar.scss";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import AssignmentIndSharpIcon from "@mui/icons-material/AssignmentIndSharp";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo primary-Color">Gurupiryan</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            {" "}
            <DashboardIcon className="icon primary-Color" />
            <span>Dashboard</span>
          </li>
        </ul>
        <ul>
          <li>
            <AccountBoxIcon className="icon primary-Color" />
            <span>Users</span>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <AccountCircleOutlinedIcon className="icon primary-Color" />
            <span>Trainers</span>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <AccountCircleOutlinedIcon className="icon primary-Color" />
            <span>Trainers Category</span>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <FeaturedPlayListIcon className="icon primary-Color" />
            <span>Plans</span>
          </li>
        </ul>
        <ul>
          <li>
            <MonetizationOnSharpIcon className="icon primary-Color" />
            <span>Sales</span>
          </li>
        </ul>
        <ul>
          <li>
            <AssignmentIndSharpIcon className="icon primary-Color" />
            <span>Profile</span>
          </li>
        </ul>
        <ul>
          <li>
            <ExitToAppSharpIcon className="icon primary-Color" />
            <span>Logout</span>
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
