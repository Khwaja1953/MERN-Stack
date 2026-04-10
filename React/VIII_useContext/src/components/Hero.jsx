import React from 'react'
import Section from './Section'

const Hero = ({count}) => {
  return (
    <div style={{border: "solid",padding: "20px"}}>
        <h1>i am hero section</h1>
        <Section count={count}/>
    </div>
  )
}

export default Hero