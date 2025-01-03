import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import './style.css';

function App() {
  return (

    <CartProvider>
      <Router>
        <div className="App">
          
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
