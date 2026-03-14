import { useState } from "react";
import Count from "./Count";
const Main = ()=>{
    const [count, setCount] = useState(0);
console.log("i am main body");

    return (
        <>
        <h1>i am main body</h1>
        <h2>welcome to our page</h2>
        <button onClick={()=>{setCount(count + 1)}}>main body count is {count}</button>
        <Count />
        </>
    )
}

export default Main