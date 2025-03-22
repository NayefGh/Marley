import { HashLink as Link } from "react-router-hash-link";
import burger2 from "../pictures/burger-icon.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <div className="nav-title">
          <h1>MARLEY'S</h1>
          <img src={burger2} alt="" />
        </div>
        <p>Burgers & More</p>
      </div>
      <div className="nav-btns">
        <Link to="#about" className="btn" smooth>
          About Us
        </Link>
        <Link to="#menu" className="btn" smooth>
          Our Menu
        </Link>
        <Link to="#location" smooth className="btn">
          Location
        </Link>
        <Link to="#contact" smooth className="btn">
          Contact
        </Link>
        {/* <ul>
          <li><a href="#about" data-text="About">About</a></li>
        </ul> */}
      </div>
    </div>
  );
};

export default Navbar;
