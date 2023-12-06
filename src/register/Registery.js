import React, { useState } from "react";
import UploadImage from './UploadImage';
import './Registery.css';
import { ContactArray } from "../chat/ContactList";
import { useNavigate } from 'react-router-dom';
function Registery() {
  const [selectedImageSrc, setSelectedImageSrc] = useState(null);
  const navigate=useNavigate()
  const handleRegistration = (event) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    var contactExists = false;
    var username_typed = document.getElementById("reg-name").value;
    for (var i = 0; i < ContactArray.length; i++) {
      var contact = ContactArray[i];
      if (contact.username == username_typed) {
        contactExists = true;
        break; // Stop the loop since a match is found
      }
    }
    if (contactExists) {
      // There is a contact with the same username
      alert('A contact with the same username already exists.');
    }
    else{
      var pass_typed = document.getElementById("reg-pass").value;
    if(pass_typed.length<8){
      alert('A password must contain at least 8 characters.');
    }
    else{
    var display_type = document.getElementById("reg-display").value;
    var contact = {
      username: username_typed,
      displayName: display_type,
      password: pass_typed,
      profilePic: selectedImageSrc,
      time: "10:52",
      lastmessage: "hey noa",
      ArrayUsers:[],
      token: " "
    };
    ContactArray.push(contact)
    async function createUser(){
      const user={
        username: contact.username,
        password: contact.password,
        displayName: contact.displayName,
        profilePic: contact.profilePic,
        token:""
      }
      if(user.profilePic==null){
        console.log("profilePic:", user.profilePic)
       user.profilePic='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
      }
     
      console.log("user: ", user)
      const res= await fetch('http://localhost:5000/api/Users',{
        'method':'post',
        'headers':{
          'Content-Type':'application/json',
        },
        'body':JSON.stringify(user)
      })  
      console.log("the res is: ",res)
      if(res.status==200){
         async function postToken(){
          const userDetails={username:user.username, password:user.password}
          const response=await fetch('http://localhost:5000/api/Tokens',{
            'method':'post',
            'headers':{
              'Content-Type':'application/json',
            },
            'body':JSON.stringify(userDetails)
          })
          response.text().then(data => {
            const token = data.trim(); // Trim any whitespace if needed
            console.log(token); // Output the token to the console or use it as needed
            user.token=token
           
            navigate('/Chat', { state: { user:user }})
          }).catch(error => {
            console.error('Error reading response text:', error);
          });
       
         }
         postToken() 
      }
      else{
        console.error('current User:', user);
      }
      
    }
    createUser()
    // console.error('currentUser:', currentUser);
   
  }
}
  }
  return (
    <div className="tbody">
      <div className="wrapper">
        <form action="">
          <h1>Register</h1>
          <div className="input-box">
            <input id="reg-name" type="text" placeholder="Username" required="" />
            <i className="bx bx-user" />
          </div>
          <div className="input-box">
            <input id="reg-display" type="text" placeholder="Displayname" required="" />
            <i className="bx bx-user" />
          </div>
          <div className="input-box">
            <input id="reg-pass" type="password" placeholder="Password" required="" />
            <i className="bx bx-lock-alt" />
          </div>
          <UploadImage onImageChange={(src) => setSelectedImageSrc(src)} />
          <button type="submit" id="register_id" className="btn" onClick={handleRegistration}>
            Register
          </button>
        </form>
        <div className="sign_in">
          <br></br>
        <p>
          Already have an account?<button type="submit" id="login_id" className="btn_login" onClick={()=>{navigate('/')}}>
            Login
          </button>
        </p>
        </div>
      </div>
    </div>
  );
}

export { Registery };
