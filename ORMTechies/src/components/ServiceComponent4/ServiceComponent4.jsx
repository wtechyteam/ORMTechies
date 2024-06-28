/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react';
import AOS from 'aos';
import './ServiceComponent4.css'; // Import the CSS file for styling

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
    <div data-aos="fade-right" className="service-component-four">
      <h2>Our Reputation Management Services</h2>
      <p className="description">
        Our online management company offers a complete range of reputation management services to help individuals and businesses protect and enhance their online reputations.
      </p>

      <div className="service">
        <div data-aos="fade-left" className="service-image-container">
          <img className="service-image" src="/assets/serviceComponent4.png" alt="service" />
        </div>
        <div className="service-content">
          <h3 className='heading1'>Reputation Repair Services</h3>
          <p>
            If you're online, our reputation repair services can help. Our team of experts will work tirelessly to remove or suppress negative content, ensuring that your online reputation is restored to its former glory.
          </p>
          <h3 className='heading2'>Digital Reputation Management</h3>
          <p>
            In today’s digital world, your online reputation is more important than ever before. Our digital reputation management services are designed to help you monitor, manage, and enhance your online presence across all digital channels, from social media to search engines.
          </p>
        </div>
        


        
      </div>
    </div>  
  );
}

export default ServiceComponent4;
