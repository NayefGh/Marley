import truck from "../pictures/2.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="third-body">
        <h1>ABOUT US</h1>
        <div className="second-title">
          <p>
            We are a food truck located under Sfeir Bridge in Dahye. We started
            our business in the year 2017 with a group of 2 people who have the
            passion in making burgers. Our burgers specialized with its unique
            taste and its charcoal flames. With the freshness of our meat, you
            are in for an exceptional taste.
          </p>
          <img src={truck} alt="food truck" />
        </div>
      </div>
    </div>
  );
};

export default About;
