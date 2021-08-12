import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import InfoSection2 from "./components/InfoSection2";
import InfoSection3 from "./components/InfoSection3";
import InfoSection4 from "./components/InfoSection4";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Hero data={SliderData} />
        <InfoSection data={InfoData} />
        <InfoSection2 />
        <InfoSection3 />
        <InfoSection4 data={InfoDataTwo} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
