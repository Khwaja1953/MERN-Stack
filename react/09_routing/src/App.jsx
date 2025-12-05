import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Profile from './components/Profile'
import About from './components/About'
import {createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter} from 'react-router-dom';
import { contextCounter } from './contxt'

function App() {
  // const router = createBrowserRouter([
  //   {path: '/',
  //     element: <><Navbar/><div>i am div in main section</div><Main/></>
  //   },
  //   {path: '/profile',
  //     element: <><Navbar/><Profile/></>
  //   },
  //   {path: '/about',
  //     element: <><Navbar/><About/></>
  //   }
  // ])
const [count, setCount] = useState(0);

  return (
    <>
      {/* <RouterProvider router={router}/> */}
    <contextCounter.Provider value={{ count, setCount }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:username' element={<About />} />
      </Routes>
    </contextCounter.Provider>
    </>
  )
}

export default App
