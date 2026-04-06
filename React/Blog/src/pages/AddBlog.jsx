import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const AddBlog = () => {
    // console.log("i am addblog page")
    const [data, setData] = useState({title:"", body: ""});
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState();
    const [error, setError] = useState()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("body", data.body);
        formData.append("image", file);

        const token = localStorage.getItem("token");
        fetch("http://localhost:5000/blog/addBlog",{
            method: "post",
            headers: token ? {
                Authorization: token
            }: {},
            body: formData
            
        })
        .then(res => res.json())
        .then(res => {setMessage(res.message);setData({data:"",body:""})})
        .catch(err => {setError(err.error)});
    }
  return (
    <div className='flex flex-col items-center p-10 gap-10'>
        <h1 className='text-4xl'>Add a New Blog here</h1>
        {message && <div className='text-xl text-green-700'>{message}</div>}
        {error && <div className='text-xl text-red-700'>{error}</div>}
        <form onSubmit={(e)=>{handleSubmit(e)}} className='border flex h-full flex-col gap-10 items-center p-6 bg-blue-300 rounded'>
            <div>
                <input className='border' type="text" name="title" value={data.title} onChange={(e)=>{setData({...data,title:e.target.value})}} id="title" placeholder='Enter Title...' required />
            </div>
            <div>
                <input className='border' type="file" name="file" id="file" onChange={(e)=>{setFile(e.target.files[0])}} required/>
            </div>
            <div>
                <textarea className='border' name="body" id="body" value={data.body} onChange={(e)=>{setData({...data,body:e.target.value})}} required></textarea>
            </div>
            <div>
                <button className='border'>Post</button>
            </div>
        </form>
    </div>
  )
}

export default AddBlog