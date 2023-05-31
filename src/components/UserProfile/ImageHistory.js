import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ImageHistory({ userId }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/image?userId=${userId}`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchImages();
  }, [userId]);

  return (
    <div className='history-container'>
      <h2>Image History</h2>
      {images.length === 0 ? (
        <p>No images found.</p>
      ) : (
        <ul className='image-list'>
          {images.map((image) => (
            <li key={image._id}>
              <Link to={`/image/${image._id}`}>
                <img className='history-image' src={image.Image} alt="" />
              </Link>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ImageHistory;
