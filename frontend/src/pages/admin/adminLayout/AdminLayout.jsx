import React from 'react'
import AllTrainer from '../../../components/admin/allTrainers/AllTrainer'
import NavBar from '../../../components/admin/navBar/NavBar'
import PaymentRequest from '../../../components/admin/paymentRequest/PaymentRequest'
import SideBar from '../../../components/admin/sideBar/SideBar'
function AdminLayout() {
  return (
          <div className="listTrainer">
          <SideBar/>
          <div className="listTrainerContainer">
            <NavBar/>
        <PaymentRequest/>
          </div>
        </div>
  )
}

export default AdminLayout