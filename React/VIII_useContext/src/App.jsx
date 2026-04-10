import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import StopWatch from './components/StopWatch'
import countContext from './utils/countContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <countContext.Provider value={{count,setCount}}>

      <Hero count={count} />
      <button onClick={()=>{setCount(count + 1)}}>count is {count}</button>
    </countContext.Provider>
      <div>
        <StopWatch />
      </div>
    </>
  )
}

export default App
