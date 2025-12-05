import React from "react";
import { useContext, useState } from "react"
import { contextCounter } from "../contxt"
import { useNavigate } from "react-router-dom"

export default function Main(){
    const {count, setCount} = useContext(contextCounter);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleNavigateToUser = () => {
        if(username.trim()) {
            navigate(`/about/${username}`) // Dynamic navigation!
        }
    }

    return(
        <>
        <div>
            <h2>I am main</h2>
            <button onClick={()=> setCount(count+1)}>{count}</button>
            
            <div style={{marginTop: '20px'}}>
                <h3>Navigate to a user's about page:</h3>
                <input 
                    type="text" 
                    placeholder="Enter username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleNavigateToUser}>Go to User Profile</button>
            </div>
        </div>
        </>
    )
}