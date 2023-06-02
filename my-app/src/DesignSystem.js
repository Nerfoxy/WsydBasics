import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProdDetails from "./components/ProductDetails";
import AppProvider from './AppProvider';
import HomePage from './components/HomePage';
import SalesTool from './components/SalesTool';
import Contacts from './components/Contacts';
import CartPage from './components/CartPage';

const SystemDesgin = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <AppProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/WholeSale" element={<ProdDetails addToCart={addToCart} />} />
        <Route path="/SalesTool" element={<SalesTool />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/wishlist" element={<CartPage product={cart} />} />
      </Routes>
      <Footer />
    </AppProvider>
  );
};
export default SystemDesgin;
