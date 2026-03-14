import React from 'react'

// const Card = ({name,batch,contact,about}) => {
const Card = (props) =>{
    // console.log(props);
    const {name,batch,contact,about} = props;
  return (
    <div className='border rounded flex flex-col gap-5 py-5 bg-gray-900 text-white hover:shadow-[-5px_5px_15px_-3px_blue] shadow-blue-800 hover:scale-105 hover:cursor-pointer'>
        <h2>Name: {name}</h2>
        <p>Batch: {batch}</p>
        <p>Contact: {contact}</p>
        <p>{about}</p>
    </div>
  )
}

export default Card