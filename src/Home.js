import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Contact from "./components/Contact";
import TopBtn from "./components/TopBtn";
import Footer from "./components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Menu />
      <Location />
      <Contact />
      <TopBtn />
      <Footer />
    </div>
  );
};

export default Home;
