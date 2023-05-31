import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearUserToken } from '../../utils/authToken';



const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUserToken();
    navigate('/');
  };

  return (
    <div className='logout-container'>
      <h1>Logout</h1>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
