import React, { useContext, useState } from 'react'
import { todoContext } from '../App';

const AddTodo = () => {
    const {handleAddTodo} = useContext(todoContext);
    // console.log(handleAddTodo)
    const [todo, setTodo]= useState("");
   
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("")
    }
  return (
    <div>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            
                <input type="text" name="data" value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
            
            
                <button type='submit'>ADD</button>
            
        </form>
    </div>
  )
}

export default AddTodo