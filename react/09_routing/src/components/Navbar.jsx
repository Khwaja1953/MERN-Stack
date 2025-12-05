import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
export default function Navbar(){
    const navigate = useNavigate();

    return(
        <>
        <ul>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/profile"><li>profile</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>about</li></NavLink>
            {/* Dynamic route examples */}
            {/* <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about/john"><li>John's About</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about/sarah"><li>Sarah's About</li></NavLink> */}
        </ul>
        </>
    )
}