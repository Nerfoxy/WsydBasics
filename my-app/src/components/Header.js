import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import ProdDetails from "./ProductDetails";
import "../styles/style.css";

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="top-page-container">
      <div className="notification-bar"></div>
      <div className="container">
        <div className="header-container">
          <div className="title-navigation-container">
            <div className="title-container">
              <h1 className="title-header">WsydBasics</h1>
            </div>
            <div className="navigation-container">
              <NavLink to="/" className="header_titles">
                Início
              </NavLink>
              <NavLink to="/Produtos" className="header_titles">
                Produtos
              </NavLink>
              <NavLink to="/WholeSale" className="header_titles">
                WholeSale
              </NavLink>
              <NavLink to="/SalesTool" className="header_titles">
                Sales Tool
              </NavLink>
              <NavLink to="/contacts" className="header_titles">
                Contactos
              </NavLink>
            </div>
          </div>
          <div className="login">
            <a>Login</a>
            <NavLink to="/wishlist" className="header_titles">
            <a>Wishlist</a>
              </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
