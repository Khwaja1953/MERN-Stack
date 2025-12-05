import React, {useState, useRef} from 'react';
function Stopwatch(){
    const [start, setStart] = useState(0);
    const [miliSecond, SetMiliSecond] = useState(0)
    const ref = useRef(null);
    const ref2 = useRef(null);
    // let x ;
    function startTimer(){
       ref.current = setInterval(()=>{
        setStart(start => start + 1);
        
       },1000);
       
       ref2.current = setInterval(()=>{SetMiliSecond(miliSecond => miliSecond + 10  )

       },10)
    };
    if (miliSecond === 1000){
        SetMiliSecond(0)
    }
    function stopTimer(){
        clearInterval(ref.current); 
        clearInterval(ref2.current);
    }
    return(<>
    <div>
        {start}.{miliSecond}
    </div>
    <button onClick={startTimer}>start</button>
    <button onClick={stopTimer}>stop</button>
    <button onClick={()=>{setStart(0); SetMiliSecond(0)}}>clear</button>
    </>)

}
export default Stopwatch;