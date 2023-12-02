import ContactBlock from "./ContactBlock";
import { renderToString } from 'react-dom/server';
import { ContactArray } from "./ContactList";
import { ChatArray } from "./ContactList";
import { ImplementedChild } from "./ChatBoxInput";
export var findKey = (ChatArray, username, counter) => {
  for (var i = 0; i < ChatArray.length; i++) {
    var obj = ChatArray[i];
    var key = Object.keys(obj)[0]; // Assuming there's only one key in each object
    counter++;
    if (key === username) {
  
      return counter - 1;
    }
  }
  return -2;
}
function findContact(ContactArray, username, counter){
  for (var i = 0; i < ContactArray.length; i++) {
    var obj = ContactArray[i];
    counter++;
    if (obj.username === username) {
   
      return counter - 1;
    }
  }
  return -2;
}
function SearchBar({ user,setSend }) {
  
  const newContact = (ArrayUsers, username) => {
    
    for (var i = 0; i < ArrayUsers.length; i++) {
      var contact = ArrayUsers[i];
      if (contact.username === username) {
        return 0;
      }
    }
    return 1;
  }

  const addContact = ({ user,setSend }) => {
    const popup = document.getElementById("popup");
    popup.style.setProperty("visibility", "visible");

    document.getElementById("sub_id").addEventListener("click", function (event) {
      event.preventDefault();

      var username_typed = document.getElementById("input_user").value;

      for (var i = 0; i < ContactArray.length; i++) {
        var contact = ContactArray[i];
        var username = contact.username;
        if (username === username_typed && username !== user.username) {
          var counter = 0;
          var index = findContact(ContactArray, user.username, counter);
          if (!newContact(ContactArray[index].ArrayUsers, username)) {
            break;
          }
          
          ContactArray[index].ArrayUsers.push(contact);
          var chatObject = {};
          chatObject[user.username] = ContactArray[index].ArrayUsers;
          
          ChatArray.push(chatObject);

          const mylist = document.getElementById("list_chat");
          let newBlock = document.createElement('div');
          
          newBlock.innerHTML = renderToString(
            <ContactBlock
              receiver={user.username}
              username={username_typed}
              displayName={contact.displayName}
              password={contact.password}
              profilePic={contact.profilePic}
              time={contact.time}
              lastmessage={contact.lastmessage}
              key={contact.username}
            />
          );
          
          newBlock.onclick = function () {
            console.log("clicked on: ",username_typed)
            const myChat=document.getElementById("chatBox_id")
            var diff=myChat.children.length-ImplementedChild.length
            for(var i=myChat.children.length-1;i>=diff;i--){
              var child=myChat.children[i]
              console.log("i"+i+"-th Child is: ",child)
              myChat.removeChild(child);
            }
            ImplementedChild.splice(0, ImplementedChild.length);
            var counter = 0;
            var y = findKey(ChatArray, user.username, counter);
            var key = Object.keys(ChatArray[y])[0];
        
            setSend(username_typed)
          };
          mylist.appendChild(newBlock);
        }
      }
    });
  }

  return (
    <div className="search_chat">
      <div>
        <input type="text" placeholder="Search" />
        <ion-icon name="search-outline" />
      </div>
      <button className="add_contact" onClick={() => addContact({ user, setSend })}>
        <ion-icon name="person-add-outline"></ion-icon>
      </button>
    </div>
  );
}

export default SearchBar;