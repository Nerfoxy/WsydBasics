import React from "react";
import { Route, Routes } from "react-router-dom";
import AppProvider from "../../context/AppProvider";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import WelcomePage from "../../pages/WelcomePage";



const SystemDesgin = () => (
  <AppProvider>
    <Header />
    <div className="containerDesign">
      <div className="page">
        <Outlet/>
        <Routes>
          <Route path="/welcome" element={<WelcomePage/>} />

        </Routes>
      </div>
    </div>
    <Footer/>
  </AppProvider>
);

export default SystemDesgin;
