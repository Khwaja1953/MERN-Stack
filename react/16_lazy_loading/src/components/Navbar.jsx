import React from 'react';
import {Link, NavLink} from "react-router-dom";
export default function Navbar(){
    return(
        <>
        <ul>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/profile"><li>profile</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>about</li></NavLink>
        </ul>
        </>
    )
}