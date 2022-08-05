import React from 'react'
import "./Conversation.css"
import empty from "../../../images/profile-pic-avather.png"
function Conversation() {
  return (
    <div className='conversation'>
      <img src={empty} alt="" className="conversationImg" />
      <span className="conversationName">Gurupriyan</span>
    </div>
  )
}

export default Conversation
