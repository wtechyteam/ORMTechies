import React, { useEffect } from 'react';
import AOS from 'aos';
import "./Companies.css";

const Companies = () => {
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
    <section className="c-wrapper">
      <div data-aos="fade-left" className="paddings innerWidth flexCenter c-container">
        <img src="/assets/slack.png" alt="slack" />
        <img className="image2" src="/assets/amazon.png" alt="amazon" />
        <img src="/assets/logitech.png" alt="logitech" />
        <img src="/assets/google.png" alt="google" />
        <img src="/assets/facebook.png" alt="facebook" />
      </div>
    </section>
  );
};

export default Companies;
