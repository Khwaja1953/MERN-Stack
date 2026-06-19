import React, {useEffect, useState} from 'react'

const Box = () => {
  const [num , setNum] = useState(0);
  const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("i will run everytime when component rerenders i have no dependency")
      //   return ()=>{
      //   console.log("i am cleanup function inside no  dependency")
      // }
    });

    useEffect(()=>{
      console.log("i will run only one time i have empty array as dependency")
      return ()=>{
        console.log("i am cleanup function inside empty array dependency")
      }
    },[]);

    useEffect(()=>{
      console.log("i will run only when num changes")
    },[num])

  return (
    <div>
        hey i am a component
        <button onClick={()=>{setCount(count + 1)}}>count is {count}</button>
        <button onClick={()=>{setNum(num + 1)}}>num is {num}</button>
    </div>
  )
}

export default Box