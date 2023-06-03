import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { products } from "./productData";
import image from "../images/sweatshirt.png";
import "../App.css";

const ProductDetails = () => {
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
    const selectedProduct = products.find((product) => product.id === 1); // Update the product ID according to your needs
    if (selectedProduct) {
      selectedProduct.size = selectedSize;
      selectedProduct.quantity = selectedQuantity;
      selectedProduct.color = selectedColor;
      addToCart(selectedProduct);
    }
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

  const addToCart = (product) => {
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
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
          </Carousel>
        </div>
        <div className="detail-content">
          <h2 className="title">Product Name</h2>
          <div className="details">
            <div className="size">
              <label htmlFor="size">Size:</label>
              <select
                name="size"
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div className="quantity">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                max="200"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
              />
            </div>
            <div className="color">
              <label htmlFor="color">Color:</label>
              <div className="color-options">
                <div
                  className={`color-option ${selectedColor === "Black" ? "active" : ""}`}
                  style={{ background: "black" }}
                  onClick={() => handleColorChange("Black")}
                ></div>
                <div
                  className={`color-option ${selectedColor === "White" ? "active" : ""}`}
                  style={{ background: "white" }}
                  onClick={() => handleColorChange("White")}
                ></div>
                <div
                  className={`color-option ${selectedColor === "Blue" ? "active" : ""}`}
                  style={{ background: "blue" }}
                  onClick={() => handleColorChange("Blue")}
                ></div>
              </div>
            </div>
          </div>
          <div className="price">
            <label htmlFor="price">Price:</label>
            <span id="price">${calculatePrice()}</span>
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <Link to="/wishlist" className="go-to-cart-link">
            Go to Cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
