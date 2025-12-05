import { useContext } from "react"
import { contextCounter } from "../contxt"
export default function Profile(){
    const {count} = useContext(contextCounter);
    return (
        <>
        <div>
            i am profile {count}
        </div>
        </>
    )
}