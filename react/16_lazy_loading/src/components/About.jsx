import { useParams } from "react-router-dom"
export default function About(){
    const x = Math.random();
    console.log(x)
    const {username} = useParams()
    if(x > 0.2){
        return new Error("error")
        
    }
    return(
        <>
        <div>i am about section {username}</div></>
    )
}