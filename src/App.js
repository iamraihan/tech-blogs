import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Videos from './components/Videos/Videos';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/BlogDetails/BlogDetails';

export const blogContext = createContext()

function App() {
  const [blogs, setBlogs] = useState([])
  return (
    <blogContext.Provider value={[blogs, setBlogs]}>
      <>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/videos' element={<Videos></Videos>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
        </Routes>
      </>
    </blogContext.Provider>
  );
}

export default App;
