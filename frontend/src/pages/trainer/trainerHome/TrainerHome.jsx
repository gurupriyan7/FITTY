import React from 'react'
import './TrainerHome.scss'
import { Link, Outlet } from 'react-router-dom'
import TrainerHeadder from '../../../components/trainer/TrainerHeadder/TrainerHeadder'
import TrainerHomeScreen from '../../../components/trainer/trainerHomeScreen/TrainerHomeScreen'
import TrainerProfileCard from '../../../components/trainer/TrainerProfilecard/TrainerProfileCard'
import Spinner from '../../../components/spinner/Spinner'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
function TrainerHome({childern}) {
//   const {isAdiminLoading} = useSelector((state)=>state.adminAuth)
//   const {isTrainerLoading} = useSelector((state)=>state.trainerAuth)
//   const {isFeatchTrainerLoading} = useSelector((state)=>state.featchAllTrainers)
//   const {isPostLoading} = useSelector((state)=>state.userPost)
//   const {isTrPostLoading} = useSelector((state)=>state.trainerPost)
//   const {isTrPlanLoading} = useSelector((state)=>state.trainerPlan)
//   const {isUserPlanLoading} = useSelector((state)=>state.userPlan)
 
// const [load,setLoad]=useState(false)
//  useEffect(()=>{
//   if(isTrainerLoading||isFeatchTrainerLoading||isTrPostLoading||isTrPlanLoading){
//     setLoad(true)
//   }else{
//     setLoad(false)
//   }
//  },[isTrainerLoading,isFeatchTrainerLoading,isTrPostLoading,isTrPlanLoading])
//   if(load){
//     return <Spinner/>
//   } 

  
  return (
    <div className="trainerhome ">
      <div className="header">
        <TrainerHeadder />
      </div>
      <div className="screen">
        <div className="pcard">
          <div className="profilecard">
            <TrainerProfileCard />
          </div>
        </div>
        <div className="tcontent">
          {childern}
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  )
}

export default TrainerHome
