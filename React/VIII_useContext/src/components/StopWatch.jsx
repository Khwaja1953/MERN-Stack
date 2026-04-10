import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [watch, setWatch] = useState(0);
    const [running,setRunning] = useState(false);
    const id = useRef()
    console.log(id.current);
    const startTime = ()=>{
        if (!running){
            setRunning(true);
            id.current = setInterval(()=>{
                
                setWatch(watch => watch + 1);
            },1000)
        }
    }
    const stopTime = ()=>{
        clearInterval(id.current);
        setRunning(false)
    }
  return (
    <div>
        <h2>{watch}</h2>
        <button onClick={()=>{startTime()}}>start</button>
        <button onClick={()=>{stopTime()}}>stop</button>

    </div>
  )
}

export default StopWatch