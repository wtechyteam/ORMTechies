import React, { useEffect } from 'react';
import AOS from 'aos';
import { services } from './data.js';
import './Cards.css'; // Import the CSS file for styling

const Cards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 200, // Offset (in pixels) from the original trigger point
      once: true, // Whether animation should happen only once
      easing: 'ease', // Default easing for AOS animations
    });
  }, []);
  return (
    <div data-aos="fade-down" className="who-we-serve paddings innerWidth ">
      <h2>Who We Serve?</h2>
      <p>
        At ORM Techies, we cater to a diverse clientele across various industries,
        including:
      </p>
      <div  className="services-grid1">
        {services.map((service, index) => (
          <div className="service-card1" key={index}>
            <img src={service.icon} alt={`${service.title} icon`} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
