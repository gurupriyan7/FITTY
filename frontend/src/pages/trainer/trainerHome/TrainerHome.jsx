import React from 'react'
import './TrainerHome.scss'
import { Link, Outlet } from 'react-router-dom'
import TrainerHeadder from '../../../components/trainer/TrainerHeadder/TrainerHeadder'
import TrainerHomeScreen from '../../../components/trainer/trainerHomeScreen/TrainerHomeScreen'
import TrainerProfileCard from '../../../components/trainer/TrainerProfilecard/TrainerProfileCard'
function TrainerHome() {
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
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default TrainerHome
