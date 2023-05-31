import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className='home'>
        <h1>Home of ImageIQ</h1>

        <h2>An image recognition app designed to provide clarity to your visual content. ImageIq offers an intuitive platform for effortless image analysis. With its user-friendly interface, simply upload your images and let ImageIQ handle the rest.</h2>
        <div className='home-links'>
        <Link to="/register" className='link-button'>Sign Up</Link> 
        <Link to="/login" className='link-button'>Log In</Link> 
        </div>
    </div>
  )
}

export default Home;
