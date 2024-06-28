// eslint-disable-next-line no-unused-vars
import React from "react";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
