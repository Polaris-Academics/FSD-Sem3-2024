import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {isLoggedIn, toggleLoggedIn} = useContext(AuthContext);
  return (
    <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <div>
            <button onClick={toggleLoggedIn}>{isLoggedIn ? "Log Out" : "Log In"}</button>
          </div>
        </nav>
    </div>
  )
}

export default Navbar