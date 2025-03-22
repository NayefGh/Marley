import hot2 from "../pictures/hot2.png";
import New from "../pictures/new.png";
const MenuInfo = () => {
  return (
    <div className="menu-info">
      <div className="menu-title">
        <h2>MARLEY'S</h2>
        <p>500,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          120g of our Juicy Grilled Beef Patty, Lettuce, Caramelized Onions,
          Tomato, BBQ, Mayo, Melted Cheddar
        </p>
      </div>
      <hr />
      <div className="menu-title">
        <h2>DOUBLE MARLEY'S</h2>
        <p>900,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          Double 120g of our Juicy Grilled Beef Patty, Lettuce, Caramelized
          Onions, Tomato, BBQ, Mayo, Double Melted Cheddar
        </p>
      </div>
      <hr />
      <div className="menu-title">
        <h2>HOTDOG</h2>
        <p>400,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          Grilled Hotdog, Mayo, Mustard, Ketchup, Mix of Chips, Melted
          Cheddar
        </p>
      </div>
      <hr />
      <div className="menu-title">
        <div className="menu-hot">
          <h2>LEBANESE STYLE</h2>
          <img src={New} alt="" />
        </div>
        <p>500,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          The Traditional Lebanese Burger with Juicy 120g Grilled Beef Patty,
          Fries, Coleslaw, Ketchup
        </p>
      </div>
      <hr />
      <div className="menu-title">
        <div className="menu-hot">
          <h2>CHICKEN MARLEY'S</h2>
          <img src={New} alt="" />
        </div>
        <p>500,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          120g Grilled Chicken Breast, Marley's Sauce, Honey Mustard, Corn,
          Lettuce, Pickles, Cheddar Patty
        </p>
      </div>
      <hr />
      <div className="menu-title">
        <div className="menu-hot">
          <h2>MEXICAN SUB</h2>
          <img src={hot2} alt="" />
        </div>
        <p>500,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          Marinated chicken with Mexican spices, special Mexican Sauce,
          Mozzarella Cheese, Mayo, Lettuce, Jalapeño, Corn
        </p>
      </div>
      <hr />
      <div className="menu-title">
        <h2>TAWOOK</h2>
        <p>400,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          Juicy Tawook chicken topped of with Creamy Garlic Sauce, Lettuce, Mayo,
          Pickles
        </p>
      </div>
      <hr />
      <div className="menu-title">
        <h2>TAWOOK BASHA</h2>
        <p>550,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          Juicy Tawook chicken topped of with Creamy Garlic Sauce, Lettuce, Mayo,
          Pickles, 2x Smoked Turkey, Mozzarella Cheese
        </p>
      </div>
      <hr />
      <div className="menu-title">
        <h2>FRIES BOX</h2>
        <p>300,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          Our Golden Fries fried to perfection served with BBQ sauce & Ketchup
        </p>
      </div>
      <hr />
      <div className="menu-title">
        <h2>MARLEY'S FRIES</h2>
        <p>COMING SOON</p>
      </div>
    </div>
  );
};

export default MenuInfo;
