import {Link} from 'react-router-dom'

function Header(props){
    return(
        <div className='nav'>
            <h1>Header</h1>
            <Link to="/">HOME</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
            <Link to="/logout">LOGOUT</Link>
            </div>
    );
}

export default Header;