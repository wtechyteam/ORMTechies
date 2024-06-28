// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "./Second.css";
// eslint-disable-next-line no-unused-vars
import { services } from "./data2";

const Second = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 200, // Offset (in pixels) from the original trigger point
      once: false, // Repeat animations every time they come into view
      easing: "ease", // Default easing for AOS animations
    });

    // Refresh AOS to ensure animations are correctly applied after updates
    AOS.refresh();
  });
  return (
    <div className="reputation-container innerWidth paddings">
      <div data-aos="fade-right" className="text-container">
        <h2 className="SecondHeading">
          {" "}
          Powered by the finest skills and advanced tech, to yield desired
          results
        </h2>
        <p className="secondPara">
          At ORMTechies, we are dedicated to protecting and improving your
          online reputation. Our team of experts can help you with customized
          solutions for your unique needs, whether you are a small business, a
          big company, or someone. If you need immediate help, please contact
          us. Our staff will respond quickly to address your concerns and
          provide the support you need. We care about your good name and are
          here to help you every step of the way.
        </p>
        <h2 className="SecondHeading">
          {" "}
          Upgrade your Online reputation today!
        </h2>
        <button className="quote-button">Get A Quote</button>
      </div>
      <div data-aos="fade-left" className="icons-container">
        <div className="icon hoverC">
          <img src="/assets/mouthshut-logo.png.png" alt="Mouthshut" />
          MouthShut
        </div>
        <div className="icon hoverC">
          <img src="/assets/Google-logo.png.png" alt="Google My Business" />
          My Business
        </div>
        <div className="icon hoverC">
          <img src="/assets/glassdoor-icon.svg.svg" alt="Glassdoor " />
          Glassdoor
        </div>
        <div className="icon hoverC">
          <img src="/assets/trustpilot-2.svg.svg" alt="Trustpilot" />
          Trustpilot
        </div>
        <div className="icon hoverC">
          <img src="/assets/indeed.svg.svg" alt="Indeed" />
          Indeed
        </div>
        <div className="icon hoverC">
          <img src="/assets/Img_margin.png" alt="AmbitionBox" />
          AmbitionBox
        </div>
        <div className="icon hoverC">
          <img src="/assets/tj.png.png" alt="TimesJob" />
          TimesJob
        </div>
        <div className="icon quoraD">
          <img src="/assets/quora-icon.svg (1).svg" alt="Quora" />
          Quora
        </div>
      </div>
    </div>
  );
};

export default Second;
