import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import {createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter} from 'react-router-dom';
import { contextCounter } from './contxt'
import { lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary'

import Fallback from './Error'
// const Navbar = lazy(()=> import('./components/Navbar'))
// const Main = lazy(()=> import('./components/Main'))
const About = lazy(()=> import('./components/About'))
const Profile = lazy(()=> import('./components/Profile'))

function App() {
  
const [count, setCount] = useState(0);

  return (
    <>
      {/* <RouterProvider router={router}/> */}
    <contextCounter.Provider value={{ count, setCount }}>
      <Navbar />
      <ErrorBoundary  FallbackComponent={Fallback} onError={()=>{}}>

      <Suspense fallback={<div>Loading.....</div>}>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:username' element={<About />} />
      </Routes>
      </Suspense>
      </ErrorBoundary>
    </contextCounter.Provider>
    </>
  )
}

export default App
