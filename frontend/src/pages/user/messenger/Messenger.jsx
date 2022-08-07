import React from 'react'
import ChatOnline from '../../../components/User/chatOnline/ChatOnline'
import Conversation from '../../../components/User/conversation/Conversation'
import Message from '../message/Message'
import * as api from '../../../API/User'
import './Messenger.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { getConversation ,getUser} from '../../../features/auth/authSlice'
import { useEffect } from 'react'
import { useRef } from 'react'
import {io} from "socket.io-client"
import empty from "../../../images/profile-pic-avather.png"
function Messenger() {
  const scrollRef= useRef()
  const socket=useRef()
  const dispatch = useDispatch()
  const [conversation, setConversation] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const { user, conversations } = useSelector((state) => state.auth)
  useEffect(()=>{
socket.current= io("ws://localhost:8900")
socket.current.on("getMessage",data=>{
  setArrivalMessage({
    sender:data.senderId,
    text:data.text,
    createdAt:Date.now()
  })
})
  },[])
  useEffect(()=>{
    socket.current.emit("addUser",user._id)
    socket.current.on("getUsers",users=>{
      console.log(users);
    })
  },[user])
 
  useEffect(() => {
    dispatch(getConversation(user._id))
  }, [])
  useEffect(() => {
    setConversation(conversations)
  }, [conversations])
  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } =await api.getMessages(currentChat?._id)
        setMessages(data)
      } catch (error) {}
    }
    getMessages()
  }, [currentChat])

 useEffect(()=>{
arrivalMessage&&currentChat?.members.includes(arrivalMessage.sender)&&
setMessages(prev=>[...prev,arrivalMessage])
 },[arrivalMessage,currentChat])
  // handel-submit
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const message={
      sender:user._id,
      text:newMessage,
      conversationId:currentChat._id
    };
    const reciverId = currentChat.members.find(member=>member != user._id)

    socket.current.emit("sendMessage",{
      senderId:user._id,
      reciverId:reciverId,
      text:newMessage
    })
    try {
      if(newMessage!==""){

        const {data}=await api.addMessage(message)
        setMessages([...messages,data])
        setNewMessage("")
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
scrollRef?.current?.scrollIntoView({behavior:"smooth"})
  },[messages])
  const [headProfile,setHeadProfile]=useState("")

  useEffect(()=>{
    if(currentChat){
      finduser(currentChat)
    }
  },[currentChat])
  const finduser=async(p)=>{
    const friendId = p.members.find((m)=>m!==user._id)
    const {data} = await api.getSigleUser(friendId) 
    setHeadProfile(data)
    console.log("hello",data);
  }
  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWarpper">
            <input
              type="text"
              placeholder="Search for friends"
              className="chatMenuInput"
            />
            {conversation.map((c) => (
              <div onClick={() =>{ setCurrentChat(c)
               }}>
                <Conversation conversation={c} currentUser={user}  />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWarpper">
            {currentChat ? (
              <>
        <div className="headder">
                    <img src={headProfile?.profileimage} alt="" className="prof" />
                    <p className="proftext">{headProfile?.name}</p>
         </div>
                <div className="chatBoxtop">
                  
                  {messages&&messages.map(m=>(
                    <div ref={scrollRef}>
                  <Message messages={m} own={m.sender===user._id}/>
                  </div>
                  ))}
                  
                </div>
                <div className="chatBoxBottom">
                  <textarea
                  onChange={(e)=>setNewMessage(e.target.value)}
                  value={newMessage}
                    placeholder="write something..."
                    className="chatMessageInput"
                  ></textarea>
                  <button onClick={handleSubmit} className="chatSubmitButton">Send</button>
                </div>
              </>
            ) : (
              <span className="noConversation">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWarpper">
            {/* <ChatOnline /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Messenger
