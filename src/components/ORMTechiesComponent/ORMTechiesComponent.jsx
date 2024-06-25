import React, { useEffect,useState } from 'react';
import AOS from 'aos';
import "./ORMTechiesComponent.css";

const services = [
  {
    title: "Personal Branding",
    icon: "/assets/personalBranding.png",
    description:
      "Building a strong personal brand is essential in today's competitive landscape. Our experts will work closely with you to develop a personalized personal branding strategy that showcases your strengths and values, positioning you as a reputable figure in your field.",
  },
  {
    title: "Reputation Repair",
    icon: "/assets/reputationRepair.png",
    description:
      "Have negative content tarnished your online reputation? Our reputation repair services are designed to mitigate the damage caused by negative content, helping you rebuild trust and credibility.",
  },
  {
    title: "Reputation Management",
    icon: "/assets/reputation-management.png",
    description:
      "Maintaining a positive online reputation requires ongoing effort and vigilance. Our reputation management services involve monitoring your digital footprint across various platforms, responding to reviews, and managing your online presence effectively.",
  },
  {
    title: "Review Management",
    icon: "/assets/reviewManagement.png",
    description:
      "Online reviews can significantly impact your reputation. Our review management services cover a wide range of platforms like Glassdoor, Yelp, Google My Business, and more, helping you manage your online reputation effectively.",
  },
];

function ServiceCard({ title, icon, description }) {
  return (
    <div data-aos="fade-right" className="service-cardQ">
      <div className="question">
        <div className="icon-containerORM">
          <img src={icon}></img>
        </div>
        <div className="question2">
          <h3 className="titleService">{title}</h3>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ContentCard() {
  return (
    <div data-aos="fade-left" className="right-sideORMimg">
      <img src="/assets/tab1.png" alt="Content" />
    </div>
  );
}

function ORMTechiesComponent() {
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
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div  className="app-container paddings innerWidth">
      <h1 className="techy">What We Do?</h1>
      <p className="techySub">
        At ORM Techies, we specialize in providing exceptional online
        reputation management services. Whether you're an individual seeking to
        raise your personal brand or a business aiming to safeguard its online
        image, we've got you covered.
      </p>
      <div className="content-area">
        <div className="services-area">
          {services.map((service) => (
            <div
              key={service.title}
              className={`service-button ${
                service.title === activeService.title
                  ? "service-button-active"
                  : ""
              }`}
              onClick={() => setActiveService(service)}
            >
              <ServiceCard
                className="actualCard"
                title={service.title}
                icon={service.icon}
                description={service.description}
              />
            </div>
          ))}
        </div>
        <div className="right-sideORM">
          <ContentCard />
          <button className="learn-more-button">Learn More →</button>
        </div>
      </div>
    </div>
  );
}

export default ORMTechiesComponent;