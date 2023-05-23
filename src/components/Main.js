import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import Logout from "./Auth/Logout";
import Profile from "./UserProfile/Profile";

const Main = ({ isLoggedIn, signUp, signIn, user}) => {
  return (
    <div className="Main">
      <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register signUp={signUp}/>} />
        <Route path='/Login' element={<Login signIn={signIn} />} />
        <Route path='/Logout' element={<Logout />} />
       <Route path='/user/:id' element={<Profile />} /> 
      </Routes>
    </div>
  )
}

export default Main;
