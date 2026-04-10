import React, { useContext } from 'react'
import countContext from '../utils/countContext'

const Button = () => {
  const {count,setCount} = useContext(countContext);
  console.log(count)
  return (
    <div style={{border: "solid",padding: "20px"}}>
        <h4>i am button</h4>
        <button onClick={()=>{setCount(count+1)}}>count is {count}</button>
    </div>
  )
}

export default Button