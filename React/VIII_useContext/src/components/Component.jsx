import React from 'react'
import Button from './Button'


const Component = (props) => {
    const {count} = props;
  return (
    <div style={{border: "solid",padding: "20px"}}>
        <h3>i am compoent </h3>
        <Button count={count}/>
    </div>
  )
}

export default Component