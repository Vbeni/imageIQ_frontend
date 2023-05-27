import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import Logout from "./Auth/Logout";
import Profile from "./UserProfile/Profile";
import UploadImage from "./UserProfile/UploadImage";
import React from 'react'

const Main = ({ isLoggedIn, signUp, signIn, user, uploadImage}) => {
  return (
    <div className="Main">
      <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register signUp={signUp}/>} />
        <Route path='/Login' element={<Login signIn={signIn} />} />
        <Route path='/Logout' element={<Logout />} />
       <Route path='/user/:id' element={<Profile />} /> 
       <Route path="/upload" element={<UploadImage uploadImage={uploadImage} />} />
      </Routes>
    </div>
  )
}

export default Main;
