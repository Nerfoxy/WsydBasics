import React from "react";
import { NavLink } from "react-router-dom";
import image from "../images/sweatshirt.png"
import "../styles/style.css"


const NewArrivals = () => {
  return (
    <div className="new-arrivals">
    <h1>New Arrivals</h1>
    <div className="arrivals-container">
      <NavLink to="/WholeSale" className="prod-link">
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="shirt-labels">
          <p>T-shirt</p>
          <p>from 14€</p>
        </div>
      </div>
      </NavLink>
      <NavLink to="/WholeSale" className="prod-link">
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="shirt-labels">
          <p>T-shirt</p>
          <p>from 14€</p>
        </div>
      </div>
      </NavLink>
      <NavLink to="/WholeSale" className="prod-link">
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="shirt-labels">
          <p>T-shirt</p>
          <p>from 14€</p>
        </div>
      </div>
      </NavLink>
      <NavLink to="/WholeSale" className="prod-link">
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="shirt-labels">
          <p>T-shirt</p>
          <p>from 14€</p>
        </div>
      </div>
      </NavLink>
      <NavLink to="/WholeSale" className="prod-link">
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="shirt-labels">
          <p>T-shirt</p>
          <p>from 14€</p>
        </div>
      </div>
      </NavLink>
      <NavLink to="/WholeSale" className="prod-link">
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="shirt-labels">
          <p>T-shirt</p>
          <p>from 14€</p>
        </div>
      </div>
      </NavLink>
    </div>
    </div>
  );
};
export default NewArrivals;
