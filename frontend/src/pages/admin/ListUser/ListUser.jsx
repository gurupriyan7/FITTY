import React from "react";
import "./ListUser.scss";
import SideBar from "../../../components/admin/sideBar/SideBar";
import NavBar from "../../../components/admin/navBar/NavBar";
import DataTale from "../../../components/admin/DataTable/DataTale";

function ListUser() {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <DataTale/>
      </div>
    </div>
  );
}

export default ListUser;
