import React, { useState } from 'react'

const App = () => {
  let x = 0;
  const setX = () => {
    x = x + 1;
    console.log(x);
  }
  const [y, setY] = useState(0);
  const [name, setName] = useState("khwaja");
  const [data, setData] = useState(
    [{ name: "ishfaq", address: "srinagar" }, { name: "rabia", address: "bandipora" }, { name: "nazia", address: "srinagar" }]
  );
  
  
  return (
    <div>
      <div style={{ fontSize: "48px", marginTop: "300px" }}>{x}</div>
      <button onClick={() => { setX() }}>click me to update count</button>
      <div style={{ fontSize: "48px", marginTop: "300px" }}>{y}</div>
      <button onMouseOver={() => { setY(y + 1) }}>click me to update count</button>
      <br />
      <button onClick={() => { setName("muzamil") }}>{name}</button>
      <div>
        Name:{data[1].name}
      </div>

      <div>
        {data.map((obj,i)=> (
          <div key={i}>
            <h2><strong>Name:</strong>{obj.name}</h2>
            <h3><strong>Address:</strong>{obj.address}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App