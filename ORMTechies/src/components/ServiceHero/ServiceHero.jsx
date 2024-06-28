/* eslint-disable react/no-unescaped-entities */


// eslint-disable-next-line no-unused-vars
import React,{useEffect}from "react";
import AOS from 'aos';
import './ServiceHero.css'

const ServiceHero = () => {
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
    <section className="servicesHero">
    <div className="containerServiceHero">
      <div className="rowServiceHero">
        <div data-aos="fade-right" className="col-md-6ServiceHero">
          <img
            src="/assets/img.png"
            alt="phone"
            className="img-fluidServiceHero"
          />
        </div>
        <div  data-aos="fade-left" className="col-md-6ServiceHero">
          <div className="contentService">
            <h2 className="headingService">
            Build Your Brand with Complete Reputation Management Services 
                  </h2>
            <p className="serviceBody">
              If you have any questions about content removal, online reputation management or any services we provide, please feel free to get in touch. Removal services are risk-free, as we only charge for successful removals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ServiceHero