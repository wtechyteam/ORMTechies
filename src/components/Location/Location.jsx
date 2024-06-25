import React, { useEffect } from 'react';
import AOS from 'aos';
import './Location.css';

const Location = () => {

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
    <div data-aos="fade-right" className="containerLocation">
      <div className="cardLocation">
        <div className="iconLocation"><img src="/assets/phone.png" alt="Phone icon" /></div>
        <div className="titleLocation">Phone</div>
        <div className="textLocation">1300 031 936</div>
      </div>
      <div className="cardLocation">
        <div className="iconLocation"><img src="/assets/address.png" alt="Address icon" /></div>
        <div className="titleLocation">Address</div>
        <div className="textLocation">
          abc, Street no. 45, <br />
          Austin, USA-123456
        </div>
      </div>
      <div className="cardLocation">
        <div className="iconLocation"><img src="/assets/mail.png" alt="Mail icon" /></div>
        <div className="titleLocation">Mail</div>
        <div className="textLocation">info@ormtechies.com</div>
      </div>
    </div>
  );
};

export default Location;
