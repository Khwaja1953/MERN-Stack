import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Hero = () => {
let response = "";
    const [count, setCount] = useState(0);
    useEffect( () => {

        const fetchData = async () => {
            response = await fetch("https://jsonplaceholder.typicode.com/posts");
            console.log(response);
        }
        fetchData();
        return ()=>{
            response = ""
            console.log(response);
        }
    },[]);
    return (
        <div>

            <button onClick={() => { setCount(count + 1) }}>count is {count}</button>
        </div>
    )
}

export default Hero