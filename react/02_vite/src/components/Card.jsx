import React from "react";
import { useState } from "react";
const Card = ({ heading= [] }) => {
    const [count, setCount] = useState(0);
    const next = ()=>{
        if (heading.length === 0) return;

        setCount(i => (i + 1) % heading.length);
    }
    return(
        <>
        <h3>Hello khwaja</h3>
        <h2>this is my heading {heading[count]}</h2>
        <p>{count}</p>
        <button onClick={next}>next heading</button>
        </>
    )

}
export default Card;