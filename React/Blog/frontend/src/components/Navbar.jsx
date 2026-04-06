import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  // console.log("i am navbar")
  return (
    <div className='flex bg-gray-400 h-[5vh] justify-between items-center px-36 sticky top-0 w-full'>
      <p>Blog App</p>
      <ul className='flex w-[50vw] justify-evenly'>
        <li><NavLink className={(e)=> e.isActive?"bg-gray-600 px-2 py-1 border rounded text-white":""} to='/'>Home</NavLink></li>
        <li><NavLink className={(e)=> e.isActive?"bg-gray-600 px-2 py-1 border rounded text-white":""} to='/addBlog'>Add Blog</NavLink></li>
        <li><NavLink className={(e)=> e.isActive?"bg-gray-600 px-2 py-1 border rounded text-white":""} to="/login">Login</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar