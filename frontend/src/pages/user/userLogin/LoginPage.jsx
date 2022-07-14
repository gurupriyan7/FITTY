import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/User/Headder/Header'
import LoginScreen from '../../../components/User/LoginScreen/LoginScreen'


function LoginPage() {
  const Navigate=useNavigate()
  const {user} = useSelector((state)=>state.auth)

  useEffect(()=>{
    if(!user){
      Navigate("/")
    }
  },[user])
  return (
    <div>
      <Header/>
      <LoginScreen/>
    </div>
  )
}

export default LoginPage
