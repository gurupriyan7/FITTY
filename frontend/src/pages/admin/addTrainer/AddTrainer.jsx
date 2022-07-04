import React from 'react'
import "./AddTrainer.scss"
import AddTrainerScreen from '../../../components/admin/AddTrainer/AddTrainerScreen'
import SideBar from '../../../components/admin/sideBar/SideBar'
import NavBar from '../../../components/admin/navBar/NavBar'
function AddTrainer() {
  return (
    <div className="newTrainer">
      <SideBar/>
      <div className="newTrainerContainer">
        <NavBar/>
    <div className='addTrainer'>
          <AddTrainerScreen/>
    </div>
      </div>
    </div>

                                                    
  )
}

export default AddTrainer