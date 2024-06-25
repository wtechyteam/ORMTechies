// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import './AboutTwo.css';

const AboutTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      offset: 200, // Offset (in pixels) from the original trigger point
      once: false, // Repeat animations every time they come into view
      easing: 'ease', // Default easing for AOS animations
    });

    // Refresh AOS to ensure animations are correctly applied after updates
    AOS.refresh();
  });
  return (
    <div className="aboutTwo paddings innerWidth">
      <div data-aos="fade-right" className="aboutTwoImageContainer">
        <img src="/assets/abouTwo.png" alt="Meeting" className="aboutTwoImage" />
      </div>
      <div data-aos="fade-left" className="aboutTwoContent">
        <h1 className="aboutTwoHeading">Empowering Your Online Image<br /><span className="different" >Meet ORM Techies</span></h1>
        <p className='paragraph'>
          At ORM Techies, we are the reputation experts and guardians of your online narrative. Driven by a passion for fairness and fueled by the best expertise, our mission is to help you take control of your online reputation. Whether you’re an individual or a business, we have the tools and know-how to boost your brand and safeguard your image.
        </p>
        <p>
          We understand the challenges you face online – the negative reviews, the unwarranted complaints, the malicious trolls. Our customized ORM services address your specific needs, including handling reputation management consultant complaints. We remove unfavorable posts on respected websites like Glassdoor and Trustpilot and craft personalized strategies to ensure your online reputation reflects the best of who you are.
        </p>
      </div>
    </div>
  );
};

export default AboutTwo;
