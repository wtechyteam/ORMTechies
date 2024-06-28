// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react';
import AOS from 'aos';
import './ServiceSectionTwo.css'; 
const ServiceSectionTwo = () => {
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
    <div  className="services-section-two paddings innerWidth">
       
        <h2>Reclaim Your Online Reputation With ORM Techies</h2>
        <img className="seviceSectionDisplay" src="public/assets/serviceSectionTwo.png" alt="serviceSectionTwo"/>
  
      <div data-aos="fade-right" >
      <p>
        Imagine you’re meeting someone new. They might Google your name before shaking your hand. What kind of impression do you want them to get?
      </p>
      <p>
        The digital landscape is crowded with reputation companies. However, at ORM Techies, we go beyond simply managing your online presence. We can help ensure that the first impression you make online is positive, right from the start.
      </p>
      <p>
        In a world where perception is reality, managing your online reputation is important. Negative online content can tarnish your image and affect your opportunities. Our complete suite of ORM services ensures that you are in control of how you are perceived online. Whether you’re facing reputation issues on search engines, social media platforms, or review websites, we have the expertise to mitigate negative impacts and amplify positive aspects of your brand.
      </p>
      </div>
      
    </div>
  );
}

export default ServiceSectionTwo;
