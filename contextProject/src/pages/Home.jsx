import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Home = () => {
    const {isLoggedIn} = useContext(AuthContext)
  return (
    <div>
        {isLoggedIn ? "Logged In on Home Page" : "Logged Out on Home Page"}
    </div>
  )
}

export default Home