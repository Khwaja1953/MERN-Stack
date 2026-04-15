import React from 'react'

const Hero = ({good}) => {
    console.log("Hero section is rerendering......")
  return (
    <div>I am Hero Section {good()}</div>
  )
}

export default React.memo(Hero)