import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand"><span className='brand-sub'>JON</span>SON</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Cars</li>
        <li>How it works</li>
        <li>Rental Location</li>
      </ul>
      <button className="booking-button">Booking Car</button>
    </nav>
  );
};

export default Navbar;
