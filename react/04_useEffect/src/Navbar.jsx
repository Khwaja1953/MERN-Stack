import React, {useState,useEffect} from "react";
function Navbar(){
    const [x, setx] = useState(0);
    const [y, sety] = useState(100);
    useEffect(()=>{
       alert("either x or y has changed")
    },[x,y])
     useEffect(
        ()=>{
            return ()=>{
                alert("navbar closed")
            }
        },[]
    )
return(<>
<p>i am navbar</p>
<button onClick={()=>{setx(x+1)}}>{x}</button>
<button onClick={()=>{sety(y-1)}}>{y}</button>
</>)
}
export default Navbar;