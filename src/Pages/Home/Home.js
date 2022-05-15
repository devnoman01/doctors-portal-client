import React from "react";
import InfoCard from "../../Components/InfoCard";
import Banner from "./Banner";
import ServiceDescription from "./ServiceDescription";
import Info from "./Info";
import Services from "./Services";
import MakeAppointment from "./MakeAppointment";
import Testimonials from "./Testimonials";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Info />
      <Services />
      <ServiceDescription />
      <MakeAppointment />
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
