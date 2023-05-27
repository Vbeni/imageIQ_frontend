import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div>
        <h1>Home of ImageIQ, an image recognition app designed to provide clarity to your visual content. ImageIq offers an intuitive platform for effortless image analysis. With its user-friendly interface, simply upload your images and let ImageIq handle the rest.</h1>
        <div>
        <Link to="/register">Sign Up</Link> 
        <Link to="/login">Log In</Link> 
        </div>
    </div>
  )
}

export default Home;
