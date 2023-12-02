import { ImplementedChild } from "./ChatBoxInput";
function ContactBlock({setSend, receiver, username, displayName, password, profilePic, time, lastmessage}) {

  const handleClick = () => {
    console.log("clicked on: ",username)
    setSend(username);
    const myChat = document.getElementById("chatBox_id");
    console.log("ImplementedChild is: ",ImplementedChild)
    // Iterate over child elements
    console.log("myChat is: ",myChat)
    console.log("ImplementedChild.length is: ",ImplementedChild.length)
    // var child=
    // if (myChat.children.length > 0) {
    //   myChat.removeChild(myChat.children[0]);
    // }
    var diff=myChat.children.length-ImplementedChild.length
    for(var i=myChat.children.length-1;i>=diff;i--){
      var child=myChat.children[i]
      console.log("i"+i+"-th Child is: ",child)
      myChat.removeChild(child);
    }
    ImplementedChild.splice(0, ImplementedChild.length);
  };
  return (
    <div className="block" id="contact_block" onClick={handleClick}>
      <div className="imgbx">
        <img src={profilePic} alt="not found" className="cover" />
      </div>
      <div className="details">
        <div className="listhead">
          <h4>{displayName}</h4>
          <p className="time">{time}</p>
        </div>
        <div className="message_p">
          <p>{lastmessage}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactBlock;
