import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decerement, reset } from './redux/counterSlice'
import Section from './Section';

const App = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Section/>
      <h1>redux</h1>
     <button onClick={()=>{dispatch(decerement())}}>-</button> <button onClick={()=>{dispatch(reset())}}>count is {count}</button><button onClick={()=>{dispatch(increment())}}> +</button>
    </div>
  )
}

export default App