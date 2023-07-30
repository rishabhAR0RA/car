import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="left">
        <h6>About Us</h6>
        <h4>OPERATING SINCE 2018 MAKES JONSON THE BEST RENTAL CAR</h4>
        <p>
          A car rental, car rental, or car rental agency is a company that
          rents out cars for short periods of time, generally from a few hours
          to a few weeks. It is often set up with many local branches allowing
          the user to return the vehicle to a different location.
        </p>
        <div className="features">
          <ul>
            <li>
              <img src="/image/checked.png" alt="Icon 1" className="checked" />
              Available Mobile Version
            </li>
            <li>
              <img src="/image/checked.png" alt="Icon 1" className="checked" /> Fast & Easy for Booking
            </li>
            <li>
              <img src="/image/checked.png" alt="Icon 1" className="checked" /> Easy to Use
            </li>
            <li>
              <img src="/image/checked.png" alt="Icon 1" className="checked" /> Free Shipping
            </li>
          </ul>
        </div>
        <div className="brand-logos-container">
            <div className="brand-logos">
                <img src="/image/brand1.svg" alt="Brand 1" />
                <img src="/image/brand2.svg" alt="Brand 2" />
                <img src="/image/brand3.svg" alt="Brand 3" />
                <img src="/image/brand4.svg" alt="Brand 4" />
                <img src="/image/brand5.svg" alt="Brand 5" />
            </div>
        </div>
      </div>
      <div className="right">
        <div className='car-img'></div>
      </div>
    </div>
  );
};

export default AboutUs;
