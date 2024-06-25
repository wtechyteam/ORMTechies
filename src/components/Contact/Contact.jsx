// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import AOS from 'aos';
import "./Contact.css";

function Contact() {
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
    <div className="containerContact paddings innerWidth">
      <div data-aos="fade-right" className="content2H">
        <p>
          With Our Online Reputation Management services achieve your digital
          reputation goals.
        </p>
        <p>Contact Us Now</p>
        <p className="subContent">
          Take control of your online reputation. We offer customized ORM
          services for individuals and businesses. Shape your digital narrative
          now!
        </p>
        <div className="form">
          <input
            className="contactForm1"
            type="text"
            placeholder=" Contact Number Here..."
          />
          <input className="contactForm" type="text" placeholder=" Comment" />
        </div>
        <button className="previous-design">Request a Call</button>
      </div>
      <div data-aos="fade-left" className="illustration">
        <img src="/assets/Image.png" alt="Illustration" />
      </div>
    </div>
  );
}

export default Contact;
