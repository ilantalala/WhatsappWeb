import React, { useState } from "react";

const UploadImage = ({ onImageChange }) => {

  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      {selectedImage && (
        <div>
          <img
               id="img-id"
            alt="not found"
            width={"40%"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => {
             
                
            setSelectedImage(null);
            onImageChange(null); // Notify parent component that image is removed
            }}>Remove</button>
        </div>
      )}

      <br />

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]); 
          reader.onloadend = function() {
            var base64data = reader.result;                
      
            onImageChange(base64data); // Pass the URL to the parent component
          }
          
        }}
      />
      {/* ... (existing code) */}
    </div>
  );
};

export default UploadImage;