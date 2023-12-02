function MyMessage({ receiver, text }) {

  
    return (
      <div>
        <div className="message my_message">
          <p>
            {text}
            <br />
            <span>12:15</span>
          </p>
        </div>
      </div>
    );
  }
  
  export default MyMessage;
  