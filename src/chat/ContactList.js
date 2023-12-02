import React, { useEffect, useState } from 'react';
import ContactBlock from './ContactBlock';
import { findKey } from './SearchBar';

export var ContactArray = [
  // ... (your ContactArray data)
];

export var ChatArray = [];

function ContactList({ user,setSend }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    var counter = 0;
    var index = findKey(ChatArray, user.username, counter);

    if (index !== -2) {
      var list = [];
      var newContacts = []; // Create a new array to store contacts

      for (var i = 0; i < ChatArray[index][user.username].length; i++) {
        var contact = ChatArray[index][user.username][i];

        if (!list.includes(contact.username)) {
          list.push(contact.username);

          // Push the new contact to the temporary array
          newContacts.push({
            receiver: user.username,
            username: contact.username,
            displayName: contact.displayName,
            password: contact.password,
            profilePic: contact.profilePic,
            time: contact.time,
            lastmessage: contact.lastmessage
          });
        }
      }

      // Update the state after the loop
      setContacts(prevContacts => [...prevContacts, ...newContacts]);
    }
  }, [user]);

  return (
    <div id="list_chat">
      {contacts.map(contact => (
        <ContactBlock
          setSend={setSend}
          receiver={contact.receiver}
          username={contact.username}
          displayName={contact.displayName}
          password={contact.password}
          profilePic={contact.profilePic}
          time={contact.time}
          lastmessage={contact.lastmessage}
          key={contact.username}
        />
      ))}
    </div>
  );
}

export default ContactList;

