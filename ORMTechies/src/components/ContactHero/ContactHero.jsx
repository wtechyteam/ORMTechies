import React,{useEffect}from "react";
import AOS from 'aos';
import "./ContactHero.css";

const ContactHero = () => {
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
    <section className="contact-hero">
      <div className="containerContactHero">
        <div className="rowContactHero">
          <div  data-aos="fade-right" className="col-md-6ContactHero">
            <img
              src="/assets/image6.png"
              alt="phone"
              className="img-fluidContactHero"
            />
          </div>
          <div data-aos="fade-left" className="col-md-6ContactHero">
            <div className="contentContact">
              <h2 className="headingContact">
                CONNECT
                <span className="line2-container">
                  <img className="line2" src="/assets/Line.png" alt="line" />
                </span>
                <br />WITH US
              </h2>
              <p className="contactBody">
                If you have any questions about content removal, online reputation management or any services we provide, please feel free to get in touch. Removal services are risk-free, as we only charge for successful removals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
