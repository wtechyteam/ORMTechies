import React, { useEffect } from 'react';
import AOS from 'aos';
import './Guarantee.css';

const Guarantee = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 200, // Offset (in pixels) from the original trigger point
      once: false, // Repeat animations every time they come into view
      easing: 'ease', // Default easing for AOS animations
    });

    // Refresh AOS to ensure animations are correctly applied after updates
    AOS.refresh();
  });
  return (
   <div data-aos="fade-right"
    className="gContainer paddings ">
    <div className="leftG">
    <img className="imageG" src="/assets/guarantee.png" alt="guarantee" />
    </div>
    <div className="rightG">
    <p className="headG">Trust in ORM Techies: Advanced technology, an expert team, and real results are guaranteed.</p>
    <p className="SubContentG">Pay only for successful removals.</p>
    </div>
   </div>
  );
};

export default Guarantee;