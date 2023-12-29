// Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Teaching App</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
