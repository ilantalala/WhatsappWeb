function OtherMessage({ send, text }) {
  
    return (
      <div>
        <div className="message other_message">
          <p>
            {text}
            <br />
            <span>12:15</span>
          </p>
        </div>
      </div>
    );
  }
  
  export default OtherMessage;
  