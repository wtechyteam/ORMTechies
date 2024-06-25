import React, { useEffect } from 'react';
import AOS from 'aos';
import './Market.css';
const Market = () => {
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
    <div className="container3 innerWidth paddings" >
      <div data-aos="fade-right" className="image-container3">
        <img src="/assets/sectionImage.png" alt="Google" />
      </div>
      <div data-aos="fade-left" className="haeding3">
        <h1 className="heading31">What Sets ORM Techies Apart?</h1>
        <p className='heading32'>
          At ORM Techies, we pride ourselves on offering complete
          Online Reputation Management services that go beyond mere
          monitoring.
        </ p>
        <p className='heading33'>
          Our team of experts is dedicated to crafting personalized
          strategies that address the specific needs of each client. Whether
          you're an individual seeking to improve your personal brand or a
          business aiming to safeguard its reputation, ORM Techies has got
          you covered.
        </p>
        <p className="heading34"> 
          Our dedication to excellence has earned us recognition and awards
          within the industry. As leaders in the field of ORM, we continually
          strive to set new standards of excellence and innovation.
        </p>
        <button className="call">Request A Call</button>
      </div>
      
    </div>
  );
};

export default Market;