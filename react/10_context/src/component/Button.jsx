import React, { useContext } from 'react';
import Divsion from './Divsion';
import { createCount } from '../context';
// function Button({count}){
    function Button(){
 const value = useContext(createCount);
    return(
        <>
        i am a button 
        {/* <Divsion count = {count}/> */}
        <button onClick={()=>{value.setCount(value.count + 1)}}>click me</button>
        <Divsion/>
        </>
    )
}
export default Button