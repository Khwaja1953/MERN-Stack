import React,{useState} from 'react'

const Count = () => {
    const [count,setCount] = useState(0);
    console.log("count is changing...");
  return (
    <button onClick={()=>{setCount(count + 1)}}>Count is {count}</button>
  )
}

export default Count