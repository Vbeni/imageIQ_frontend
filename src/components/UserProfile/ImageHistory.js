import React, { useState, useEffect } from 'react';

function ImageHistory({ userId }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`http://localhost:4000/image?userId=${userId}`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchImages();
  }, [userId]);

  return (
    <div>
      <h2>Image History</h2>
      {images.length === 0 ? (
        <p>No images found.</p>
      ) : (
        <ul>
          {images.map((image) => (
            <li key={image._id}>
              <img src={image.Image} alt="" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ImageHistory;
