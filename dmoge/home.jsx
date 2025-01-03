// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import './style.css';

const foodImages = [
  'images/akara.jpeg', // Replace with actual image paths
  'images/edikikong.jpeg',
  'images/efo_riro.jpeg',
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Decena Eats</h1>
      <div className="slideshow">
        {foodImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Food ${index + 1}`}
            className={index === currentIndex ? 'active' : 'inactive'}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
