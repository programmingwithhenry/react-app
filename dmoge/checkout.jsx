import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Import the CartContext
import './car.css';
function Checkout() {
  const { cartItems, clearCart } = useCart(); // Get the cart items and clearCart function from the context
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method is card

  // Calculate the total price of the items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  // Handle form submission (just logging the data for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\nName: ${name}\nAddress: ${address}\nPayment: ${paymentMethod}`);
    
    // Clear the cart after successful checkout
    clearCart();
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart before checking out.</p>
      ) : (
        <>
          <div className="checkout-cart-items">
            <h2>Your Order</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} className="checkout-item-image" />
                <div className="checkout-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-form">
            <h2>Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Shipping Address:</label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="payment">Payment Method:</label>
                <select
                  id="payment"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cash">Cash on Delivery</option>
                </select>
              </div>

              <div className="form-group">
                <h3>Total: ${totalPrice}</h3>
              </div>

              <button type="submit" className="checkout-button">Place Order</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
