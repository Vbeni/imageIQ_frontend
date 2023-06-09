import React from 'react';
import { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


function UploadImage({ onImageUpload, userid }) {
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      imageUrl: imageUrl,
      userid: userid,
    };

    fetch(`${process.env.REACT_APP_API_URL}/image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        onImageUpload(imageUrl);
        navigate(`/image/${data._id}`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (event) => {
    setImageUrl(event.target.value);
  };

  return (
    <div className='image-upload-container'>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter image URL" value={imageUrl} onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

const Profile = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const URL = `${process.env.REACT_APP_API_URL}/user/${id}`;

  const getUser = useCallback(async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      setUser(result);
    } catch (err) {
    }
  }, [URL]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handleImageUpload = (imageUrl) => {
   
  };

  return (
    <div className='profile-container'>
      <h1>Hi {user && user.username}</h1>
      <UploadImage onImageUpload={handleImageUpload} userid={id} />
      <Link to="/imagehistory">
        <button className='view-history-button'>View Image History</button>
      </Link>
    </div>
  );
};

export default Profile;
