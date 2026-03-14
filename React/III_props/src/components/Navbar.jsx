import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white h-[10vh] flex justify-between px-4 items-center'>
        {/* do not copy its home work */}
        <div className="logo text-4xl">ILS Srinagar</div>
        <div className='w-1/2'>
            <ul className='w-full flex justify-evenly *:hover:cursor-pointer *:hover:scale-125'>
                <li>Home</li>
                <li>Examination</li>
                <li>About</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar