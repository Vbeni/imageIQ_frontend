import {Link} from 'react-router-dom'
import React from "react";
function Header(props){
    return(
        <div className='nav'>
            <nav className='header-nav'>
            <Link to="/" className='nav-link'>HOME</Link>
            <div className='nav-links-right'>
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
            <Link to="/logout">LOGOUT</Link>
          
            </div>
            </nav>
            </div>
    );
}

export default Header;