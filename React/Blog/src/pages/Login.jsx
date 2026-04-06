import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate = useNavigate();
    const [error, setError] = useState();
    // console.log("i am login page")
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
        .then(res => {
            setData({email: "",password:""});
            console.log(res.token);
            if (res.token){
                localStorage.setItem("token",`Bearer ${res.token}`)
                Navigate("/addBlog");
            }
            setError(res.error);
        })
        .catch(err => {console.log(err)})
    }
  return (
    <div className='py-10 flex flex-col items-center gap-10'>
        <h1 className='text-4xl'>Please Login Here</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}} className='p-10 border bg-gray-400 rounded h-56 flex flex-col justify-between'>
            <div>
                <label htmlFor="email">Email:</label>
                <input className='border mx-2 rounded' type="email" name="email" id="email" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input className='border mx-2 rounded' type="password" name="password" id="password" value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}} />
            </div>
            <div className='text-center'>
                <button className='border rounded px-2 py-1'>Login</button>
            </div>
        </form>
        <div>
            <button onClick={()=>{Navigate("/signup")}} className=' rounded px-2 py-1'>Dont have an account create here </button>
            
        </div>
    </div>
  )
}

export default Login