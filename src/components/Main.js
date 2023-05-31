// Main.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Logout from './Auth/Logout';
import Profile from './UserProfile/Profile';
import ImageHistory from './UserProfile/ImageHistory';
import ImageShow from './UserProfile/ImageShow';

const Main = ({ isLoggedIn, setIsLoggedIn, signUp, signIn, uploadImage }) => {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register signUp={signUp} setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/Login"
          element={<Login signIn={signIn} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/Logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/user/:id"
          element={<Profile setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/imagehistory" element={<ImageHistory />} />
        <Route path="/image/:id" element={<ImageShow isLoggedIn={isLoggedIn} 
              setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </div>
  );
};

export default Main;
