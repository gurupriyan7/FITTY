import React from 'react'
import "./GetPlans.scss"
import UserHomeProfileScreen from '../../../components/User/userHomeProfileScreen/UserHomeProfileScreen'
import Header from '../../../components/User/Headder/Header'
import GetPlansScreen from '../../../components/User/GetplansScreen/GetPlansScreen'
function GetPlans() {
  return (
    <div className="getplans">
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
        <GetPlansScreen/>
      </div>
    </div>
  </div>
    
  )
}

export default GetPlans
 