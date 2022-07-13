import React from 'react'
import './UserHome.scss'
import UserHomeScreen from '../../../components/User/userHomeScreen/UserHomeScreen'
import UserHomeProfileScreen from '../../../components/User/userHomeProfileScreen/UserHomeProfileScreen'
import Header from '../../../components/User/Headder/Header'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
function UserHome() {
  const navigate= useNavigate()
  const {user} = useSelector((state)=>state.auth)
  useEffect(()=>{
    if(!user){
      navigate("/login")
    }

  },[user])
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
        <UserHomeScreen />
      </div>
    </div>
  </div>
  )
}

export default UserHome
