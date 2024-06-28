/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react';
import AOS from 'aos';
import './ServiceComponent5.css'; // Import the CSS file for styling

const ServiceComponent4 = () => {
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
    <div className="service-component-five">
     
      <div className="service">
      
        <div data-aos="fade-left" className="service-content2">
          <h3 className='heading1'>Reputation Marketing </h3>
          <p>
          Your online reputation is one of your most valuable assets. Our reputation marketing services can help you leverage positive reviews and testimonials to attract more customers and grow your business. 
          </p>
          <h3 className='heading2'>Review Management</h3>
          <p>
          Online reviews can have a significant impact on your business's reputation and bottom line. Our review management services can help you monitor and respond to reviews across all major review sites, ensuring that your brand's reputation remains intact. 
          </p>
        </div>
        <div data-aos="fade-right" className="service-image-container">
          <img className="service-image" src="/assets/image18.png" alt="service" />
        </div>
      </div>
    </div>  
  );
}

export default ServiceComponent4;
