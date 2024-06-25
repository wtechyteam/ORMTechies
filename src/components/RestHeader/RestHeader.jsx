// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./RestHeader.css";
import "../Header/Header.css";
const RestHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle function to toggle menuOpen state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="whole">
      <div className=" h-container container restHeader">
        <Link to="/">
          <img className="logo" src="/assets/logo.png" alt="Logo" />
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        <div className={`h-menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" className={menuOpen ? "show" : "hide"}>
            Home
          </Link>
          <Link to="/aboutus" className={menuOpen ? "show" : "hide"}>
            About
          </Link>
          <Link to="/services" className={menuOpen ? "show" : "hide"}>
            Services
          </Link>
          <Link to="/" className={menuOpen ? "show" : "hide"}>
            Pricing
          </Link>
          <Link to="/contactus" className={menuOpen ? "show" : "hide"}>
            Contact
          </Link>
          <Link to="/" className={`buttonQ ${menuOpen ? "open" : ""}`}>
            Get a Quote
          </Link>
          {menuOpen && (
            <button className="close-menu" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestHeader;
