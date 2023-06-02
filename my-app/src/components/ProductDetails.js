import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import image from "../images/sweatshirt.png";
import "../App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const ProductDetails = ({ addToCart }) => {
  const [selectedSize, setSelectedSize] = useState("Small");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [price, setPrice] = useState(28);

  useEffect(() => {
    console.log("Selected Size:", selectedSize);
  }, [selectedSize]);

  useEffect(() => {
    console.log("Selected Quantity:", selectedQuantity);
    updatePrice();
  }, [selectedQuantity]);

  useEffect(() => {
    console.log("Selected Color:", selectedColor);
  }, [selectedColor]);

  const navigate = useNavigate();

  const handleAddToCart = () => {
    const product = {
      name: "T-Shirt",
      price: calculatePrice(),
      size: selectedSize,
      quantity: selectedQuantity,
      color: selectedColor,
    };
    addDoc(collection(db, "products"), product)
      .then((docRef) => {
        console.log("Product added with ID:", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });

    addToCart(product); // Call the addToCart function from props
    navigate("/wishlist");
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const updatePrice = () => {
    if (selectedQuantity >= 1 && selectedQuantity <= 4) {
      setPrice(47.99);
    } else if (selectedQuantity >= 5 && selectedQuantity <= 19) {
      setPrice(38.99);
    } else if (selectedQuantity >= 20 && selectedQuantity <= 49) {
      setPrice(36.89);
    } else if (selectedQuantity >= 50 && selectedQuantity <= 99) {
      setPrice(34.99);
    } else if (selectedQuantity >= 100 && selectedQuantity <= 200) {
      setPrice(33.39);
    } else if (selectedQuantity >= 200) {
      setPrice(32.19);
    }
  };

  const calculatePrice = () => {
    return price * selectedQuantity;
  };

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
          <p>{price}€</p>
          <p>Size:</p>
          <div className="size-buttons">
            <button
              onClick={() => setSelectedSize("Small")}
              className={`size-button ${selectedSize === "Small" ? "selected" : ""}`}
            >
              Small
            </button>
            <button
              onClick={() => setSelectedSize("Medium")}
              className={`size-button ${selectedSize === "Medium" ? "selected" : ""}`}
            >
              Medium
            </button>
            <button
              onClick={() => setSelectedSize("Large")}
              className={`size-button ${selectedSize === "Large" ? "selected" : ""}`}
            >
              Large
            </button>
            <button
              onClick={() => setSelectedSize("XL")}
              className={`size-button ${selectedSize === "XL" ? "selected" : ""}`}
            >
              XL
            </button>
            <button
              onClick={() => setSelectedSize("2XL")}
              className={`size-button ${selectedSize === "2XL" ? "selected" : ""}`}
            >
              2XL
            </button>
            <button
              onClick={() => setSelectedSize("3XL")}
              className={`size-button ${selectedSize === "3XL" ? "selected" : ""}`}
            >
              3XL
            </button>
          </div>
          <div className="color">
            <p>Color:</p>
            <div className="color-boxes">
              <div
                className={`color-box ${selectedColor === "Black" ? "selected" : ""}`}
                style={{ backgroundColor: "black" }}
                onClick={() => handleColorChange("Black")}
              ></div>
              <div
                className={`color-box ${selectedColor === "Red" ? "selected" : ""}`}
                style={{ backgroundColor: "red" }}
                onClick={() => handleColorChange("Red")}
              ></div>
              <div
                className={`color-box ${selectedColor === "Blue" ? "selected" : ""}`}
                style={{ backgroundColor: "blue" }}
                onClick={() => handleColorChange("Blue")}
              ></div>
              <div
                className={`color-box ${selectedColor === "Green" ? "selected" : ""}`}
                style={{ backgroundColor: "green" }}
                onClick={() => handleColorChange("Green")}
              ></div>
              <div
                className={`color-box ${selectedColor === "Yellow" ? "selected" : ""}`}
                style={{ backgroundColor: "yellow" }}
                onClick={() => handleColorChange("Yellow")}
              ></div>
            </div>
          </div>
          <div className="qty-button">
            <button onClick={() => setSelectedQuantity(selectedQuantity - 1)}>
              -
            </button>
            <button>{selectedQuantity}</button>
            <button onClick={() => setSelectedQuantity(selectedQuantity + 1)}>
              +
            </button>
          </div>
          <div className="add-cart">
            <button onClick={handleAddToCart}>Add to Cart</button>
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
