import React from "react";
import { useContext } from "react"
import { contextCounter } from "../contxt"
export default function Main(){
    const {count, setCount} = useContext(contextCounter);
    return(
        <>
        <div>i am main body</div>
<button onClick={() => setCount(prevCount => prevCount + 1)}>
  click me {count}
</button>

        </>
    )
}