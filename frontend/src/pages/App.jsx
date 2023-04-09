import React from 'react'
import Home from './Home'
import Product from '../pages/Product';
import ProductList from './ProductList'
import { Register } from './Register';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import { Slider } from '../components/Slider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products/:category' element={<ProductList/>}/>
    <Route path='/product/:id' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
  </BrowserRouter>
}
export default App