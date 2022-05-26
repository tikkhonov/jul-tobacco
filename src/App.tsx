import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import ProductsPageAccessories from './pages/ProductsPageAccessories';
import ProductsPageTea from './pages/ProductsPageTea';
import ProductsPageTobacco from './pages/ProductsPageTobacco';

function App () {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<MainPage/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="cart" element={<CartPage/>} />
          <Route path="products" element={<ProductsPage/>} />
          <Route path="products/tobacco" element={<ProductsPageTobacco/>} />
          <Route path="products/tea" element={<ProductsPageTea/>} />
          <Route path="products/accessories" element={<ProductsPageAccessories/>} />
          <Route path="*" element={<MainPage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
