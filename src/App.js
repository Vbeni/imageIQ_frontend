import "./index.css";
import { Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Logout from "./pages/Logout";

function App(){

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Logout' element={<Logout />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;