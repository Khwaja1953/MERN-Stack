import React, {useState, useEffect} from 'react';

export default function Hotel(){
    const [data, setData] = useState([
        {name: "hotel A", desc:"it is located at this place"},
        {name: "hoel B", desc: "it is located at that place"},
        {name: "hotel C",desc: "it is located at here "}
    ]);
    const [Todos, setTodos] = useState([])
    const Component = ({data})=>{
        return(
            <>
            <h2>{data.name}</h2>
            <div>{data.desc}</div>
            </>
        )
    }
    useEffect(()=>{
        fetch('http://localhost:5000/api/hotel')
        .then(response => response.json())
      .then(data => setTodos(data))
      .catch(err => console.error(err));
    },[])
    return (
        <>
        <h2>This is the list of available hotels</h2>
        {Todos.map(items =>{
            return(
                // <Component key={items.name} data={items}/>
                <div key={items.nam}>
                    <h2  className="name">{items.name}</h2>
                    <div className="desc">{items.description}</div>
                </div>
            )
        })}
        
        </>
    )
}