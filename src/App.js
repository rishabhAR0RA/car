import React from 'react';
import Navbar from './Navbar';
import MiddleSection from './MiddleSection';
import AboutUs from './AboutUs';
import './firstpage.css'
import './MiddleSection.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <MiddleSection />
      <AboutUs />
    </div>
  );
};

export default App;
