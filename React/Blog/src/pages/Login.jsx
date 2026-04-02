import React, { useState } from 'react'

const Login = () => {
    console.log("i am login page")
    const [data, setData] = useState({email:"",password:""});
    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch("http://localhost:5000/user/login",{
            method: "post",
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify({...data})
        })
        .then(res => res.json())
        .then(res => {console.log(res);
            setData({email: "",password:""});
        })
        .catch(err => {console.log(err)})
    }
  return (
    <div>
        <h1>Please Login Here</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}} />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
        <div>
            <a href="/home">create account here</a>
            
        </div>
    </div>
  )
}

export default Login