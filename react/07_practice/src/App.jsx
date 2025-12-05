import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hotel from './components/Hotel'
import Posts from './components/Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hotel/>
    {/* <Posts/> */}
      
    </>
  )
}

export default App
