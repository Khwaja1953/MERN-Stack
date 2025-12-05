import React, {useState} from "react";
interface valueInterface{
    name: string,
    age: number
    dob: string | number
}

const Form: React.FC = ()=>{
    const [value, setValue] = useState<valueInterface>({name: "", age: 0,dob:""})
const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name: target, value: data} = e.target;
    setValue({...value,[target]:data})
    
}
const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(value)

} 
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} value={value.name}/>
            <input type="number" name="age" onChange={handleChange} value={value.age}/>
            <input type="date" name="dob" onChange={handleChange} value={value.dob}/>
            <button type="submit">submit</button>
            </form>
            <h2>Name: {value.name}, Age: {value.age}, DOB: {value.dob}</h2>
        </div>
    )
}
export default Form