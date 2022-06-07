import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "../Shared/Footer";
import Info from "./Info";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppoinment />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
