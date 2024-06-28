// eslint-disable-next-line no-unused-vars
import React,{useEffect}from "react";
import AOS from 'aos';
import "./AboutHero.css";

const AboutHero = () => {
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
    <section className="about-hero">
      <div className="containerContactHero">
        <div data-aos="fade-right"  className="rowContactHero">
        <div className="col-md-6ContactHero">
            <div   className="contentContact">
              <h2 className="headingContact">
              <img className="cloud" src="/assets/cloud.svg"/>
                WE ARE
                <span className="line3-container">
                  <img className="line3" src="/assets/Line.png" alt="line" />
                </span>
                <br /> ORM's TECHIES
              </h2>
              <img className="threeDots" src="/assets/Design.svg"/>
              <p className="contactBody">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content h
              
              <button className="quote-button2">Request A Call</button>
              </p>
            </div>
          </div>
          <div className="col-md-6ContactHero">
            <img
              src="/assets/aboutHero.png"
              alt="phone"
              className="img-fluidAboutHero"
            />
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
