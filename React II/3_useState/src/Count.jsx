import React, {useState} from 'react'

const Count = () => {
    console.log("hello count")
     let num = 0;
      const [count, setCount] = useState(0)
      function increaseNum(){
        console.log("before click ",num);
        num++;
        console.log("after click ",num);
      }
      if (count == 10 ){
        return(
            <div>this is new state of count</div>
        )
      }
  return (
    <div>
      <h1>useState hook</h1>
      <button onClick={()=>{increaseNum()}} style={{fontSize: "32px"}}>num is {num}</button>
      <br />
      <button onClick={()=>{setCount(count + 1)}} style={{fontSize: "32px"}}>count is {count}</button>
    </div>
  )
}

export default Count