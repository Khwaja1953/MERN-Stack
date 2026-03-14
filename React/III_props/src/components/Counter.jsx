import React from 'react'
import { useState } from 'react'

const Counter = (props) => {
    const [count, setCount] = useState(0);
    console.log("count is ",count);
  return (
    <div className='text-white text-center grid'>
        <button className='mt-30 text-3xl' onClick={()=>{setCount(count + 1)}}>count is {count}</button>
        <button className='mt-10 text-3xl' onClick={()=>{props.setNum(props.num + 1)}}>Num is {props.num}</button>
    </div>
  )
}

export default Counter