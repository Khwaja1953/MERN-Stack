import React from 'react'
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import {Routes, Route, Navigate} from 'react-router-dom';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import Signup from './pages/Signup';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

const App = () => {

  return (
    <div>
      <Navbar />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addBlog' element={<ProtectedRoute><AddBlog/></ProtectedRoute>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/blog/:id' element={<Blog/>}/>
    </Routes>
    <Footer/>

    </div>
  )
}

export default App
