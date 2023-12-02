import './login.css';
import { useNavigate } from 'react-router-dom';
import { ContactArray } from '../chat/ContactList';
// const Routes = require("react-router-dom").Routes;
function Login() {
    const navigate=useNavigate()
    const sign_in=(event)=>{
      event.preventDefault();
      var name=document.getElementById("name_id").value;
      var password=document.getElementById("password_id").value;
      var contactExists = false;
      for (var i = 0; i < ContactArray.length; i++) {
        var contact = ContactArray[i];
        if (contact.username == name) {
          contactExists = true;
          break; // Stop the loop since a match is found
        }
      }
      if (!contactExists) {
        // There is a contact with the same username
        alert('Invalid username.');
      }
      else if(contact.password!=password){
        alert('Invalid passsword.');
      }
      else{navigate('/Chat', { state: { user:contact }})}
    }
  return (
    <div className="tbody">
    <div className="wrapper">
    <form action="">
      <h1>Login</h1>
      <div className="input-box">
        <input id="name_id" type="text" placeholder="Username" required="" />
        <i className="bx bx-user" />
      </div>
      <div className="input-box">
        <input id="password_id" type="password" placeholder="Password" required="" />
        <i className="bx bx-lock-alt" />
      </div>
      <div className="remember-forgot">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <button id="myButton" type="submit" className="btn" onClick={sign_in}>
        Login
      </button>

      <div className="register-link">
        <p>
          Don't have an account?<button type="submit" id="registery_id" className="btn_registery" 
          onClick={()=>{navigate('/Registery')}}>
            Registery
          </button>
        </p>
      </div>
    </form>
  </div>
  </div>
  );
}

export {Login};
