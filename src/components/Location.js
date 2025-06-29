import React from "react";
import location from "../pictures/location.png";
const Location = () => {
  return (
    <div>
      <div className="third-body">
        <div className="loc-pic" id="location">
          <h1>LOCATION</h1>
          <img src={location} alt="" />
        </div>
        <h5>Beirut/Dahye - Hadi Nasrallah Road - Facing Daouk Sweets</h5>
      </div>
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.8914862914412!2d35.52064782038484!3d33.85387947056902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f174d7572beed%3A0x1b782f5d40ecf2e!2sMarley&#39;s%20Food%20Truck!5e0!3m2!1sen!2slb!4v1727075430353!5m2!1sen!2slb"
          width="1200"
          height="400"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
