import React from 'react'
import "./Message.css"
import {format} from "timeago.js"
import empty from "../../../images/profile-pic-avather.png"
function Message({messages,own}) {
  
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
          <p className="messageText">{messages?.text}</p>
      </div>
      <div className="messageBottom">{format(messages.createdAt)}</div>
    </div>
  )
}

export default Message
