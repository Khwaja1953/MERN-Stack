import React from 'react'

const Map = () => {
    const data = [{name: "khwaja",address:"handwara"}];
  return (
    <div>
        <h1>Students data</h1>
        <div>
            {data.length > 0 ?<h2>{data.map((item,index)=>(<p key={index}>
            <b>Name: {item.name}</b><br />
            <b>Address: {item.address}</b>
        </p>))}</h2>:<h2>loading....</h2> }

        
        </div>
    </div>
  )
}

export default Map