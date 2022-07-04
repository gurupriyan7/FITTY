import React from 'react'
import AllTrainer from '../../../components/admin/allTrainers/AllTrainer'
import NavBar from '../../../components/admin/navBar/NavBar'
import SideBar from '../../../components/admin/sideBar/SideBar'
import "./ListTrainer.scss"
function ListTrainer() {
  return (
    <div className="listTrainer">
      <SideBar/>
      <div className="listTrainerContainer">
        <NavBar/>
    <AllTrainer/>
      </div>
    </div>
  )
}

export default ListTrainer