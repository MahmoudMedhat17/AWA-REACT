import { Routes, Route } from "react-router-dom";
import Home from "./Sections/Home";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./Sections/AboutUs";
import WhyChooseUs from "./Sections/WhyChooseUs";
import OurValues from "./Sections/OurValues";
import SuccesPartners from "./Sections/SuccesPartners";
import OurVision from "./Sections/OurVision";
import Partners from "./Sections/Partners";
import ContactUs from "./Sections/ContactUs";
import Footer from "./Sections/Footer";
import Projects from "./Sections/Projects";
import "./App.css";
import Services from "./components/testing/services";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <OurValues />
      <SuccesPartners />
      <OurVision />
      <Partners />
      <ContactUs />
      <Footer />
      <Routes>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
