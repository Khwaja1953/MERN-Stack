import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import State from './components/State'
import Form from './components/Form'
import Hotel from './components/Hotel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Button fun={()=>{alert("hello")}} text={"click me"} num={count}/>
      <Button text='ok' num={12} />
      <State/>
      <Form/> */}
      <Hotel/>
    </>
  )
}

export default App
