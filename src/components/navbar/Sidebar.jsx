import React, { useState, useEffect } from "react";
import "../../styles/sidebar.css";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className="sidebarContainer">
      <button onClick={handleMenu} className="hamburger">
        <CiMenuBurger className="icon" />
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={handleMenu} className="close">
          <AiOutlineClose className="icon" />
        </button>
        {/* <div className="services">
          <h4>Services</h4>

          <a href="/services?option=concrete">Concrete Repair</a>

          <a href="/services?option=driveways">Driveways</a>

          <a href="/services?option=sidewalks">Sidewalks</a>

          <a href="/services?option=decks">Decks</a>
        </div> */}
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about-us">About Us</a>
        <a href="/contact-us">Contact Us</a>
      </div>
    </div>
  );
};

export default Sidebar;
