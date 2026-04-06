import React from 'react'
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import Signup from './pages/Signup';
import ProtectRoute from './utils/ProtectRoute';


const App = () => {

  return (
    <div>
      <Navbar />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addBlog' element={<ProtectRoute><AddBlog/></ProtectRoute>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/blog/:id' element={<Blog/>}/>
    </Routes>
    <Footer/>

    </div>
  )
}

export default App