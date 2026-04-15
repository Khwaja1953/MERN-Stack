import React, { useState } from 'react'

const Navbar = () => {
    console.log("Navbar is rerenderng..");
    const [nav, setNav] = useState(0)
  return (
    <div style={{backgroundColor:"white"}} onClick={()=>{setNav(nav + 1)}}>I am Navbar {nav}.....</div>
  )
}

export default Navbar