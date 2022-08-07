import React from 'react'
import "./Conversation.css"
import * as api from "../../../API/User"
import empty from "../../../images/profile-pic-avather.png"
import { useState } from 'react'
import { useEffect } from 'react'
function Conversation({conversation ,currentUser}) {
  const [user,setUser]=useState(null)
useEffect(()=>{
  const friendId = conversation.members.find((m)=>m!==currentUser._id)
   const getUser =async()=>{
    try {
      const {data} = await api.getSigleUser(friendId)  
      setUser(data)
      
      console.log("data",data);
    } catch (error) {
      console.log("error",error);
    }
  }
  getUser()
},[conversation,currentUser])

useEffect(()=>{

},[])
  return (
    <div className='conversation'>
      <img src={user?.profileimage ? user.profileimage : empty} alt="" className="conversationImg" />
      <span className="conversationName">{user?.name}</span>
    </div>
  )
}

export default Conversation
