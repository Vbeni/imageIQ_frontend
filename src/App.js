import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./components/Main";
import React, { useState } from 'react';
import { setUserToken, clearUserToken, getUserToken} from './utils/authToken'

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(getUserToken() ? true : false)
  
  const registerUser = async (data) => {
    try {

      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }

      const newUser = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        configs
      )

      const parsedUser = await newUser.json()
  

      // sets local storage
      setUserToken(parsedUser.token)
      // put the returned user object in state
      setCurrentUser(parsedUser.currentUser)
      // adds a boolean cast of the responses isLoggedIn prop
      setIsAuthenticated(parsedUser.loggedIn)

      // alternative (safer) implementation would be to use jwt decode library - <https://www.npmjs.com/package/jwt-decode>
      // this would also require reconfiguring our backend so we only send tokens with a signup

      return parsedUser
    } catch (err) {
    
      clearUserToken();
      setIsAuthenticated(false);
    }
  }

  const loginUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        configs
      )
      const user = await response.json()
      // sets local storage
      setUserToken(user.token)
      // put the returned user object in state
      setCurrentUser(user.currentUser)
      // adds a boolean cast of the responses isLoggedIn prop
      setIsAuthenticated(user.loggedIn)

      return user
    } catch (err) {
      clearUserToken()
      setIsAuthenticated(false)
    }
  }
  const setIsLoggedIn = (value) => {
    setIsAuthenticated(value);
  };
  return (
    <div className="App">
      <Header user={currentUser} isLoggedIn={isAuthenticated}/>
      <Main 
      isLoggedIn={isAuthenticated}
      setIsLoggedIn={setIsLoggedIn}
      signUp={registerUser} 
      signIn={loginUser} 
      user={currentUser} 
      />
      <Footer />
    </div>
  );
}

export default App;
