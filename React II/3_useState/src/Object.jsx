import React, { useState } from 'react'

const Object = () => {
    const [Data, setData] = useState({name:"saijdeep",address:"sringar",phone:"12345"})
    const [arr, setArr] = useState(["apple"])
  return (
    <div>
        <h1>Name: {Data.name}</h1>
        <h2>Address: {Data.address}</h2>
        <h2>phone: {Data.phone}</h2>
        <h2>Gender: {Data.gender}</h2>
        <button onClick={()=>{setData({...Data,gender:"female"})}}>insert Gender </button>
        <button onClick={()=>{setData({...Data,phone: "9906123456"})}}>change phone</button>
        <div>
            <ul>

            {arr.map((item,index)=>(<li key={index}>{item}</li>))}
            </ul>
            <button>add orange</button>
            <button>add mango</button>
            <button>remove apple</button>
        </div>
    </div>
  )
}

export default Object