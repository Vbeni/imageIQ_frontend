import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import Logout from "./Auth/Logout";
import Profile from "./UserProfile/Profile";

import React from 'react'
import ImageHistory from "./UserProfile/ImageHistory";
import ImageShow from "./UserProfile/ImageShow";
const Main = ({ isLoggedIn, signUp, signIn, user, uploadImage}) => {
  return (
    <div className="Main">
      <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register signUp={signUp}/>} />
        <Route path='/Login' element={<Login signIn={signIn} />} />
        <Route path='/Logout' element={<Logout />} />
       <Route path='/user/:id' element={<Profile />} /> 
       <Route path="/imagehistory" element={<ImageHistory />} />
       <Route path="/image/:id" element={<ImageShow />} />

      </Routes>
    </div>
  )
}

export default Main;
