import React, { useState,useEffect } from 'react';
import AOS from 'aos';
import './Icons.css';
import { iconData } from './IconData';

const Icons = ({ onSelect }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (index) => {
    setSelectedIcon(index);
    onSelect(index);
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

  return (
    <div data-aos="fade-left" className="icon-containerH innerWidth paddings">
      {iconData.map((item, index) => (
        <div
          className={`icon-itemH ${selectedIcon === index ? 'selected' : ''}`}
          key={index}
          onClick={() => handleIconClick(index)}
        >
          <img src={item.imgSrc} alt={item.label} className="icon-image" />
          <span className="icon-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Icons;
