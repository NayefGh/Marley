import MenuInfo from "../components/MenuInfo";
import ExtraMenu from "../components/ExtraMenu";
import DrinkMenu from "../components/DrinkMenu";

const Menu = () => {
  return (
    <div>
      <div className="third-body" id="menu">
        <h1>MENU</h1>
        <h3>Our Burgers & Sandwishes are Grilled to Perfection</h3>
        <MenuInfo />
      </div>
      <ExtraMenu />
      <DrinkMenu />
    </div>
  );
};

export default Menu;
