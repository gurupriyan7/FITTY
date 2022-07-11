import React from 'react'
import "./GetACoach.scss"

import UserHomeProfileScreen from '../../../components/User/userHomeProfileScreen/UserHomeProfileScreen'
import Header from '../../../components/User/Headder/Header'
import GetACoachScreen from '../../../components/User/GetACoachScreen/GetACoachScreen'
function GetACoach() {
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
        <GetACoachScreen/>
      </div>
    </div>
  </div>
  )
}

export default GetACoach
