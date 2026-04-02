import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  console.log("i am navbar")
  return (
    <div className='flex bg-gray-400'>
      <p>Blog App</p>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addBlog'>Add Blog</Link></li>
        <li><NavLink className={(e)=> e.isActive?"bg-red-400":""} to="/login">Login</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar