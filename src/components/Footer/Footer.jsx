  import React from 'react';
  import './Footer.css'; // Import the CSS file

  const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="logo">
                <img src="/assets/logo.png" alt="ORM Techies Logo" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="services">
                <h3>We Remove From</h3>
                <ul>
                  <li>Google @ Reviews</li>
                  <li>Glassdoor</li>
                  <li>RateMDs</li>
                  <li>Trip Advisor</li>
                  <li>Facebook</li>
                  <li>Google Search Results</li>
                  <li>And More</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="services">
                <h3>Our Services</h3>
                <ul>
                  <li>Reputation Management</li>
                  <li>AMPLIFY Reviews</li>
                  <li>Reputation Monitoring</li>
                  <li>Fake Review Removal</li>
                  
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="about">
                <h3>About</h3>
                <ul>
                  <li>About ORM </li>
                  <li>Contact</li>
                  <li>Careers</li>
                  <li>In The Media</li>
                  <li>Reviews</li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="col-md-12 text-center">
              <div className="followUs">
                <p className='textFollow'>Follow us:</p>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="social-media">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-upwork"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-md-12 text-center contact">
              <div className="contact">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">       info@ormtechies.com</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;