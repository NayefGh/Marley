import burger2 from "../pictures/burger-icon.png";
import DropdownMenu from "../components/DropDownMenu";

const Navbar2 = () => {
  return (
    <div>
      <div className="navbar2">
        <div className="title2">
          <div className="nav-title2">
            <h1>MARLEY'S</h1>
            <img src={burger2} alt="" />
          </div>
          <p>Burgers & More</p>
        </div>
        <DropdownMenu />
      </div>
    </div>
  );
};

export default Navbar2;
