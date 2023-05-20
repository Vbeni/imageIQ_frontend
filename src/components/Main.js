import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login"
import Register from "../pages/Register"
import Logout from "../pages/Logout";

const Main = () => {
  return (
    <main>
      <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Logout' element={<Logout />} />
      </Routes>
    </main>
  )
}

export default Main;
