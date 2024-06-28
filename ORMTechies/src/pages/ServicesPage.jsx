// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import RestHeader from "../components/RestHeader/RestHeader";
import ServiceHero from "../components/ServiceHero/ServiceHero";
import Faq from "../components/FAQ/Faq";
import { Helmet } from "react-helmet";
import Icons from "../components/Icons/Icons";
import Footer from "../components/Footer/Footer";
import Transparency from "../components/Transparency/Transparency";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ServicesSectionTwo from "../components/ServiceSectionTwo/ServiceSectionTwo";
import ServiceComponent4 from "../components/ServiceComponent4/ServiceComponent4";
import ServiceComponent5 from "../components/ServiceComponent5/ServiceComponent5";
import Contact from "../components/Contact/Contact";
import ServiceFinal from "../components/ServiceFinal/ServiceFinal";
import { iconData } from "../components/Icons/IconData";
import Reputation from "../components/Reputation/Reputation";
const ServicesPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <Helmet>
        <title>Service Page</title>
        <meta name="title" content="ServicePage" />
      </Helmet>
      <div className="App">
        <RestHeader />
        <ServiceHero />
        <ServicesSectionTwo />
        <ServiceSection />
        <Reputation />
        <ServiceComponent4 />
        <ServiceComponent5 />
        <ServiceFinal />
        <Faq />
        <Icons onSelect={setSelectedIndex} />
        <Transparency
          data={selectedIndex !== null ? iconData[selectedIndex] : null}
        />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
