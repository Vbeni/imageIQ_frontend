import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login"
import Register from "../pages/Register"
import Logout from "../pages/Logout";

const Main = ({ isLoggednIn, signUp, login, user}) => {
  return (
    <div className="Main">
      <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register signUp={signUp}/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Logout' element={<Logout />} />
        
      </Routes>
    </div>
  )
}

export default Main;
