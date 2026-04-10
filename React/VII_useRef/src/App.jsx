import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const x = useRef(0);
  const changeBg = useRef()
  const ref = useRef();
  console.log(x.current);

  return (
    <>
      
                  
<button onClick={()=>{setCount(count + 1)}}>count is {count}</button>
<button onClick={()=>{x.current = x.current + 1}}>click me</button>
<button ref={changeBg} onClick={()=>{changeBg.current.style.backgroundColor = "red"; changeBg.current.innerText = "button Clicked"}}>click me to check my bg color</button>

<button ref={ref} onClick={()=>{ref.current.innerText = "Welcome to our website"}}>click me</button>
    </>
  )
} 
// npm create vite@latest .
// then select react then javascript 

export default App
