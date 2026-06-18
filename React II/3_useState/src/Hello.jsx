import React, { useState } from 'react'

const Hello = () => {
  const [greet,setGreet] = useState("Good Morning");
  const [dark,setDark] = useState(false);
    console.log("hello world")
  return (
    <>
    <div onClick={()=>{setGreet("Good Night")}}>{greet}
    </div>
    <button onClick={()=>{setDark(!dark)}}>{dark ? "light" : "dark"}</button>
    </>
  )
}

export default Hello