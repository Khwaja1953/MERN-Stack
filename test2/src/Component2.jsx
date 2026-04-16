import React from 'react'
import { useState } from 'react';
const arr = new Array(30000000).fill(0).map((_,i)=>({
    index: i,
    isGood: i == 29000000
}));
const random = Math.random();
const Component2 = () => {
    const [data, setData] = useState(arr);
    const good = data.find(item=>item.isGood)
    if (random > 0) return Error("Error hai")
  return (
    <div>
        <h1>This is component2 and is good is good at index {good.index}</h1>
    </div>
  )
}

export default Component2