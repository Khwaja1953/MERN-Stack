import React, {useEffect, useState} from 'react'

const Card = () => {
  // console.log("hello world");
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
    useEffect(()=>{
        console.log("i am useEffect with empty array dependency....")
    },[]);
    useEffect(()=>{
      console.log("i am useEffect with count dependency");
    },[count]);

    useEffect(()=>{
      console.log("i am useEffect with no dependency");
    });
    useEffect(()=>{
      return ()=>{
        console.log("i am cleanup function....");
      }
    },[])

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={()=>{setCount(count+1)}}>count is {count}</button>
      <button onClick={()=>{setNum(num + 1)}}>num is {num}</button>
    </div>
  )
}

export default Card