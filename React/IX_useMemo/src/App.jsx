import React, {useState, useMemo} from 'react'
const arr = new Array(10000000).fill(0).map((item,index)=>{
  return {
    index: index,
    isGood: index == 9000000
  }
});
// [{index: 0, isGood: false},{index: 1, isGood: false},{index:2,isGood: flase}.....{index: 9000000, isGood: True}....{index:9999999,isGood:false}]
const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [data, setData] = useState(arr);

  // const goodIndex = data.find((obj)=>obj.isGood == true);
  const goodIndex = useMemo(()=>{
    return data.find((obj)=>obj.isGood)
  },[data]);
  return (
    <div>
      <h1>useMemo hook</h1>
      <div>data has good variable at index {goodIndex.index}</div>
      <button onClick={()=>{setCount(count + 1);
      if (count == 10){
        setData(new Array(5000000).fill(1).map((item,index)=>{return {index: index,isGood: index == 4000000}}))
      }

      }}>count is {count}</button>
      <button onClick={()=>{setCount2(count2 + 1)}}>count2 = {count2}</button>
    </div>
  )
}

export default App