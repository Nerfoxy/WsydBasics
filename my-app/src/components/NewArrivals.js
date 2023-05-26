import React from "react";
import image from "../images/sweatshirt.png"
import "../styles/style.css"


const NewArrivals = () => {
  return (
    <div className="new-arrivals">
    <h1>New Arrivals</h1>
    <div className="arrivals-container">
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="shirt-labels">
          <p>T-shirt</p>
          <p>from 14€</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="shirt-labels">
          <p>T-shirt</p>
          <p>from 14€</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="shirt-labels">
          <p>T-shirt</p>
          <p>from 14€</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="shirt-labels">
          <p>T-shirt</p>
          <p>from 14€</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="shirt-labels">
          <p>T-shirt</p>
          <p>from 14€</p>
        </div>
      </div>
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="shirt-labels">
          <p>T-shirt</p>
          <p>from 14€</p>
        </div>
      </div>
    </div>
    </div>
  );
};
export default NewArrivals;
