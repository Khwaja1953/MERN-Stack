import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card/>
      <Hero />
               
    </>
  )
}

export default App
