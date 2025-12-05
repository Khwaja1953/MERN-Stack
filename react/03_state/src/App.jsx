import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Navbar from "./components/Navbar"
import Todo from './components/Todo'
function App() {
  const [count, setCount] = useState(0)
  let a = 0;
  
  function abc (){
    a  = a + 1;
    document.getElementById("btn").innerText = a;

  }

  return (
    <>
    {/* <Navbar /> */}
     {/* <button id="btn" onClick={abc}>{a}</button> */}
     {/* <Todo/> */}
     <Card/>
    </>
  )
}

export default App
