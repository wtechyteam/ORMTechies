// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import RestHeader from "../components/RestHeader/RestHeader";
import Footer from "../components/Footer/Footer"
import AboutHero from '../components/AboutHero/AboutHero';
import Companies from '../components/Companies/Companies';
import AboutTwo from '../components/AboutTwo/AboutTwo';
import AboutThree from '../components/AboutThree/AboutThree';
import Faq from "../components/FAQ/Faq";
import { Helmet } from "react-helmet";
import Icons from "../components/Icons/Icons";
import Transparency from "../components/Transparency/Transparency";
import { iconData } from "../components/Icons/IconData";
import Contact from "../components/Contact/Contact";

const AboutUsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
     <Helmet>
    <title>About Page</title>
    <meta name="title" content="AboutPage" />
  </Helmet>
    
    <div className="App">
   
      <RestHeader />
      <AboutHero />
      <Companies />
      <AboutTwo />
      <AboutThree />
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

export default AboutUsPage