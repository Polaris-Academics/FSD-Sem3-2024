import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-600 text-white flex justify-evenly'>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
    </div>
  )
}

export default Navbar