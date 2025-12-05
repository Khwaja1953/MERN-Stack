import {memo} from 'react'
function Navbar({hey, hello}){
console.log("rerendering...")
    return(
        <>
        <div>i am a {hello()} navbar</div>
        </>
    )
}
export default memo(Navbar)