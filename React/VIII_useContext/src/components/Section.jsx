import React, { useContext } from 'react'
import Component from './Component'
import countContext from '../utils/countContext'

const Section = (props) => {
  const {count} = useContext(countContext);
  console.log("i am section and count is ",count)

  return (
    <div style={{border: "solid",padding: "20px"}}>
        <h2>i am section</h2>
        <Component count={props.count}/>
    </div>
  )
}

export default Section