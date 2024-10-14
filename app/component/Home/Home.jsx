import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Locality from "./Locality";
import LifeStyle from "./LifeStyle";
import About from "./About";
import Working from "./Working";
import Services from "./Services";
import Stories from "./Stories";
import Products from "./Products";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <HeroSection />
      <Locality />
      <LifeStyle />
      <About />
      <Working />
      <Services />
      <Stories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
