import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProdDetails from "./components/ProductDetails"
import AppProvider from './AppProvider';
import HomePage from './components/HomePage';
import PresentPage from './components/PresentPage';
import { Outlet } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import SalesTool from './components/SalesTool';
import Contacts from './components/Contacts';

const SystemDesgin = () => {
  return (
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/WholeSale" element={<ProdDetails />} />
          <Route path="/SalesTool" element={<SalesTool />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
        <Outlet />
        <Footer/>
      </AppProvider>
  );
};

export default SystemDesgin;
