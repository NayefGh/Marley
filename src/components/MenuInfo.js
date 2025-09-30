import hot from "../pictures/hot.png";
// import New from "../pictures/new.png";

const MenuInfo = () => {
  return (
    <div className="menu-info">
      <div className="section-title" id="burgers">
        <h1>Burgers</h1>
      </div>
      <div className="menu-title">
        <h2>MARLEY'S</h2>
        <p>550,000 L.L</p>
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
        <p>950,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          Double 120g of our Juicy Grilled Beef Patty, Lettuce, Caramelized
          Onions, Tomato, BBQ, Mayo, Double Melted Cheddar
        </p>
      </div>
      <hr />

      <div className="menu-title">
        <div className="menu-hot">
          <h2>CRAZY MUSHROOM</h2>
        </div>
        <p>600,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          120g of our Juicy Beef Patty, Fresh Creamy Mushroom Sauce, Swiss
          Cheese
        </p>
      </div>
      <hr />

      <div className="menu-title">
        <div className="menu-hot">
          <h2>NO PEPPER, NO CRY</h2>
          <img src={hot} alt="hot" />
        </div>
        <p>550,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          120g of our Juicy Beef Patty, Marley's Chilli Sauce, Jalapeño,
          Iceberg, Mayo, Tomato, Cheddar Slice
        </p>
      </div>
      <hr />
      <div className="menu-title">
        <div className="menu-hot">
          <h2>CRUNCHY CHICKEN</h2>
        </div>
        <p>550,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          120g Crunchy Chicken Breast, Mayo, Iceberg, Tomato, Melted Cheddar
        </p>
      </div>
      <hr />
      <div className="menu-title">
        <div className="menu-hot">
          <h2>LEBANESE STYLE</h2>
        </div>
        <p>550,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          The Traditional Lebanese Burger with Juicy 120g Grilled Beef Patty,
          Fries, Coleslaw, Ketchup
        </p>
      </div>
      <hr />

      <div className="section-title" id="sandwish">
        <h1>Sandwiches</h1>
      </div>
      <div className="menu-title">
        <h2>HOTDOG</h2>
        <p>400,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          Grilled Hotdog, Mayo, Mustard, Ketchup, Mix of Chips, Melted Cheddar
        </p>
      </div>
      <hr />

      <div className="menu-title">
        <div className="menu-hot">
          <h2>FAJITAS</h2>
        </div>
        <p>600,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          Marinated Chicken, Real Avo Sauce, Fresh Mushrooms, Pepper Mix,
          Mozzarella
        </p>
      </div>
      <hr />

      <div className="menu-title">
        <div className="menu-hot">
          <h2>MEXICAN SUB</h2>
          <img src={hot} alt="hot" />
        </div>
        <p>550,000 L.L</p>
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
        <p>450,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          Juicy Red Marinated Tawook chicken topped of with Creamy Garlic Sauce,
          Lettuce, Mayo, Pickles
        </p>
      </div>
      <hr />

      <div className="menu-title">
        <h2>TAWOOK BASHA</h2>
        <p>600,000 L.L</p>
      </div>
      <div className="menu-para">
        <p>
          Juicy Red Marinated Tawook chicken topped of with Creamy Garlic Sauce,
          Lettuce, Mayo, Pickles, 2x Smoked Turkey, Mozzarella Cheese
        </p>
      </div>
      <hr />

      {/* Fries Section */}
      <div className="section-title" id="fries">
        <h1>Fries</h1>
      </div>
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
        <h2>CURLEY FRIES</h2>
        <p>COMING SOON</p>
      </div>
    </div>
  );
};

export default MenuInfo;
