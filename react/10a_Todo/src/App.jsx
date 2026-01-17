import { createContext, useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export const todoContext = createContext();
function App() {
  const [data, setData] = useState([]);
  console.log("app",data)
  const handleAddTodo = (todo)=>{
    // console.log('todo is ',todo)
    setData([...data, {"todo":todo,"id":Date.now(),isDone:false}]);
    // localStorage.setItem("data",JSON.stringify(data))
    
  }
  const handleRemoveTodo = (id)=>{
    // console.log(data);
    setData(data.filter((item)=>item.id!==id));
    // localStorage.setItem("data",JSON.stringify(data))
  }
  const handleUpdateTodo = (id,todo)=>{
    // console.log('event',e)
    data.find(item=>item.id == id).isDone?(setData([...(data.filter((item)=> item.id !== id)),{"todo":todo,"id":id,isDone:false}])): (setData([...(data.filter((item)=> item.id !== id)),{"todo":todo,"id":id,isDone:true}]))
    
    
    // localStorage.setItem("data",JSON.stringify(data))

  }
  useEffect(() => {
  const savedDataString = localStorage.getItem("data");
  
  if (savedDataString) {
    
      // Use JSON.parse() instead of .json()
      const parsedData = JSON.parse(savedDataString);
      setData(parsedData);
    
  }
  
}, []);
useEffect(()=>{
  if (data.length || 0 > 0){

    localStorage.setItem("data",JSON.stringify(data))
  }
},[data])

  return (
    <><todoContext.Provider value={{data,handleAddTodo,handleRemoveTodo, handleUpdateTodo}}>

      <AddTodo/>
      <TodoList/>
    </todoContext.Provider>
    </>
  )
}

export default App
