import React from "react";
import Header from "./Header";
import image from "../images/sweatshirt.png";
import "../App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetails = () => {
  return (
    <>
      <div className="detail-container">
      <div className="image-container">
      <Carousel>
        <div className="carousel-images-container">
          <img src={image} alt="" />
        </div>
        <div className="carousel-images-container">
          <img src={image} alt="" />
        </div>
        <div className="carousel-images-container">
          <img src={image} alt="" />
        </div>
        <div className="carousel-images-container">
          <img src={image} alt="" />
        </div>
        <div className="carousel-images-container">
          <img className="carousel-image" src={image} alt="" />
        </div>
      </Carousel>
    </div>
        <div className="details">
          <div className="title">
            <h1>T-Shirt</h1>
          </div>
          <p>28€</p>
            <p>Size:</p>
            <div className="size-buttons">
              <button>Small</button>
              <button>Medium</button>
              <button>Large</button>
              <button>XL</button>
              <button>2XL</button>
              <button>3XL</button>
            </div>
          <div className="color">
            <p>Color: Black</p>
            <div className="color-block"></div>
          </div>
          <div className="qty-button">
            <button>-</button>
            <button>1</button>
            <button>+</button>
          </div>
          <div className="add-cart">
            <button>Add to Cart</button>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1-4</td>
                  <td>47.99€</td>
                </tr>
                <tr>
                  <td>5-19</td>
                  <td>38.99€</td>
                </tr>
                <tr>
                  <td>20-49</td>
                  <td>36.89€</td>
                </tr>
                <tr>
                  <td>50-99</td>
                  <td>34.99€</td>
                </tr>
                <tr>
                  <td>100-200</td>
                  <td>33.39€</td>
                </tr>
                <tr>
                  <td>200+</td>
                  <td>32.19€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
