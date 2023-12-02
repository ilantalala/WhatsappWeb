import SearchBar from './SearchBar';
import ContactList from './ContactList';

function LeftScreen({ user_json, setSend }) {



  return (
    <div className="leftScreen">
      <div className="header">
        <div className="imguser">
          <img src={user_json.user.profilePic} alt="not found" className="cover" />
        </div>
        <ul className="nav_icons">
          <li>
            <ion-icon name="scan-circle-outline" />
          </li>
          <li>
            <ion-icon name="chatbox" />
          </li>
          <li>
            <ion-icon name="ellipsis-vertical" />
          </li>
        </ul>
      </div>
      {/* search */}
      <SearchBar user={user_json.user} setSend={setSend}></SearchBar>
      {/* chat list */}
      <div className="chatlist">
        <ContactList user={user_json.user} setSend={setSend} id="contact_list"></ContactList>
      </div>
    </div>
  );
}

export default LeftScreen;
