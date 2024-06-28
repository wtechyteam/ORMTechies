/* eslint-disable react/no-unescaped-entities */


// eslint-disable-next-line no-unused-vars
import React,{useEffect}from "react";
import AOS from 'aos';
import './PricingHero.css'

const PricingHero = () => {
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
            src="/assets/machine.png"
            alt="phone"
            className="img-fluidServiceHero2"
          />
        </div>
        <div  data-aos="fade-left" className="col-md-6ServiceHero">
          <div className="contentService">
            <h2 className="headingService">
            Manage Your Brand's Online Reputation with ORM Techies Custom Solutions
                  </h2>
            <p className="serviceBody2">
            Transforming your brand's online presence with ORM Techies' customized Online Reputation Management services. Affordable packages tailored to suit diverse needs and budgets.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PricingHero