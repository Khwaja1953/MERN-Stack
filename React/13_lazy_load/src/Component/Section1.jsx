import React from 'react'
import { useState } from 'react';
const arr = Array(20000000).fill(1).map((_,i)=>{
    return {
        index: i,
        isGood: i == 19000000
    }
});
const Section1 = () => {
    const [data,setData] = useState(arr);
    const good = data.find((item=> item.isGood));
    let err = Math.random();
    console.log(err);
    if (err > 0.5){
        throw new Error("something went wrong")
    }
  return (
    <div>
        <h2>Section1 and good is at index {good.index}</h2>
    </div>
  )
}

export default Section1