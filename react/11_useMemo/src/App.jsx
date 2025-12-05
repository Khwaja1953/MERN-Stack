import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rooms from './Rooms'

const arr = new Array(20_000_000).fill(0).map((e,i)=>{
  return{
    index: i,
    isGood: i===19_000_000
  }
})
function App() {
  const [count, setCount] = useState(0)
  // const good = arr.find(i=>i.isGood ===true)
  const [good,setGood] = useState(arr);
  const isgood = useMemo(()=>{return arr.find(item=>item.isGood==true)},[])
  return (
    <>
    <div>this number is true {isgood.index}</div>
    {/* <Rooms/> */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
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
