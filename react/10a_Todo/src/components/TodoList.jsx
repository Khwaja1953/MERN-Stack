import React, { useContext } from 'react'
import { todoContext } from '../App'

const TodoList = () => {
    const {data, handleRemoveTodo, handleUpdateTodo} = useContext(todoContext)
    console.log("todolist",data);
    // const handleChange = (e,id,todo)=>{
    //   handleUpdateTodo(e.target.value,id,todo)
    //   console.log(e.target.value,id)
    // }
  return (
    <div>
        {data ?(data.map((item)=>(
            <div key={item.id}><input type='checkbox' checked={item.isDone} onChange={()=>{handleUpdateTodo(item.id,item.todo)}}/>{item.todo}<button onClick={()=>{handleRemoveTodo(item.id)}}>Remove</button></div>
        ))):" "}
    </div>
  )
}

export default TodoList