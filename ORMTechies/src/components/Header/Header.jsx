import React, { useState,useEffect } from 'react';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css';
import './Form.css';
import RestHeader from '../RestHeader/RestHeader';

const Header = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    description: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };
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

  return (<>

<RestHeader />
    <div  className="h-wrapper">
  
      <div data-aos="fade-right"className="container flexCenter">
        <div className="row">
          <div className="col-md-12">
            <div className="main-content">
              <h2 className='mainHeading'>Your Trusted Partner in<br />Online Reputation Management</h2>
              <img className="line" src="/assets/line.svg" alt="line" />
              <p className='content'>Take control of your online reputation. We offer customized ORM <br />services for individuals and businesses. Shape your digital narrative <br />now!</p>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="request-form">
        <div data-aos="fade-right" className="form-row">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div data-aos="fade-right" className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div data-aos="fade-right"  className="form-row">
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div data-aos="fade-right" className="form-row"   >
        <button className="submit" type="submit">Request A Call</button>
          </div>
      
      </form>
    </div>
  </>
    
  );
}

export default Header;
