import React, { useEffect } from 'react'
import './TrainerLogin.scss'
import TrainerHeadder from '../../../components/trainer/TrainerHeadder/TrainerHeadder'
import TrainerLoginScreen from '../../../components/trainer/TrainerLogin/TrainerLoginScreen'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function TrainerLogin() {

  // const navigate=useNavigate()
  // const {trainer}= useSelector((state)=>state.trainerAuth)

  // useEffect(()=>{
  //   if(!trainer){
  //     navigate("/trainer")
  //   }
  // },[trainer,navigate])
  return (
    <div>
      <TrainerHeadder />

      <div style={{ paddingTop: '70px' }}>
        <TrainerLoginScreen />
      </div>
    </div>
  )
}

export default TrainerLogin
