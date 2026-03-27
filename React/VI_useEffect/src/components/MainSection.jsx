import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const MainSection = () => {
  const [count,setCount] = useState(0);
  const [response, setRespone] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data)=>data.json())
    .then((data)=>{setRespone(data);
      setLoading(false)

      
    })
    .catch((error)=>{console.error(error)})
  },[]);
  
  return (
    <div>
      {loading ? <div>Loading.........</div>:
      <div>
        {response.map((item)=>(
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
       } 
      <button onClick={()=>{setCount(count + 1)}}>count is {count}</button>
    </div>
  )
}

export default MainSection


