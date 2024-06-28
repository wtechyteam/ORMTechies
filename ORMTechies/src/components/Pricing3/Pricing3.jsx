/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react';
import AOS from 'aos';
import './Pricing.css'; // Import the CSS file for styling

const Pricing3 = () => {
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
          <img className="Repuservice-image" src="/assets/p5.png" alt="service" />
        </div>
        <div data-aos="fade-left" className="Repuservice-content">
          <h3 className='Repuheading1'>Online Reputation Management 
             </h3>
          <p>
          Let's grasp the essence of Online Reputation Management. ORM involves monitoring, influencing, and managing how your brand is perceived online. It's about proactively shaping public opinion and mitigating any negative feedback or content that could harm your reputation.
          </p>
        </div>
      </div>
      <div className="Repuservice original">
        <div data-aos="fade-left" className="Repuservice-image-container">
          <img className="Repuservice-image" src="/assets/p2.png" alt="service" />
        </div>
        <div  data-aos="fade-right" className="Repuservice-content">
          <h3 className='Repuheading1'>Customized Solutions for Every Budget
             </h3>
          <p>
          Our online reputation management services cost is transparent and competitive. We believe that quality ORM shouldn't break the bank, which is why we've crafted our pricing plans to be accessible to businesses of all sizes. From startups to established enterprises, we have a solution that's right for you. Plus, with flexible payment options, you can choose the package that aligns with your financial goals. 
          </p>
        </div>
      </div>
      <div className="Repuservice reverse">
        <div className="Repuservice-image-container">
          <img data-aos="fade-right" className="Repuservice-image" src="/assets/image51.png" alt="service" />
        </div>
        <div data-aos="fade-left" className="Repuservice-content">
          <h3 className='Repuheading1'>Understanding Our Pricing Structure
             </h3>
          <p>
          When it comes to online reputation management service pricing, transparency is key. That's why we outline our pricing structure clearly, so you know exactly what you're getting for your investment. Our packages are designed to be complete, covering everything from proactive reputation monitoring to strategic content development. With no hidden fees or surprises, you can trust that you're getting the best value for your money. 
          </p>
        </div>
      </div>
      <div className="Repuservice original">
        <div data-aos="fade-left" className="Repuservice-image-container">
        <img className="Repuservice-image" src="/assets/image52.png" alt="service" />
        </div>
        <div  data-aos="fade-right" className="Repuservice-content">
          <h3 className='Repuheading1'>The Cost of Online Reputation Management Services 
             </h3>
          <p>
          One of the primary concerns for individuals and businesses considering ORM is the cost involved. At ORM Techies, we understand the importance of affordability without compromising quality. Our pricing online reputation management services packages are designed to provide effective solutions at competitive rates.
          </p>
        </div>
      </div>
      <div className="Repuservice reverse">
        <div className="Repuservice-image-container">
          <img data-aos="fade-right" className="Repuservice-image" src="/assets/p1.png" alt="service" />
        </div>
        <div data-aos="fade-left" className="Repuservice-content">
          <h3 className='Repuheading1'>Factors Affecting Pricing 
             </h3>
          <p>
          Several factors influence the cost of ORM services, including the complexity of your online reputation issues, the scope of services required, and the duration of the engagement. Additionally, the size and nature of your business or organization play a significant role in- determining the pricing structure. 
          </p>
        </div>
      </div>

     
    </div>
  );
}

export default Pricing3;
