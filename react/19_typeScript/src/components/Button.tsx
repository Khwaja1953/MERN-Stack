import React from "react";
interface ButtonProps {
    text: string;
    num: number;
    fun?:()=> void; 
    x?: string | number
}

// type props = {text: string}

// const Button = (props: {text: string})=>{
const Button: React.FC<ButtonProps> = (props)=>{
    // const {text, fun, num} = props;
return(
    <button onClick={props.fun}>{props.text} {props.num}</button>
)
}

// const Button: React.FC<props> = (props)=>{
// return(
//     <button >{props.text}</button>
// )
// }

export default Button

