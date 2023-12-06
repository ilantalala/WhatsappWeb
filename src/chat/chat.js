import './chat.css';
import LeftScreen from './leftScreen'
import RightScreen from './RightScreen';
import { useLocation } from 'react-router-dom';
import React, {useState } from 'react';
import { ChatArray } from './ContactList';
import { findKey } from './SearchBar';
function Chat(){
  const location = useLocation();
  const { user } = location.state
  const [send,setSend]=useState([]);
  console.log(user)
    return(
        <div className="tbody">
        <div className="container">
          
  <LeftScreen user_json={{ user }} setSend={setSend}></LeftScreen>
 <RightScreen user={user} send={send}></RightScreen>
</div>
</div>
    );
}
export {Chat};