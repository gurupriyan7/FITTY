import React from 'react'
import Header from '../../../components/User/Headder/Header'
import UserHomeProfileScreen from '../../../components/User/userHomeProfileScreen/UserHomeProfileScreen'
import MyPlansScreen from "../../../components/User/MyPlansScreen/MyPlansScreen"
import "./MyPlans.scss"
function MyPlans() {
  return (
          <div className="myplans">
          <div className="header">
            <Header/>
          </div>
          <div className="screen">
            <div className="pcard">
              <div className="profilecard">
      
              <UserHomeProfileScreen/>
              </div>
            </div>
            <div className="tcontent">
              <MyPlansScreen/>
            </div>
          </div>
        </div>
  )
}

export default MyPlans
