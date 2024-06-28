// eslint-disable-next-line no-unused-vars
import React from 'react';
import RestHeader from "../components/RestHeader/RestHeader";
import ContactHero from "../components/ContactHero/ContactHero";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Faq from "../components/FAQ/Faq";
import { Helmet } from "react-helmet";
import Location from "../components/Location/Location";
import Companies from '../components/Companies/Companies';

import "../App.css";

const ContactUsPage = () => {
  return (
    <>
     <Helmet>
    <title>Contact Page</title>
    <meta name="title" content="ContactPage" />
  </Helmet>
    <div className="App">
   
   <RestHeader />
   <ContactHero />
   <Companies />
   <Contact />
   <Location />
   <Faq />
   <Footer />
 </div>
    </>
    
  )
}

export default ContactUsPage