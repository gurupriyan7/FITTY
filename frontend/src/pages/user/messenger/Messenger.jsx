import React from 'react'
import ChatOnline from '../../../components/User/chatOnline/ChatOnline'
import Conversation from '../../../components/User/conversation/Conversation'
import Message from '../message/Message'
import "./Messenger.css"
function Messenger() {
  return (
    <>
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWarpper">
          <input type="text" placeholder='Search for friends' className="chatMenuInput" />
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWarpper">
          <div className="chatBoxtop">
            <Message/>
            <Message own={true} />
            <Message/>
            <Message own={true} />
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            
          </div>
          <div className="chatBoxBottom">
          <textarea placeholder='write something...' className="chatMessageInput"></textarea>
          <button className="chatSubmitButton">Send</button>
          </div>
        </div>
      </div>
    <div className="chatOnline">
      <div className="chatOnlineWarpper">
        <ChatOnline/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Messenger