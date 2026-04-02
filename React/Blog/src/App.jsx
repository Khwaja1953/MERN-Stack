import React from 'react'
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {

  return (
    <div>
      <Navbar />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addBlog' element={<AddBlog/>} />
    <Route path='/login' element={<Login/>} />
    </Routes>
    <Footer/>

    </div>
  )
}

export default App