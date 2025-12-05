import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [x,setX] = useState(0);
  const [y, setY] = useState(100);
  const [z,setZ] = useState(0);
  const a = useRef(0)
  useEffect(()=>{
    setTimeout(()=>{setCount(count+1)},1000)
  });
  useEffect(()=>{setX(x+1)},[]);
  useEffect(()=>{setY(y-1);alert("value of z has changed")},[z]);


  return (
    <>
    <button onClick={()=>{a.current = a.current + 1}}>{a.current}</button>
      <div>
        <Navbar/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setZ((z) => z + 1)}>
          count is {count} <br />
          x is {x} <br />
          y is {y} <br />
          z is {z}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
