// Navbar.js
import React from 'react';
//import './Navbar.css'; // Import CSS file for styling
import currencyImg from "../images/currency.png"

function Navbar() {
  return (
    <nav className="navbar">
        <img src={currencyImg} alt="Logo" className="icon"/>
        <div className='title'><h1 >xChange</h1></div>
    </nav>
  );
}

export default Navbar;
