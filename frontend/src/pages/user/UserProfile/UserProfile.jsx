import React from 'react'
import "./UserProfile.scss"
import UserHomeProfileScreen from '../../../components/User/userHomeProfileScreen/UserHomeProfileScreen'
import Header from '../../../components/User/Headder/Header'
// import UserHomeScreen from "../../../components/User/userHomeScreen/UserHomeScreen"
import UserProfileScreen from '../../../components/User/UserProfile/UserProfileScreen'
import ProfilePostsScreen from '../../../components/User/ProfilePostsScreen/ProfilePostsScreen'
function UserProfile() {
  return (
          <div className="singleplanscreenpage">
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
              <UserProfileScreen/>
              <ProfilePostsScreen/>
            </div>
          </div>
        </div>
  )
}

export default UserProfile