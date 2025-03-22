import up from "../pictures/up.png";

const TopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-btn-func">
      <div>
        <img src={up} className="top-btn" onClick={scrollToTop} alt="" />
      </div>
    </div>
  );
};

export default TopBtn;
