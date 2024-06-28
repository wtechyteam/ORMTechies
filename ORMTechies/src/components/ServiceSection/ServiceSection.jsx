// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "./ServiceSection.css";

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      offset: 200, // Offset (in pixels) from the original trigger point
      once: false, // Repeat animations every time they come into view
      easing: "ease", // Default easing for AOS animations
    });

    // Refresh AOS to ensure animations are correctly applied after updates
    AOS.refresh();
  });
  return (
    <div className="serviceTwo  ">
      <div data-aos="fade-right" className="serviceTwoImageContainer">
        <img src="/assets/img7.png" alt="Meeting" className="serviceTwoImage" />
      </div>
      <div data-aos="fade-left" className="serviceTwoContent">
        <h1 className="serviceTwoHeading">
          
          The Benefits of Reputation Management Services
        </h1>
      </div>
    </div>
  );
};

export default ServiceSection;
