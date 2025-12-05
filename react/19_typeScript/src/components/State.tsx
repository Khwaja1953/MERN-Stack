import React,{useState} from "react";
interface Book {
    name: string;
    price: number;
}

const State: React.FC = ()=>{
    const [count, setCount] = useState<Book>({name: "book1", price: 23});//explicit casting
    return(
        <div>
            <h1>name: {count.name} price: {count.price}</h1>
            <button onClick={()=>{setCount({name:"book2", price:33})}}>click me</button>
        </div>
    )
}
export default State