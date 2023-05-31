import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '@tensorflow/tfjs';
import { load } from '@tensorflow-models/mobilenet';
import { useNavigate } from 'react-router-dom';

function ImageShow({ isLoggedIn }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    if(!isLoggedIn) {
      navigate('/login');
    } else {
      const fetchImage = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/image/${id}`);
          const data = await response.json();
          setImage(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchImage();
    }
}, [id, isLoggedIn, navigate]);

  const classifyImage = async () => {
    const imageElement = document.getElementById('image-to-classify');
    
 
    const response = await fetch(imageElement.src);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    
    
    const newImageElement = new Image();
    newImageElement.src = blobUrl;
    await new Promise((resolve) => {
      newImageElement.onload = resolve;
    });

    const model = await load();
    const predictions = await model.classify(newImageElement);
    setPredictions(predictions);
};


  return (
    <div className="image-show-container">
    
      {image ? (
        <div className="image-details">
          <img id="image-to-classify" src={image.Image} alt="" />
          <p>Image ID: {image._id}</p>
          {predictions.length > 0 && (
            <div>
              <h3>Predictions:</h3>
              {predictions.map((prediction, i) => (
                <div key={i} className="prediction-item">
                  <p>{prediction.className}</p>
                  <p>Probability: {prediction.probability}</p>
                </div>
              ))}
            </div>
          )}
          <button onClick={classifyImage}>Classify Image</button>
        </div>
      ) : (
        <p className='image-loading'>Loading image...</p>
      )}
       <div className="navigation-buttons">
        <Link to="/imagehistory">Image History</Link>
        <Link to={`/user/${image?.user._id}`}>Back to Profile</Link>
      </div>

    </div>
  );
}

export default ImageShow;
