// import { HashLink as Link } from "react-router-hash-link";
// import burger2 from "../pictures/burger-icon.png";
// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="title">
//         <div className="nav-title">
//           <h1>MARLEY'S</h1>
//           <img src={burger2} alt="" />
//         </div>
//         <p>Burgers & More</p>
//       </div>
//       <div className="nav-btns">
//         <Link to="#about" className="btn" smooth>
//           About Us
//         </Link>
//         <Link to="#menu" className="btn" smooth>
//           Our Menu
//         </Link>
//         <Link to="#location" smooth className="btn">
//           Location
//         </Link>
//         <Link to="#contact" smooth className="btn">
//           Contact
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import burger2 from "../pictures/burger-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // submenu toggle for mobile

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="title">
        <div className="nav-title">
          <h1>MARLEY'S</h1>
          <img src={burger2} alt="" />
        </div>
        <p>Grilling Station</p>
      </div>

      {/* Desktop Nav */}
      <div className="nav-links">
        <Link to="#about" smooth className="nav-link">
          About Us
        </Link>
        <div className="nav-item has-submenu">
          <span className="nav-link">Our Menu ▾</span>
          <div className="submenu">
            <Link to="#burgers" smooth className="submenu-link">
              BURGERS
            </Link>
            <Link to="#sandwish" smooth className="submenu-link">
              SANDWISHES
            </Link>
            <Link to="#fries" smooth className="submenu-link">
              FRIES
            </Link>
            <Link to="#extra" smooth className="submenu-link">
              EXTRA
            </Link>
            <Link to="#drinks" smooth className="submenu-link">
              DRINKS
            </Link>
          </div>
        </div>
        <Link to="#location" smooth className="nav-link">
          Location
        </Link>
        <Link to="#contact" smooth className="nav-link">
          Contact
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-item">
          <span className="mobile-link" onClick={toggleSubMenu}>
            Our Menu ▾
          </span>
          {isMenuOpen && (
            <div className="mobile-submenu">
              <Link
                to="#burgers"
                smooth
                className="mobile-sub-link"
                onClick={toggleMenu}
              >
                Burgers
              </Link>
              <Link
                to="#sandwish"
                smooth
                className="mobile-sub-link"
                onClick={toggleMenu}
              >
                SANDWISHES
              </Link>
              <Link
                to="#fries"
                smooth
                className="mobile-sub-link"
                onClick={toggleMenu}
              >
                FRIES
              </Link>
              <Link
                to="#extra"
                smooth
                className="mobile-sub-link"
                onClick={toggleMenu}
              >
                Extra
              </Link>
              <Link
                to="#drinks"
                smooth
                className="mobile-sub-link"
                onClick={toggleMenu}
              >
                DRINKS
              </Link>
            </div>
          )}
        </div>

        <Link
          to="#location"
          smooth
          className="mobile-link"
          onClick={toggleMenu}
        >
          Location
        </Link>
        <Link to="#contact" smooth className="mobile-link" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
