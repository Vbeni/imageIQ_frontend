import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ImageShow() {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`http://localhost:4000/image/${id}`);
        const data = await response.json();
        setImage(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchImage();
  }, [id]);

  return (
    <div className="image-show-container">
      <h2>Image Details</h2>
      {image ? (
        <div>
          <img className="image" src={image.Image} alt="" />
          <p>Image ID: {image._id}</p>
          <p>Image Description: {image.description}</p>
        </div>
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}

export default ImageShow;
