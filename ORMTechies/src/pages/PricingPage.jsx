// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import RestHeader from "../components/RestHeader/RestHeader";
import Icons from "../components/Icons/Icons";
import Faq from "../components/FAQ/Faq";
import Footer from "../components/Footer/Footer";
import PricingHero from '../components/PricingHero/PricingHero';
import Pricing3 from '../components/Pricing3/Pricing3';
import Transparency from "../components/Transparency/Transparency";
import Contact from "../components/Contact/Contact";
import { iconData } from "../components/Icons/IconData";
const PricingPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
     <Helmet>
    <title>Pricing Page</title>
    <meta name="title" content="PricingPage" />
  </Helmet>
  <div className="App">
   
   <RestHeader />
   <PricingHero />
    <Pricing3 />
    <Faq />
        <Icons onSelect={setSelectedIndex} />
        <Transparency
          data={selectedIndex !== null ? iconData[selectedIndex] : null}
        />
        <Contact />
   <Footer />
 </div>
    </>
  
  )
}

export default PricingPage;