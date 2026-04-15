import React from 'react'
import { useSelector } from 'react-redux'

const Section = () => {
    const count = useSelector(state => state.counter.value)
  return (
    <div>
        <button>count is {count}</button>
    </div>
  )
}

export default Section