import React, {useCallback, useEffect, useMemo, useState} from 'react'
import Hero from './components/Hero';

const App = () => {
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(100)
  console.log("app is rerendering.........");
  // const good = ()=>"i am good";
  const good = useCallback(()=>{
    return `i am good and count is ${count}`
  },[count]);
 
  return (
    <div>
      <h1>
        <button style={{fontSize: "25px"}} onClick={()=>{setCount(count + 1)}}>count is {count}</button>
        <button style={{fontSize: "25px"}} onClick={()=>{setCount2(count2 +-1)}}>count is {count2}</button>
      </h1>
      <Hero good={good}/>
    </div>
  )
}

export default App