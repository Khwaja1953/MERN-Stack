import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState({username: "", password: "",email: ""})

  // console.log(username,password);
  console.log(data);
  const handleChange = (e)=>{
    // console.log("i am handle change function",e.target.value,e.target.name);
    // if (e.target.name == "username"){

    //   setUsername(e.target.value);
    // }
    // else {
    //   setPassword(e.target.value);
    // }
   
    
      setData({...data,[e.target.name]:e.target.value})
    
    

  }
  return (
    <div onClick={()=>{console.log("div was clicked....")}} style={{backgroundColor: "red"}}>
      <button onClick={(event)=>{setCount(count + 1);event.stopPropagation()}}>count is {count}</button>

      <form>
        <div>

        <input type="text" name='username' value={data.username} onChange={(e)=>{handleChange(e)}} placeholder='Enter Your Username' />
        </div>
        <div>
          <input type="password" name='password' value={data.password} onChange={(e)=>{handleChange(e)}} placeholder='Enter Your Password' />
        </div>
        <div>
          <input type="email" name="email" id="" value={data.email} onChange={(e)=>{handleChange(e)}} placeholder='Enter Email' />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App