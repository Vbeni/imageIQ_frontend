//essentially the same as register but conditionally render only if userlogged in = false 
import React from 'react'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = ({ signIn }) => {
  const initialState = { username: "", password: "" };
  const [input, setInput] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userToken = await signIn(input);

    if (userToken && userToken.user && userToken.user._id) {
      navigate(`/user/${userToken.user._id}`);
    } else {
      navigate("/");
    }
    setInput(initialState);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name: </label>
        <input
          id="username"
          name="username"
          value={input.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          type='password'
          value={input.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default Login;
