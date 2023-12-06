import AboutUs from "./components/aboutUs/AboutUs";
import Client from "./components/clientFolder/Client";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Major from "./components/major/Major";
import Navbar from "./components/navbar/Navbar";
// import OneWAC from "./components/oneweb/OneWAC";
import Service from "./components/serviceSec/Service";
import Slider from "./components/slider/Slider";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Major />
      <AboutUs />
      <Service />
      <Client />
      <Contact />
      {/* <OneWAC/> */}
      <Footer />
    </div>
  );
}

export default App;
