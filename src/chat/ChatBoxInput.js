import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import ChatBox from './ChatBox'
import { renderToString } from 'react-dom/server';                 
import MyMessage from './MyMessage';
import { ChatMessages } from './ChatBox';
export var ImplementedChild=[]
const handleSendText = (receiver,inputValue,send) => {
       var sender= send
       var id= (ChatMessages.length+1).toString()
      if(inputValue!=''){
        const myChat=document.getElementById("chatBox_id")
     
        let newBlock=document.createElement('div')
       newBlock.insertAdjacentHTML("beforeend",renderToString(
       <MyMessage receiver={receiver} text={inputValue}></MyMessage>))
       ImplementedChild.push(newBlock)
        myChat.appendChild(newBlock) 
        ChatMessages.push({
            id:id,
            send:sender,
            receiver:receiver,
            message:inputValue
        })
        console.log("the ChatMessages is: ",ChatMessages)
      }
  }
function ChatBoxInput({user,send}){
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
   
    return(
        <div>
        <div className="chatbox_input">
      <ion-icon name="happy-outline" />
      <ion-icon name="attach-outline" />
      <input
        id="senderText"
        type="text"
        placeholder="Type a message"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ion-icon name="send-outline" onClick={() => handleSendText(user.username, inputValue,send)}></ion-icon>
    
    </div>
        </div>
    );
}
export default ChatBoxInput