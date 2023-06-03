import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const removeFromCart = (itemId) => {
    const updatedCartItems = [...cartItems];
    const index = updatedCartItems.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
      sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePay = () => {
    // Add your payment logic here
    console.log('Payment processed!');
  };

  return (
    <div className="cart-page">
      <h1 className="page-title">Cart</h1>
      <div className="cart-container">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))}
        <h4 className="total">Total: ${calculateTotal()}</h4>
        <button className="checkout-button" onClick={openModal}>
          Checkout
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Checkout Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Checkout</h2>
        <p>Place your order.</p>
        <h3>Products:</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <strong>Name:</strong> {item.name}
              <br />
              <strong>Price:</strong> ${item.price}
            </li>
          ))}
        </ul>
        <button className="pay-button" onClick={handlePay}>
          Pay
        </button>
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default CartPage;
