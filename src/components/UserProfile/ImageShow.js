import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '@tensorflow/tfjs';
import { load } from '@tensorflow-models/mobilenet';

function ImageShow() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState([]);

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
      <h2>Image Details</h2>
      {image ? (
        <div className="image-details">
          <img id="image-to-classify" src={image.Image} alt="" />
          <p>Image ID: {image._id}</p>
          <p>Image Description: {image.description}</p>
          {predictions.length > 0 && (
            <div>
              <h3>Predictions:</h3>
              {predictions.map((prediction, i) => (
                <div key={i}>
                  <p>{prediction.className}</p>
                  <p>{prediction.probability}</p>
                </div>
              ))}
            </div>
          )}
          <button onClick={classifyImage}>Classify Image</button>
        </div>
      ) : (
        <p className='image-loading'>Loading image...</p>
      )}
    </div>
  );
}

export default ImageShow;
