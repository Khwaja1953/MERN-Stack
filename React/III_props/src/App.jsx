import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Counter from './components/Counter'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  console.log("num is ",num);
  return (
    <div className='bg-black h-screen'>
      <Navbar />
    <div className='grid grid-cols-2 gap-4 px-3 justify-center text-center w-1/2 mx-auto mt-10 bg-black'>
      <Card name={"ishfaq"} batch={"Mern"} contact={"123456"} about={"this is isfaq "}/>
      <Card name={"Rabiya"} batch={"Mern"} contact={"14536"} about={"this is Rabiya "}/>
      <Card name={"Nazia"} batch={"MEAN"} contact={"1265456"} about={"this is Nazia "}/>
      <Card name={"Muneeb"} batch={"Mern"} contact={"1456456"} about={"this is Muneeb "}/>
    </div>
    <Counter num={num} setNum={setNum}/>
    </div>
  )
}

export default App