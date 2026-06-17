import './App.css';
import { useState } from 'react';
import Greet from './components/Greet';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div>
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count * 2)}}>click me</button>
    </div>
    <Greet/>
    </div>
  );
}

export default App;
