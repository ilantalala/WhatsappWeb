import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import ChatBox from './ChatBox'
import { renderToString } from 'react-dom/server';                 
import MyMessage from './MyMessage';
import ChatBoxInput from './ChatBoxInput';
function RightScreen({user,send}){
 
    const navigate=useNavigate()
    var username=user.username
   
    return(
    <div className="rightScreen">
    <form className='pop_up_window' id="popup">
    <div className="upper_bar">
    <button onClick={(event) => {
    event.preventDefault(); // Prevent the default behavior (page refresh)
    document.getElementById("popup").style.setProperty("visibility","hidden");
    }}><ion-icon name="close-outline"></ion-icon></button>
    </div>
    <div className="enter_user">
    <p>Enter username:</p>
    </div>
  
    <input className="add_user" name="Username" id="input_user" type="text" placeholder='username'></input>
    <button type="submit" id="sub_id" className='submit'>submit</button>
    </form>
  {/* <div className="pop_up_window" id="popup">
   
  </div> */}
    <div className="header">
      <div className="imgText">
        <div className="imguser">
          <img src={user.profilePic} alt="nice" className="cover" />
        </div>
        <h4>
        {username}
          <br />
          <span>online</span>
        </h4>
      </div>
      <ul className="nav_icons">
        <li>
          <ion-icon name="search-outline" />
        </li>
        <li>
          <ion-icon onClick={()=>{ navigate('/')}}name="log-out-outline" />
        </li>
      </ul>
    </div>
    {/* chat box */}
 <ChatBox send={send} receiver={username}></ChatBox>
    {/* chat input */}
  <ChatBoxInput user={user} send={send}></ChatBoxInput>
  </div>
    );
}
export default RightScreen