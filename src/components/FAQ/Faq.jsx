import React, { useState,useEffect } from 'react';
import AOS from 'aos';
import './Faq.css';

const faqs = [
  {
    question: "How long does it take to see results from your reputation management services?",
    answer: "Our timeline for delivering results varies depending on the nature of your online reputation issues. However, we strive to implement effective strategies promptly to ensure noticeable improvements within a reasonable timeframe."
  },
  {
    question: "Can you remove negative content from search engine?",
    answer: "While we cannot guarantee the complete removal of negative content, we employ various strategies, such as suppression and mitigation, to minimize its visibility and impact on your online reputation."
  },
  {
    question: "How do you handle online reviews on different platforms?",
    answer: "We have specialized teams dedicated to monitoring and managing online reviews across various platforms. We respond promptly to feedback, address concerns, and work towards resolving any issues to maintain a positive online reputation."
  },
  {
    question: "Is ORM only for businesses, or can individuals benefit?",
    answer: "Both businesses and individuals can benefit from ORM services. Whether you're a professional seeking to enhance your personal brand or a business aiming to protect its online image, our services are tailored to meet your specific needs."
  },
  {
    question: "How much do ORM Techies' services cost?",
    answer: "The cost of our services depends on various factors, including the scope of work, the complexity of your online reputation issues, and the duration of the engagement. Contact us today for a personalized quote based on your requirements."
  }
];

const Faq = () => {
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
  const [selectedFAQ, setSelectedFAQ] = useState(0); // Set default selected FAQ to the first one

  return (
    <div data-aos="fade-left"  className="faq-container">
      <h2 className="faq-heading">FAQs</h2>
      <div className="faq-content">
        <div  className="faq-questions">
          <ul>
            {faqs.map((faq, index) => (
              <li key={index}>
                <button
                  className={`faq-question ${selectedFAQ === index ? 'selected' : ''}`}
                  onClick={() => setSelectedFAQ(index)}
                >
                  {faq.question}
                  <span className="plus-sign">+</span>
                </button>
                <hr />
              </li>
            ))}
          </ul>
        </div>
        <div  className="faq-answer-container">
          {selectedFAQ !== null && (
            <>
              <h3>{faqs[selectedFAQ].question}</h3>
              <p>{faqs[selectedFAQ].answer}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
