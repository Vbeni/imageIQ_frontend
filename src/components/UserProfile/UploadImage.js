import React, { useState } from 'react';

function UploadImage({ onImageUpload }) {
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:4000/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Image: imageUrl }),
    })
      .then((response) => response.json())
      .then((data) => {
    
        console.log(data); 
        onImageUpload(imageUrl); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (event) => {
    setImageUrl(event.target.value);
  };

  return (
    <div>
      <h2>Upload Profile Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter image URL" value={imageUrl} onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadImage;
