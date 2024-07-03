// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductPage from './ProductPage/ProductPage';

import Login from './Login/Login';
import Register from './RegisterPage/RegisterPage';
import ProductDetailPage from './ProductDetails/ProductDetailPage';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/order-history" element={<OrderHistory />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
