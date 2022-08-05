import React from 'react'
import "./ChatOnline.css"
import empty from "../../../images/profile-pic-avather.png"
function ChatOnline() {
  return (
    <div className='chatOnline'>
      <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
                    <img className='chatOnlineImg' src={empty} alt="" />
                    <div className="chatOnlineBAdge"></div>
          </div>
          <div className="chatOnlineName">Gurupriyan</div>
      </div>
    </div>
  )
}

export default ChatOnline
