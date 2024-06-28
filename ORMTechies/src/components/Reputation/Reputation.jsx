/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react';
import AOS from 'aos';
import './Reputation.css'; // Import the CSS file for styling

const Reputation = () => {
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
    <div className="reputation-component">
     
      

      
      <div className="Repuservice reverse">
        <div data-aos="fade-right" className="Repuservice-image-container">
          <img className="Repuservice-image" src="/assets/trust.png" alt="service" />
        </div>
        <div data-aos="fade-left" className="Repuservice-content">
          <h3 className='Repuheading1'>Building Trust and Credibility
             </h3>
          <p>
          In today's digital world, trust is key. Actively managing your online reputation helps build trust and credibility with your audience. When people see positive reviews and content about your brand, they're more likely to choose you over competitors. It's all about shaping a positive perception that fosters customer confidence and loyalty, driving business success. 
          </p>
        </div>
      </div>
      <div className="Repuservice original">
        <div data-aos="fade-left" className="Repuservice-image-container">
          <img className="Repuservice-image" src="/assets/calender.png" alt="service" />
        </div>
        <div  data-aos="fade-right" className="Repuservice-content">
          <h3 className='Repuheading1'>Enhancing Visibility and Brand Awareness
             </h3>
          <p>
          A positive online reputation can also help enhance your visibility and brand awareness. When potential customers search for your business online, what they find can have a significant impact on their perception of your brand. With internet reputation management services, you can ensure that your brand is well-represented across all digital channels, maximizing your visibility and attracting more customers to your business. 
          </p>
        </div>
      </div>
      <div className="Repuservice reverse">
        <div className="Repuservice-image-container">
          <img data-aos="fade-right" className="Repuservice-image" src="/assets/cake.png" alt="service" />
        </div>
        <div data-aos="fade-left" className="Repuservice-content">
          <h3 className='Repuheading1'>Mitigating Negative Feedback 
             </h3>
          <p>
          Negative feedback is inevitable in today's interconnected world. However, how you respond to that feedback can make all the difference. Reputation services can help you effectively address and mitigate negative feedback, turning potentially damaging situations into opportunities for growth and improvement.
          </p>
        </div>
      </div>

     
    </div>
  );
}

export default Reputation;
