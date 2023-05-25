import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <nav className="headerNav">
        <NavLink to="/" className="header_titles">
          Início
        </NavLink>
        <NavLink to="/details" className="header_titles">
          Detalhes
        </NavLink>
        <NavLink to="/contacts" className="header_titles">
          Contactos
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
