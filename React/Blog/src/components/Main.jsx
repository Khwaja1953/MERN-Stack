import React, { useEffect, useState } from 'react'
import { Get } from '../utils/api'

const Main = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Get('/')
    //   .then(data => { 
    //     console.log(data);
    //     setData(data);
    //      setLoading(false)
    //      })
    //   .catch(err => { setError(err) })
    fetch("http://localhost:5000")
    .then(data => data.json())
    .then(data => { 
        console.log(data);
        setData(data.blogs);
         setLoading(false)
         })
      .catch(err => { setError(err) })
  }, []);
  return (
    <div>
      {
        loading ? <div> Loading Blogs.....</div>:
        <div>
          {data.map((blog)=>(
            <div key={blog._id}>
              <img src={`http://localhost:5000${blog.image}`} alt="error" />
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Main