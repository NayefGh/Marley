import React, { useState, useRef, useEffect } from "react";
import menu from "../pictures/menu.png";
import { HashLink as Link } from "react-router-hash-link";
import close from "../pictures/close.png";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <img
        src={isOpen ? close : menu}
        alt="Menu Icon"
        className={`dropdown-btn ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      />

      <div className={`dropdown-list ${isOpen ? "show" : ""}`}>
        <Link to="#about" className="dropdown-item" smooth>
          About Us
        </Link>
        <Link to="#menu" className="dropdown-item" smooth>
          Menu
        </Link>
        <Link to="#location" className="dropdown-item" smooth>
          Location
        </Link>
        <Link to="#contact" className="dropdown-item" smooth>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
