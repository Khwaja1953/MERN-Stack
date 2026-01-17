import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black text-white text-3xl'>hello aasim musavir</div>
<div>hey</div>
      <div className='bg-red-600 p-4 sticky top-1'>hello world</div>
    
      <span className='bg-green-700 block'> hey i am a span</span>
      <ul className='flex justify-evenly border m-6 h-32 items-center flex-col'><li>hi

      </li>
        <li>hey</li>
        <li>lf</li>
        <li>dk</li></ul>
        <ul className="grid grid-cols-2 border justify-center">
          <li className='border'>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
    <div className='relative border m-4 '>hey i am a div</div>
    <div className='border bg-[#00050d]'>hey i a anoter <div></div></div>

    <div className='border p-8 m-2 relative'>
      <div className="border absolute ">hey i am a div in another div</div>
      <div> hello world</div>
      
    </div>
    <div className="border bg-red-100 hover:bg-red-800 w-32 hover:w-64 duration-1000 animate-bounce">transition</div>
    <div className='fixed'>hello</div>
      <div className="h-128">hey</div>
    </>
  )
}

export default App
