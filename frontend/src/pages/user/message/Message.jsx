import React from 'react'
import "./Message.css"
import empty from "../../../images/profile-pic-avather.png"
function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
          <img src={empty} alt="" className="messageImg" />
          <p className="messageText">Hello this is a messageHello this is a messageHello this is a message</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  )
}

export default Message
