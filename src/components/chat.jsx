import React, { useContext } from 'react'
import Messages from './messages'
import Input from './input'
import { ChatContext } from '../context/chatContext'
import Cam from "../assets/cam.png"
import Add from "../assets/add.png"
import More from "../assets/more.png"
const Chat =()=> {

  const {data} = useContext(ChatContext);

  return (
    <div className='chat'>
    {data && data.user ? (
      <div className="chatInfo">
        <span> {data.user.displayName}</span>
        <div className="chatIcons">
        <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />

        </div>
      </div>
    ) : (
      <div>Error: User data not available</div>
    )}
    <Messages />
    <Input />
  </div>
  
 
  )
}

export default Chat
