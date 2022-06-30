import React from 'react'
import "./NewUser.scss"

import AddUser from '../../../components/admin/AddUser/AddUser'
import NavBar from '../../../components/admin/navBar/NavBar'
import SideBar from '../../../components/admin/sideBar/SideBar'

function NewUser() {
  return (
    <div className='NewUser'>
      <SideBar/>
      <div className="NewUserContainer">
        <NavBar/>
      <div className="addUser">
      <AddUser/>
      </div>
      </div>
    </div>
  )
}

export default NewUser
