/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import "./AboutThree.css";

const AboutTwo = () => {
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
    <div className="aboutTwo paddings innerWidth">
      <div data-aos="fade-right" className="aboutTwoContent">
        <h1 className="aboutThreeHeading">
          We Build Your
          <br />
          <span className="different">Online Success</span>
        </h1>
        <p className="paragraph">
          We're more than just a reputation management company; we are your
          partners in success. Our dedication to excellence has earned us
          recognition within the industry, including great reputation management
          consultants reviews, we constantly pushing the boundaries of ORM to
          deliver real results. Trust our expertise and technology to positively
          impact your online reputation, always working in your best interests.
        </p>
        <p>
          Your online reputation matters. Trust ORM Techies, your reputation
          experts, to shape your digital narrative. Ready to upgrade? Contact us
          for a free consultation and achieve your digital goals. Join us and
          let's build a better online future together.
        </p>
      </div>
      <div data-aos="fade-left" className="aboutThreeImageContainer">
        <img src="/assets/about3.png" alt="Meeting" className="aboutThreeImage" />
      </div>
    </div>
  );
};

export default AboutTwo;
