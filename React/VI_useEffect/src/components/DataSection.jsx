import React,{useState, useEffect} from 'react';
import { Get } from '../api/Api';

const DataSection = () => {
    const [response, setRespone] = useState();
     const [loading, setLoading] = useState(true);
     useEffect(()=>{
        //  const fetchData = async()=>{
        Get("https://jsonplaceholder.typicode.com/posts")
        .then(data=>{setRespone(data);setLoading(false)})
       

        // }
        // fetchData();
     },[]);
  return (
     <div>
        <h1>using Axios</h1>
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
      
    </div>
  )
}

export default DataSection