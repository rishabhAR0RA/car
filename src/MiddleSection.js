import React from 'react';
import './MiddleSection.css'; 

const MiddleSection = () => {
  return (
    <div className="middle-section">
      <h1>RENT A CAR WITH YOUR <span className='brand-sub'>LIFESTYLE</span></h1>
      <p>
        Jonson has been present since 2024, providing luxury quality cars, and
        also providing excellent service is our goal. We will keep your trust in
        us.
      </p>
      <div className="buttons-container">
        <button className="booking-button">Open Catalog</button>
        <button className="booking-button-inactive">Contact Sales</button>
      </div>
    </div>
  );
};

export default MiddleSection;
