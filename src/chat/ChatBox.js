import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";

export var ChatMessages = [
 
];

function ChatBox({ send, receiver }) {
  return (
    <div className="chatBox" id="chatBox_id">
      {ChatMessages.map(chat => {
        if (chat.receiver==receiver&&chat.send==send) {
          return (
            <MyMessage
              key={chat.id}
              receiver={receiver}
              text={chat.message}
            />
          );
        } else if (chat.receiver==send&&chat.send==receiver) {
          return (
            <OtherMessage
              key={chat.id}
              send={send}
              text={chat.message}
            />
          );
        }
        return null; // Return null for messages that don't match sender or receiver
      })}
    </div>
  );
}

export default ChatBox;
