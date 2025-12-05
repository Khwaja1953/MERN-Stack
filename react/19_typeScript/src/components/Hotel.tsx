
import React, {useEffect, useState} from "react";
interface HotelInterface {
    name: string,
    description: string,
    _id: number | string,
    images?: string[]
    
}

const Hotel = ()=>{
    const [data, setData] = useState<HotelInterface[]>([]);
    useEffect(()=>{
        fetch("http://localhost:5000/api/hotel")
        .then(data => data.json())
        .then(data => setData(data))
        .catch(error => console.error(error)
        )
    },[])

    return(
        <div>
            {data.map(item =>(
                <div key={item._id}>
                    <img src={item.images?.[1]} alt="error" />
                    <div>{item.name}</div>
                    <div>{item.description}</div>

                </div>
            ))}
        </div>
    )
}
export default Hotel