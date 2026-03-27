import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import MainSection from './components/MainSection'
import DataSection from './components/DataSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Card/>
      <Hero /> */}
      <MainSection/>
      <DataSection/>
      <DataSection/>
               
    </>
  )
}

export default App
