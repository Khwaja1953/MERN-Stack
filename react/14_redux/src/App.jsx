import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import {increment} from './redux/counter/counterSlice'
function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
     <Navbar count = {count}/>
     <p>{count}</p>
     <button onClick={()=>{dispatch(increment())}}>increase</button>
     
    </>
  )
}

export default App
