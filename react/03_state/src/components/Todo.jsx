import { useState } from "react"

export default function Todo(){
    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState('');
    function handleAdd(title){
        setTodo([...todo,{title:title}]);
        setTitle("")
    }
    function handleRemove(title){
        setTodo(todo.filter(item => item.title !== title))
    }

    return(
        <>
        <div>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <button onClick={()=>{handleAdd(title)}}>Add</button>
        </div>
        <div>
            {todo.length ===0?(<div>Empty Todo</div>):(<div>
                {todo.map(item => (
                    <div key={item.title}>
                        <div>{item.title}</div>
                        <button onClick={()=>{handleRemove(item.title)}}>remove</button>
                    </div>
                ))}

            </div>)}
        </div>
        </>
    )
}