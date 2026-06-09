import React from 'react'

const App = () => {

  function counter(){
    let count = 0;
    return ()=>{
      count++;
        console.log(`count is ${count}`)
  
    }
  }
  let count = 10;
  const fun1 = counter();
  
  return (
    <div>
      <a href="mailto:tikhw419@gmail.com?subject=help" target='_blank'>gmail</a>
      <a href="tel:8493094200">phone</a>
      <button className='btn'>click me</button>
      <button onClick={()=>{fun1()}}>click me</button>
    </div>
  )
}

export default App