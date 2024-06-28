/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react';
import AOS from 'aos';
import './ServiceFinal.css'; // Import the CSS file for styling

const ServiceFinal = () => {
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

<>



    <div data-aos="fade-right" className="service-component-four finalService">
      <h2>Why Choose ORM Techies?</h2>
      <p className="description">
      At ORM Techies, we understand the importance of a positive online reputation. With years of experience in digital reputation management, we have the expertise and resources to help you achieve your goals.
      </p>

      <div className="service2">
        <div data-aos="fade-left" className="service-image-container">
          <img className="service-image2" src="public/assets/serviceFinal.png" alt="service" />
        </div>
        <div className="service-content">
          <h3 className='heading1'>Here's why you should choose us:
          </h3>
          <p>
          1. Expertise: Our team of skilled professionals specializes in all aspects of reputation management, ensuring that you receive the highest quality service.
          </p>
           <p>
          2. Customized Solutions: We understand that every client is unique, so we personalized our services to meet your specific needs and objectives.
          <p>
          3. Complete Approach: From personal branding to review management, we offer a comprehensive suite of services to address all your reputation management needs.
          </p>
          </p>
        </div>
        <div data-aos="fade-left">
        <p className="description">
        No matter what industry you're in, our business reputation services can help you protect and enhance your online reputation, driving growth and success for your business. 
      </p>
      <p className="description">
      Don't let a negative online reputation hold your business back. Learn more about our reputation management services and how we can help you take control of your online presence. Get Started Today! 
      </p>
          </div>
       

        
      </div>
    </div>  
    </>
  );
}

export default ServiceFinal;
