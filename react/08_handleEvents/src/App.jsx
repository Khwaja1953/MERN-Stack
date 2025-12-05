import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [form, setForm] = useState({name:"",email:"",age:""})
  const [url, setUrl] = useState("");
  function handleClick(){
    alert("button was clicked...!")
  }
  function handleMouse(){
    alert("Mouse was over div")
  }
  function handleChange(e){
    
    // if (e.target.name == "name") setName(e.target.value);
    // if(e.target.name == 'email') setEmail(e.target.value);
    if(e.target.name =="url") setUrl(e.target.value); 
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/event",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({form})
      });
      const result = await response.json();
      console.log(result);
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <button onClick={handleClick}>click me</button>
    <div className='box' onMouseOver={handleMouse}>hover over me</div>
    <form onSubmit={handleSubmit} >
      <label htmlFor="">Name</label>
    <input type="text" name="name" value={form.name} onChange={handleChange} />
    <label htmlFor="">Email</label>
    <input type="email" name="email" value={form.email} onChange={handleChange} />
    <label htmlFor="">Age</label>
    <input type="number" name="age" value={form.age} onChange={handleChange} />
    {/* <label htmlFor="">url</label>
    <input type="text" name="url" value={url} onChange={handleChange} /> */}
    <button type="submit">submit</button>
    </form>
    </>
  )
}

export default App
