import React, { useEffect } from 'react';
import AOS from 'aos';
import './Transparency.css';

const Transparency = ({ data }) => {

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
  if (!data) return null;

  return (
    <div data-aos="fade-left" className="containerTransparency innerWidth">
      <div className="left-side">
        <h1 className='headingTransparency'>{data.heading}</h1>
        <p className='transparencyContent'>
          {data.content}
        </p>
        <button className="remove-button">
          {data.buttonText}{' '}
          <span className="arrow">→</span>
        </button>
        <div className="stats">
          {data.stats.map((stat, index) => (
            <div className="stat" key={index}>
              <span className="iconContent">
                <img src={stat.icon} alt="icon" />
              </span>
              <div className="days">
                <span className="value">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="fade-left" className="right-side">
        <div className="rating">
          <img src={data.image} alt="rating" />
        </div>
      </div>
    </div>
  );
};

export default Transparency;
