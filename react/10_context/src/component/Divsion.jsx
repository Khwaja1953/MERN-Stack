import React,{useContext} from 'react';
import {createCount} from '../context';
import './division.css';
// function Divsion({count}){
function Divsion(){
const value = useContext(createCount)
    return(
        <>
        <div className={value.count=="2"?"red":"blue"}>
            
        value of count is {value.count}
        
        </div>
        </>
    )
}
export default Divsion