import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<MainPage/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="cart" element={<CartPage/>} />
          <Route path="products" element={<ProductsPage/>} />
          <Route path="*" element={<MainPage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
