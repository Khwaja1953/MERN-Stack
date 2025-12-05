import { useEffect, useState } from "react"

function Posts(){
    const [count,setCount] = useState(0)
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
        .then(data => data.json())
        .then(data => setData(data))
        .catch(error => console.error(error))
    },[]);
    console.log(data.length)
    return(
        <div>
            <div className="box">
                {data.length !== undefined ? (<>{
                    data.map(item =>(
                        <div key={item.id}>
                            <p><strong>{item.title}</strong></p>
                            <p>{item.body}</p>
                        </div>
                    ))
                }</>) : (<>no data available at the time please try again</>)}

            </div>
        </div>
    )

}
export default Posts