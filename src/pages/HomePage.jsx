// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Companies from "../components/Companies/Companies";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import Transparency from "../components/Transparency/Transparency";
import Market from "../components/Market/Market";
import Guarantee from "../components/Guarantee/Guarantee";
import Faq from "../components/FAQ/Faq";
import Icons from "../components/Icons/Icons";
import Cards from "../components/Cards/Cards";
import ORMTechiesComponent from "../components/ORMTechiesComponent/ORMTechiesComponent";
import "../App.css";
import Second from "../components/Second/Second";
import { iconData } from "../components/Icons/IconData";


function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="App">
      <Header />
      <Companies />
      <Second />
      <Market />
      <Guarantee />
      <ORMTechiesComponent />

      <Cards />
      <Faq />
      <Icons onSelect={setSelectedIndex} />
      <Transparency
        data={selectedIndex !== null ? iconData[selectedIndex] : null}
      />
  
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
