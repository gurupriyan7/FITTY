import React from 'react'
import './UserHome.scss'
import UserHomeScreen from '../../../components/User/userHomeScreen/UserHomeScreen'
import UserHomeProfileScreen from '../../../components/User/userHomeProfileScreen/UserHomeProfileScreen'
import Header from '../../../components/User/Headder/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Spinner from "../../../components/spinner/Spinner"
function UserHome({childern}) {
  const navigate= useNavigate()
  // const {user,isLoading} = useSelector((state)=>state.auth)
  // const {isAdiminLoading} = useSelector((state)=>state.adminAuth)
  // const {isTrainerLoading} = useSelector((state)=>state.trainerAuth)
  // const {isFeatchTrainerLoading} = useSelector((state)=>state.featchAllTrainers)
  // const {isPostLoading} = useSelector((state)=>state.userPost)
  // const {isTrPostLoading} = useSelector((state)=>state.trainerPost)
  // const {isTrPlanLoading} = useSelector((state)=>state.trainerPlan)
  // const {isUserPlanLoading} = useSelector((state)=>state.userPlan)
  // const td = true
  // if(isLoading||isAdiminLoading||isTrainerLoading||isFeatchTrainerLoading||isPostLoading||isTrPostLoading||isTrPlanLoading||isUserPlanLoading){
  //   return <Spinner/>
  // }
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
        {/* <Outlet/> */}
        {childern}
      </div>
    </div>
  </div>
  )
}

export default UserHome
