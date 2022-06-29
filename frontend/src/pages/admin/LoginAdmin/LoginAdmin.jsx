import React from "react";
import "./LoginAdmin.scss";
import AdminLogin from "../../../components/admin/AdminLogin/AdminLogin";

function LoginAdmin() {
  return (
    <div className="loginadmin">
      <div className="form">
        <AdminLogin />
      </div>
    </div>
  );
}

export default LoginAdmin;
