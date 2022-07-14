import React from 'react'
import './UserHome.scss'
import UserHomeScreen from '../../../components/User/userHomeScreen/UserHomeScreen'
import UserHomeProfileScreen from '../../../components/User/userHomeProfileScreen/UserHomeProfileScreen'
import Header from '../../../components/User/Headder/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
function UserHome() {
  const navigate= useNavigate()
  const {user} = useSelector((state)=>state.auth)
  
  return (
    <div className="userhome">
    <div className="header">
      <Header />
    </div>
    <div className="screen">
      <div className="pcard">
        <div className="profilecard">

        <UserHomeProfileScreen />
        </div>
      </div>
      <div className="tcontent">
        <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default UserHome
